<template>
  <Card>
    <Form
          :model="searchParams"
          inline
          :label-width="120"
    >
      <FormItem label="类型：" >
        <Select v-model="searchParams.type" style="width:200px">
          <Option value="0">所有</Option>
          <Option value="1">收藏</Option>
          <Option value="a">A股</Option>
          <Option value="h">港股</Option>
          <Option value="us">美股</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
      </FormItem>
    </Form>
    <Table :columns="columns" :data="tempIndexTemperatureData" :row-class-name="rowClassName"></Table>
  </Card>
</template>

<script>
import { FUND_TOKEN, CODE_LIST_MAP, CODE_LIST } from '@/constant'
import { mapActions } from 'vuex'
import { groupBy } from 'lodash'
import dayjs from 'dayjs'
import { localRead } from '@/libs/util'
export default {
  name: 'indexFund',
  data () {
    return {
      searchParams: {
        type: '0',
        date: dayjs().subtract(1, 'days').format('YYYY-MM-DD'), // 时间
        metricsName: ['cp', 'pe_ttm', 'pb'],
        granularity: 'y10',
        metricsType: 'mcw'
      },
      indexTemperatureData: [],
      tempIndexTemperatureData: [],
      favoriteStockCodes: [],
      columns: [
        {
          title: '名称',
          width: 250,
          key: 'name'
        },
        {
          title: '指数编码',
          key: 'stockCode'
        },
        {
          title: 'pe温度',
          key: 'peTemperature'
        },
        {
          title: 'pb温度',
          key: 'pbTemperature'
        },
        {
          title: '长投温度',
          key: 'ctTemperature'
        },
        {
          title: 'Action',
          key: 'action',
          width: 250,
          align: 'center',
          render: (h, params) => {
            let notFavoriteStockCodes = localRead('NOT_FAVORITE_STOCK_CODES') ? JSON.parse(localRead('NOT_FAVORITE_STOCK_CODES')) : []
            let renderHtml = [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.toDetail(params.row.stockCode)
                  }
                }
              }, '查看走势图')
            ]
            console.log(notFavoriteStockCodes)
            if (notFavoriteStockCodes.map(item => item.stockCode).includes(params.row.stockCode)) {
              renderHtml.push(h('Tag', {
                props: {
                  color: 'magenta'
                }
              }, '黑名单'))
            }
            return h('div', renderHtml)
          }
        }
      ]
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    this.handleSearch()
  },
  methods: {
    ...mapActions([
      'getIndexFund'
    ]),
    toDetail (stockCode) {
      this.$router.push({
        path: 'index_fund_page',
        query: {
          stockCode
        }
      })
    },
    rowClassName (row, index) {
      if (+row.ctTemperature <= 20) {
        return 'table-low-row'
      } else if (+row.ctTemperature > 20 && row.ctTemperature <= 40) {
        return 'table-middle-row'
      } else if (+row.ctTemperature > 40) {
        return 'table-high-row'
      }
      return ''
    },
    handleSubmit (name) {
      switch (this.searchParams.type) {
        case '0':
          this.tempIndexTemperatureData = this.indexTemperatureData
          break
        case '1':
          let favoriteStockCodes = localRead('FAVORITE_STOCK_CODES') ? JSON.parse(localRead('FAVORITE_STOCK_CODES')) : []
          let stockCodeList = favoriteStockCodes.map(o => o.stockCode)
          this.tempIndexTemperatureData = this.indexTemperatureData.filter(item => stockCodeList.includes(item.stockCode))
          break
        default:
          this.tempIndexTemperatureData = this.indexTemperatureData.filter(item => item.market === this.searchParams.type)
      }
    },
    async handleSearch () {
      try {
        let { metricsName, granularity, metricsType, date } = this.searchParams
        let stockObj = groupBy(CODE_LIST, 'market')
        let metricsList = metricsName.map(item => {
          if (['pe_ttm', 'pb', 'ps_ttm'].includes(item)) {
            return `${item}.${granularity}.${metricsType}`
          }
          if (['dyr'].includes(item)) {
            return `${item}.${metricsType}`
          }
          return item
        })
        let indexFundData = []
        for (let key in stockObj) {
          if (key === 'us') {
            date = dayjs().subtract(2, 'days').format('YYYY-MM-DD')
          }
          let stockCodes = stockObj[key].map(item => item.stockCode)
          if (stockCodes.length > 100) {
            let len = Math.ceil(stockCodes.length / 100)
            for (let i = 1; i <= len; i++) {
              let params = {
                stockCodes: stockCodes.filter((key, index) => (index < i * 100 && index >= (i - 1) * 100)),
                date,
                metricsList,
                token: FUND_TOKEN
              }
              let res = await this.getIndexFund(params)
              indexFundData = [...indexFundData, ...res]
            }
          } else {
            let params = {
              stockCodes,
              date,
              metricsList,
              token: FUND_TOKEN
            }
            let res = await this.getIndexFund(params)
            indexFundData = [...indexFundData, ...res]
          }
        }
        let indexTemperatureData = indexFundData.map(item => {
          return {
            stockCode: item.stockCode,
            name: CODE_LIST_MAP[item.stockCode],
            market: CODE_LIST.find(o => o.stockCode === item.stockCode).market,
            peTemperature: (item['pe_ttm'][granularity][metricsType].cvpos * 100).toFixed(2),
            pbTemperature: (item['pb'][granularity][metricsType].cvpos * 100).toFixed(2),
            ctTemperature: (((item['pe_ttm'][granularity][metricsType].cvpos + item['pb'][granularity][metricsType].cvpos) / 2) * 100).toFixed(2)
          }
        })
        this.indexTemperatureData = indexTemperatureData.sort((x, y) => x.ctTemperature - y.ctTemperature)
        this.tempIndexTemperatureData = this.indexTemperatureData
      } catch (e) {
        this.$Message.error('Fail!' + error)
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .ivu-table th {
    height: 60px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #f8f8f9;
  }
  /deep/.ivu-table .table-low-row td{
    background: rgba(34, 139, 34, 0.07);
    color: #009682;
    font-size: 16px;
    line-height: 4;
  }
  /deep/.ivu-table .table-middle-row td{
    background-color: #ffa60312;
    color: #c4aa25;
    font-size: 16px;
    line-height: 4;
  }
  /deep/.ivu-table .table-high-row td{
    background-color: rgba(255, 0, 0, 0.07);
    color: #e95a5a;
    font-size: 16px;
    line-height: 4;
  }
</style>

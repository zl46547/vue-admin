<template>
  <Card>
    <Form ref="formInline"
          :model="searchParams"
          :rules="searchParamsRule"
          inline
          :label-width="120"
    >
      <FormItem label="股票代码：" prop="stockCodes">
        <Select v-model="searchParams.stockCodes" filterable placeholder="股票代码"  style="width:200px">
          <Option v-for="item in codeList" :value="item.stockCode" :key="item.stockCode">{{ item.name }} / ({{item.stockCode}})</Option>
        </Select>
      </FormItem>
      <FormItem label="时间范围：">
        <DatePicker v-model="searchParams.dateRange"
                    type="datetimerange"
                    placeholder="请选择时间范围"
                    format="yyyy-MM-dd"
                    :clearable="false"
                    style="width: 200px"/>
      </FormItem>
      <FormItem label="查询周期：" >
        <Select v-model="searchParams.granularity" style="width:200px" @on-change="onGranularityChange">
          <Option value="fs">所有</Option>
          <Option value="y20">20年</Option>
          <Option value="y10">10年</Option>
          <Option value="y5">5年</Option>
          <Option value="y3">3年</Option>
        </Select>
      </FormItem>
      <FormItem label="加权方式：">
        <Select v-model="searchParams.metricsType" style="width:200px">
          <Option value="mcw">市值加权</Option>
          <Option value="ew">等权</Option>
          <Option value="ewpvo">正数等权</Option>
          <Option value="avg">平均值</Option>
          <Option value="median">中位数</Option>
        </Select>
      </FormItem>
      <FormItem label="我的收藏：">
        <template v-if="favoriteStockCodes.length>0">
          <div v-for="item in favoriteStockCodes"
               :key="item.stockCode"
               class="favorite-stock-codes"
               @click="searchParams.stockCodes = item.stockCode"
          >
            {{item.name}}
            <Icon type="md-close" @click.stop="handleDelete(item.stockCode)" />
          </div>
        </template>
        <span v-else>暂无收藏记录</span>
      </FormItem>
      <FormItem label="参数名称：">
        <CheckboxGroup v-model="searchParams.metricsName">
            <Checkbox :label="item.value"
                      :disabled="['cp','pe_ttm','pb'].includes(item.value)"
                      v-for="item in metricsNameList"
                      v-if="item.value !== 'ct'"
                      :key="item.value"
            >{{item.label}}</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <Row>
        <Button type="primary" @click="saveFavoriteStockCode" class="btn">收藏</Button>
        <Button type="primary" @click="saveNotFavoriteStockCode" class="btn">设为黑名单</Button>
        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
      </Row>
    </Form>

    <Bar
      :value="indexFundData"
      :text="getText"
      :granularity="searchParams.granularity"
      :metricsType="searchParams.metricsType"
    />
  </Card>
</template>

<script>
import { METRICS_NAME_LIST, FUND_TOKEN, CODE_LIST_MAP, CODE_LIST } from '@/constant'
import { mapActions } from 'vuex'
import Bar from './compoments/Bar'
import { sortBy } from 'lodash'
import dayjs from 'dayjs'
import { localSave, localRead } from '@/libs/util'
export default {
  name: 'indexFund',
  data () {
    return {
      metricsNameList: METRICS_NAME_LIST,
      codeList: CODE_LIST,
      searchParams: {
        stockCodes: '', // 股票代码数组
        dateRange: [new Date(dayjs().subtract(10, 'years').format('YYYY-MM-DD')), new Date()], // 时间范围
        metricsName: ['cp', 'pe_ttm', 'pb'],
        granularity: 'y10',
        metricsType: 'mcw' // 市值加权 :mcw；等权 :ew；正数等权 :ewpvo；平均值 :avg；中位数 :median
      },
      searchParamsRule: {
        stockCodes: [
          { required: true, message: '请输入股票代码', trigger: 'blur' },
          { validator: (rule, value, callback) => {
            if (!CODE_LIST_MAP[value]) {
              callback(new Error('请输入正确的股票代码！'))
            }
            callback()
          },
          trigger: 'blur' }
        ]
      },
      indexFundData: [],
      favoriteStockCodes: [],
      notFavoriteStockCodes: []
    }
  },
  components: {
    Bar
  },
  computed: {
    getText () {
      return CODE_LIST_MAP[this.searchParams.stockCodes]
    }
  },
  mounted () {
    this.favoriteStockCodes = localRead('FAVORITE_STOCK_CODES') ? JSON.parse(localRead('FAVORITE_STOCK_CODES')) : []
    this.notFavoriteStockCodes = localRead('NOT_FAVORITE_STOCK_CODES') ? JSON.parse(localRead('NOT_FAVORITE_STOCK_CODES')) : []
    this.searchParams.stockCodes = this.$route.query.stockCode
    if (this.searchParams.stockCodes) {
      this.handleSubmit('formInline')
    }
  },
  methods: {
    ...mapActions([
      'getIndexFund'
    ]),
    handleDelete (stockCode) {
      this.favoriteStockCodes = this.favoriteStockCodes.filter(item => item.stockCode !== stockCode)
      localSave('FAVORITE_STOCK_CODES', JSON.stringify(this.favoriteStockCodes))
    },
    onGranularityChange (value) {
      if (value === 'fs') {
        return false
      }
      this.searchParams.dateRange = [new Date(dayjs().subtract(value.replace('y', ''), 'years').format('YYYY-MM-DD')), new Date()]
    },
    saveFavoriteStockCode () {
      let { stockCodes } = this.searchParams
      // 如果在黑名单中，就从黑名单中移除
      if (this.notFavoriteStockCodes.findIndex(item => item.stockCode === stockCodes) > -1) {
        this.notFavoriteStockCodes = this.notFavoriteStockCodes.filter(item => item.stockCode !== stockCodes)
        localSave('NOT_FAVORITE_STOCK_CODES', JSON.stringify(this.notFavoriteStockCodes))
      }
      if (this.favoriteStockCodes.findIndex(item => item.stockCode === stockCodes) < 0) {
        this.favoriteStockCodes = [
          CODE_LIST.find(item => item.stockCode === stockCodes),
          ...this.favoriteStockCodes
        ]
        localSave('FAVORITE_STOCK_CODES', JSON.stringify(this.favoriteStockCodes))
        this.$Message.success('收藏成功！')
      } else {
        this.$Message.error('已在收藏列表中！')
      }
    },
    saveNotFavoriteStockCode () {
      let { stockCodes } = this.searchParams
      // 如果在收藏列表中，就从收藏列表中移除
      if (this.favoriteStockCodes.findIndex(item => item.stockCode === stockCodes) > -1) {
        this.favoriteStockCodes = this.favoriteStockCodes.filter(item => item.stockCode !== stockCodes)
        localSave('FAVORITE_STOCK_CODES', JSON.stringify(this.favoriteStockCodes))
      }
      if (this.notFavoriteStockCodes.findIndex(item => item.stockCode === stockCodes) < 0) {
        this.notFavoriteStockCodes = [
          CODE_LIST.find(item => item.stockCode === stockCodes),
          ...this.notFavoriteStockCodes
        ]
        localSave('NOT_FAVORITE_STOCK_CODES', JSON.stringify(this.notFavoriteStockCodes))
        this.$Message.success('加入黑名单成功！')
      } else {
        this.$Message.error('已在黑名单中！')
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          try {
            let { stockCodes, metricsName, granularity, metricsType, dateRange } = this.searchParams
            let metricsList = metricsName.map(item => {
              if (['pe_ttm', 'pb', 'ps_ttm'].includes(item)) {
                return `${item}.${granularity}.${metricsType}`
              }
              if (['dyr'].includes(item)) {
                return `${item}.${metricsType}`
              }
              return item
            })
            let params = {
              stockCodes: [stockCodes],
              startDate: dayjs(dateRange[0]).format('YYYY-MM-DD'),
              endDate: dayjs(dateRange[1]).format('YYYY-MM-DD'),
              metricsList,
              token: FUND_TOKEN
            }
            this.getIndexFund(params).then(res => {
              this.indexFundData = sortBy(res, item => item.date)
            }).catch(error => {
              this.$Message.error('Fail!' + error)
            })
          } catch (e) {
            console.log(e)
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.favorite-stock-codes{
  padding:2px 5px;
  text-align: center;
  border-radius: 5px;
  background-color: #2d8cf026;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
  .btn{
    margin-right: 10px;
  }
</style>

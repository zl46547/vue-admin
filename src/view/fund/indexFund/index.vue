<template>
  <Card>
    <Form ref="formInline"
          :model="searchParams"
          :rules="searchParamsRule"
          inline
          :label-width="120"
    >
      <FormItem label="股票代码：" prop="stockCodes">
        <Input type="text" v-model="searchParams.stockCodes" placeholder="股票代码">
          <span slot="append" v-if="getText">{{getText}}</span>
        </Input>
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
      <FormItem label="历史记录：">
        <template v-if="historyStockCodes.length>0">
          <div v-for="item in historyStockCodes"
               :key="item.stockCode"
               class="history-stock-codes"
               @click="searchParams.stockCodes = item.stockCode"
          >
            {{item.name}}
            <Icon type="md-close" @click.stop="handleDelete(item.stockCode)" />
          </div>
        </template>
        <span v-else>暂无历史记录</span>
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
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
      </FormItem>
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
      searchParams: {
        stockCodes: '000905', // 股票代码数组
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
      historyStockCodes: []
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
    this.historyStockCodes = localRead('STOCK_CODES') ? JSON.parse(localRead('STOCK_CODES')) : []
  },
  methods: {
    ...mapActions([
      'getIndexFund'
    ]),
    handleDelete (stockCode) {
      this.historyStockCodes = this.historyStockCodes.filter(item => item.stockCode !== stockCode)
      localSave('STOCK_CODES', JSON.stringify(this.historyStockCodes))
    },
    onGranularityChange (value) {
      if (value === 'fs') {
        return false
      }
      this.searchParams.dateRange = [new Date(dayjs().subtract(value.replace('y', ''), 'years').format('YYYY-MM-DD')), new Date()]
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          try {
            let { stockCodes, metricsName, granularity, metricsType, dateRange } = this.searchParams
            if (this.historyStockCodes.findIndex(item => item.stockCode === stockCodes) < 0) {
              this.historyStockCodes = [
                CODE_LIST.find(item => item.stockCode === stockCodes),
                ...this.historyStockCodes
              ]
              localSave('STOCK_CODES', JSON.stringify(this.historyStockCodes))
            }
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
.history-stock-codes{
  width: 80px;
  padding:2px 5px;
  text-align: center;
  border-radius: 5px;
  background-color: #2d8cf026;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>

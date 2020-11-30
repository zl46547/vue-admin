<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from 'echarts'
import { METRICS_NAME_Map } from '@/constant'
import tdTheme from '@/components/charts/theme.json'
import { on, off } from '@/libs/tools'
import dayjs from 'dayjs'
import { isEmpty } from 'lodash'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    value: Array,
    text: String,
    granularity: String,
    metricsType: String
  },
  data () {
    return {
      dom: null
    }
  },
  watch: {
    value: {
      handler () {
        this.renderBarData()
      },
      deep: true
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    renderBarData () {
      if (isEmpty(this.value)) {
        return false
      }
      let xAxisData = this.value.map(item => dayjs(item.date).format('YYYY-MM-DD'))
      let legendData = []
      let seriesData = []
      let yAxisData = []
      let yAxisIndex = -1
      // 让收盘点位位于第一个key,增加一个长投温度ct
      let keysObj = ['cp', 'ct', ...Object.keys(this.value[0]).filter(item => item !== 'cp')]
      keysObj.forEach((key, index) => {
        try {
          if (METRICS_NAME_Map[key]) {
            yAxisIndex++
            legendData.push(METRICS_NAME_Map[key])
            yAxisData.push({
              type: 'value',
              name: METRICS_NAME_Map[key],
              offset: yAxisIndex > 1 ? (yAxisIndex - 1) * 50 : 0
            })
            seriesData.push({
              name: METRICS_NAME_Map[key],
              type: 'line',
              yAxisIndex,
              data: this.value.map(item => {
                if (!item[key] && key !== 'ct') {
                  return 0
                }
                if (['pe_ttm', 'pb', 'ps_ttm'].includes(key)) {
                  return (item[key][this.granularity][this.metricsType].cvpos * 100).toFixed(2)
                }
                if (['dyr'].includes(key)) {
                  return item[key][this.metricsType].toFixed(2)
                }
                if (['ct'].includes(key)) {
                  return (((item['pe_ttm'][this.granularity][this.metricsType].cvpos + item['pb'][this.granularity][this.metricsType].cvpos) / 2) * 100).toFixed(2)
                }
                return item[key].toFixed(2)
              })
            })
          }
        } catch (e) {
          this.$Message.error('Fail!' + e)
          console.log(index, e)
        }
      })
      console.log(yAxisData, seriesData)
      let option = {
        title: {
          text: this.text,
          x: '80'
        },
        grid: {
          right: 80 + (legendData.length - 1) * 50
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        legend: {
          data: legendData
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: yAxisData,
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty'
          }
        ],
        series: seriesData
      }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.renderBarData()
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>

<style scoped lang="less">
  .chart-bar{
    width: 100%;
    height: 500px;
  }
</style>

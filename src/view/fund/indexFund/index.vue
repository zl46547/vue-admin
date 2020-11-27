<template>
  <Card>
    <Form ref="formInline"
          :model="searchParams"
          :rules="searchParamsRule"
          inline
          :label-width="120"
    >
      <FormItem label="股票代码：" prop="stockCodes">
        <Input type="text" v-model="searchParams.stockCodes" placeholder="股票代码"/>
      </FormItem>
      <FormItem label="时间范围：">
        <DatePicker v-model="searchParams.dateRange"
                    type="datetimerange"
                    placeholder="请选择时间范围"
                    format="YYYY-MM-DD"
                    style="width: 200px"/>
      </FormItem>
      <FormItem label="查询周期：">
        <Select v-model="searchParams.granularity" style="width:200px">
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
      <FormItem label="参数名称：">
        <CheckboxGroup v-model="searchParams.metricsName">
          <Checkbox :label="item.value"
                    :disabled="item.value === 'cp'"
                    v-for="item in metricsNameList"
                    :key="item.value"
          >{{item.label}}</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script>
  import {METRICS_NAME_LIST} from '@/constant'
export default {
  name: 'indexFund',
  data () {
    return {
      metricsNameList:METRICS_NAME_LIST,
      searchParams: {
        stockCodes: "", // 股票代码数组
        dateRange: [], // 时间范围
        metricsName:['cp'],
        granularity:'fs',
        metricsType:'mcw' // 市值加权 :mcw；等权 :ew；正数等权 :ewpvo；平均值 :avg；中位数 :median
      },
      searchParamsRule: {
        stockCodes: [
          { required: true, message: '请输入股票代码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.searchParams)
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>

<style lang="less">

</style>

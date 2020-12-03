export const METRICS_NAME_LIST = [
  { label: 'PE-TTM', value: 'pe_ttm' },
  { label: 'PB', value: 'pb' },
  { label: 'PS-TTM', value: 'ps_ttm' },
  { label: '股息率', value: 'dyr' },
  { label: '收盘点位', value: 'cp' },
  // { label: '全收益收盘点位', value: 'r_cp' },
  { label: '涨跌幅', value: 'cpc' },
  { label: '市值', value: 'mc' },
  { label: '流通市值', value: 'cmc' },
  { label: '融资余额', value: 'fb' },
  { label: '融资余额', value: 'sb' },
  { label: '陆股通持仓金额', value: 'ha_shm' },
  { label: '长投温度', value: 'ct' }
]

export const METRICS_NAME_Map = METRICS_NAME_LIST.reduce((result, next) => {
  result[next.value] = next.label
  return result
}, {})

export const FUND_TOKEN = '6a57a822-66fc-41c2-b42f-69d98e392f2d'

export const CODE_LIST = [
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930606',
    'source': 'csi',
    'name': '中证钢铁',
    'launchDate': '2015-03-30T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930629',
    'source': 'csi',
    'name': 'CSSW健康',
    'launchDate': '2015-05-07T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930651',
    'source': 'csi',
    'name': 'CS计算机',
    'launchDate': '2015-06-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930652',
    'source': 'csi',
    'name': 'CS电子',
    'launchDate': '2015-06-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930653',
    'source': 'csi',
    'name': 'CS食品饮',
    'launchDate': '2015-06-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930697',
    'source': 'csi',
    'name': '家用电器',
    'launchDate': '2015-07-06T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930709',
    'source': 'csi',
    'name': '香港证券',
    'launchDate': '2015-07-12T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930713',
    'source': 'csi',
    'name': 'CS人工智',
    'launchDate': '2015-07-30T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930719',
    'source': 'csi',
    'name': 'CS精准医',
    'launchDate': '2015-08-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930723',
    'source': 'csi',
    'name': '沪港深F100',
    'launchDate': '2015-08-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930726',
    'source': 'csi',
    'name': 'CS生医',
    'launchDate': '2015-08-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930740',
    'source': 'csi',
    'name': '300 红利LV',
    'launchDate': '2018-12-03T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930743',
    'source': 'csi',
    'name': '中证生科',
    'launchDate': '2015-08-25T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930746',
    'source': 'csi',
    'name': '港中小企',
    'launchDate': '2015-08-25T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930782',
    'source': 'csi',
    'name': '500SNLV',
    'launchDate': '2016-02-03T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930791',
    'source': 'csi',
    'name': 'CS医药TI',
    'launchDate': '2016-03-21T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930792',
    'source': 'csi',
    'name': 'HK银行',
    'launchDate': '2016-04-21T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930820',
    'source': 'csi',
    'name': 'CS高端制',
    'launchDate': '2016-05-10T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930846',
    'source': 'csi',
    'name': '300SNLV',
    'launchDate': '2016-06-23T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930955',
    'source': 'csi',
    'name': '红利低波100',
    'launchDate': '2017-05-25T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '930997',
    'source': 'csi',
    'name': '新能源车',
    'launchDate': '2017-07-18T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931008',
    'source': 'csi',
    'name': '汽车指数',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931009',
    'source': 'csi',
    'name': '建筑材料',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931052',
    'source': 'csi',
    'name': '国信价值',
    'launchDate': '2017-12-07T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931066',
    'source': 'csi',
    'name': '军工龙头',
    'launchDate': '2018-02-04T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931068',
    'source': 'csi',
    'name': '消费龙头',
    'launchDate': '2018-11-20T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931071',
    'source': 'csi',
    'name': '人工智能',
    'launchDate': '2018-11-20T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931079',
    'source': 'csi',
    'name': '5G通信',
    'launchDate': '2019-04-24T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931087',
    'source': 'csi',
    'name': '科技龙头',
    'launchDate': '2019-03-19T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931139',
    'source': 'csi',
    'name': 'CS消费50',
    'launchDate': '2019-03-19T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931140',
    'source': 'csi',
    'name': '医药50',
    'launchDate': '2019-03-19T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931142',
    'source': 'csi',
    'name': '东证竞争',
    'launchDate': '2019-03-19T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931144',
    'source': 'csi',
    'name': '通信技术',
    'launchDate': '2019-05-29T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931152',
    'source': 'csi',
    'name': 'CS创新药',
    'launchDate': '2019-04-21T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931159',
    'source': 'csi',
    'name': '创新100',
    'launchDate': '2019-05-15T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931160',
    'source': 'csi',
    'name': '通信设备',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931165',
    'source': 'csi',
    'name': '新兴科技100',
    'launchDate': '2019-04-24T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931166',
    'source': 'csi',
    'name': '医药健康100',
    'launchDate': '2019-04-24T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931167',
    'source': 'csi',
    'name': '先进制造100',
    'launchDate': '2019-04-24T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931186',
    'source': 'csi',
    'name': '中证科技',
    'launchDate': '2019-05-29T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931187',
    'source': 'csi',
    'name': '科技100',
    'launchDate': '2019-05-29T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931373',
    'source': 'csi',
    'name': '股息龙头',
    'launchDate': '2019-11-14T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931380',
    'source': 'csi',
    'name': '科技50',
    'launchDate': '2019-11-24T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931406',
    'source': 'csi',
    'name': '5G 50',
    'launchDate': '2020-02-19T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '931461',
    'source': 'csi',
    'name': '电子50',
    'launchDate': '2009-07-21T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '950090',
    'source': 'csi',
    'name': '上证50优选',
    'launchDate': '2015-12-09T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '950096',
    'source': 'csi',
    'name': '上海国企',
    'launchDate': '2016-05-10T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '990001',
    'source': 'csi',
    'name': '中华半导体',
    'launchDate': '2019-03-17T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H11136',
    'source': 'csi',
    'name': '中国互联网',
    'launchDate': '2011-09-19T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30089',
    'source': 'csi',
    'name': '红利潜力',
    'launchDate': '2013-07-01T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30094',
    'source': 'csi',
    'name': '消费红利',
    'launchDate': '2013-07-01T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30165',
    'source': 'csi',
    'name': '房地产',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30184',
    'source': 'csi',
    'name': '半导体',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30269',
    'source': 'csi',
    'name': '红利低波',
    'launchDate': '2013-12-18T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30533',
    'source': 'csi',
    'name': '中国互联网50',
    'launchDate': '2014-12-28T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H30588',
    'source': 'csi',
    'name': '中证证保',
    'launchDate': '2015-02-01T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': 'H50040',
    'source': 'csi',
    'name': '上红低波',
    'launchDate': '2014-03-20T16:00:00.000Z'
  },
  {
    'stockCode': '1000002',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '沪深A股',
    'launchDate': '1993-12-31T16:00:00.000Z'
  },
  {
    'stockCode': '1000003',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深圳A股',
    'launchDate': '1993-12-31T16:00:00.000Z'
  },
  {
    'stockCode': '1000004',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上海A股',
    'launchDate': '1993-12-31T16:00:00.000Z'
  },
  {
    'stockCode': '1000005',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上海非金融A股',
    'launchDate': '1993-12-31T16:00:00.000Z'
  },
  {
    'stockCode': '1000007',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '创业板全指',
    'launchDate': '2010-04-30T16:00:00.000Z'
  },
  {
    'stockCode': '1000008',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '沪深B股',
    'launchDate': '1994-01-09T16:00:00.000Z'
  },
  {
    'stockCode': '1000009',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深圳B股',
    'launchDate': '1994-01-09T16:00:00.000Z'
  },
  {
    'stockCode': '1000010',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上海B股',
    'launchDate': '1994-01-09T16:00:00.000Z'
  },
  {
    'stockCode': '1000011',
    'source': 'lxri',
    'areaCode': 'cn',
    'market': 'a',
    'name': '沪深非金融A股',
    'launchDate': '1994-01-09T16:00:00.000Z'
  },
  {
    'stockCode': '1000012',
    'areaCode': 'cn',
    'source': 'lxri',
    'market': 'a',
    'name': '中小板全指',
    'launchDate': '2005-11-30T16:00:00.000Z'
  },
  {
    'stockCode': '1000014',
    'areaCode': 'cn',
    'source': 'lxri',
    'market': 'a',
    'name': '科创板全指',
    'launchDate': '2019-07-21T16:00:00.000Z'
  },
  {
    'stockCode': '000009',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证380',
    'launchDate': '2010-11-28T16:00:00.000Z'
  },
  {
    'stockCode': '000010',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证180',
    'launchDate': '2002-06-30T16:00:00.000Z'
  },
  {
    'stockCode': '000015',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '红利指数',
    'launchDate': '2005-01-03T16:00:00.000Z'
  },
  {
    'stockCode': '000016',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证50',
    'launchDate': '2004-01-01T16:00:00.000Z'
  },
  {
    'stockCode': '000018',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '180金融',
    'launchDate': '2007-12-09T16:00:00.000Z'
  },
  {
    'stockCode': '000021',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '180治理',
    'launchDate': '2008-09-09T16:00:00.000Z'
  },
  {
    'stockCode': '000028',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '180成长',
    'launchDate': '2009-01-08T16:00:00.000Z'
  },
  {
    'stockCode': '000029',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '180价值',
    'launchDate': '2009-01-08T16:00:00.000Z'
  },
  {
    'stockCode': '000036',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证消费',
    'launchDate': '2009-01-08T16:00:00.000Z'
  },
  {
    'stockCode': '000037',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证医药',
    'launchDate': '2009-01-08T16:00:00.000Z'
  },
  {
    'stockCode': '000042',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证央企',
    'launchDate': '2009-03-29T16:00:00.000Z'
  },
  {
    'stockCode': '000043',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '超大盘',
    'launchDate': '2009-04-22T16:00:00.000Z'
  },
  {
    'stockCode': '000046',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证中小',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000048',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '责任指数',
    'launchDate': '2009-08-04T16:00:00.000Z'
  },
  {
    'stockCode': '000056',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证国企',
    'launchDate': '2010-01-03T16:00:00.000Z'
  },
  {
    'stockCode': '000063',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证周期',
    'launchDate': '2010-02-02T16:00:00.000Z'
  },
  {
    'stockCode': '000068',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '上证资源',
    'launchDate': '2010-05-27T16:00:00.000Z'
  },
  {
    'stockCode': '000069',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '消费80',
    'launchDate': '2010-05-27T16:00:00.000Z'
  },
  {
    'stockCode': '000300',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '沪深300',
    'launchDate': '2005-04-07T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '000688',
    'source': 'csi',
    'name': '科创50',
    'launchDate': '2020-07-22T16:00:00.000Z'
  },
  {
    'stockCode': '000806',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '消费服务',
    'launchDate': '2012-02-09T16:00:00.000Z'
  },
  {
    'stockCode': '000807',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '食品饮料',
    'launchDate': '2012-02-16T16:00:00.000Z'
  },
  {
    'stockCode': '000808',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '医药生物',
    'launchDate': '2012-02-16T16:00:00.000Z'
  },
  {
    'stockCode': '000814',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '细分医药',
    'launchDate': '2012-04-10T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '000819',
    'source': 'csi',
    'name': '有色金属',
    'launchDate': '2012-05-08T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '000821',
    'source': 'csi',
    'name': '300红利',
    'launchDate': '2012-07-19T16:00:00.000Z'
  },
  {
    'stockCode': '000824',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国企红利',
    'launchDate': '2012-07-19T16:00:00.000Z'
  },
  {
    'stockCode': '000827',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证环保',
    'launchDate': '2012-09-24T16:00:00.000Z'
  },
  {
    'stockCode': '000841',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '800医药',
    'launchDate': '2012-12-20T16:00:00.000Z'
  },
  {
    'stockCode': '000842',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '800等权',
    'launchDate': '2012-12-20T16:00:00.000Z'
  },
  {
    'stockCode': '000849',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '300非银',
    'launchDate': '2012-12-20T16:00:00.000Z'
  },
  {
    'stockCode': '000852',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证1000',
    'launchDate': '2014-10-16T16:00:00.000Z'
  },
  {
    'stockCode': '000857',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '500医药',
    'launchDate': '2013-11-05T16:00:00.000Z'
  },
  {
    'stockCode': '000858',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '500信息',
    'launchDate': '2013-11-05T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '000860',
    'source': 'csi',
    'name': '结构调整',
    'launchDate': '2018-03-25T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '000861',
    'source': 'csi',
    'name': '央企创新',
    'launchDate': '2019-05-15T16:00:00.000Z'
  },
  {
    'stockCode': '000901',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '小康指数',
    'launchDate': '2010-04-01T16:00:00.000Z'
  },
  {
    'stockCode': '000903',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证100',
    'launchDate': '2006-05-28T16:00:00.000Z'
  },
  {
    'stockCode': '000904',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证200',
    'launchDate': '2007-01-14T16:00:00.000Z'
  },
  {
    'stockCode': '000905',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证500',
    'launchDate': '2007-01-14T16:00:00.000Z'
  },
  {
    'stockCode': '000906',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '中证800',
    'launchDate': '2007-01-14T16:00:00.000Z'
  },
  {
    'stockCode': '000907',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证700',
    'launchDate': '2007-01-14T16:00:00.000Z'
  },
  {
    'stockCode': '000908',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '300能源',
    'launchDate': '2007-07-01T16:00:00.000Z'
  },
  {
    'stockCode': '000912',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '300消费',
    'launchDate': '2007-07-01T16:00:00.000Z'
  },
  {
    'stockCode': '000913',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '300医药',
    'launchDate': '2007-07-01T16:00:00.000Z'
  },
  {
    'stockCode': '000914',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '300金融',
    'launchDate': '2007-07-01T16:00:00.000Z'
  },
  {
    'stockCode': '000918',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '300成长',
    'launchDate': '2008-01-20T16:00:00.000Z'
  },
  {
    'stockCode': '000919',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '300价值',
    'launchDate': '2008-01-20T16:00:00.000Z'
  },
  {
    'stockCode': '000922',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证红利',
    'launchDate': '2008-05-25T16:00:00.000Z'
  },
  {
    'stockCode': '000925',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '基本面50',
    'launchDate': '2009-02-25T16:00:00.000Z'
  },
  {
    'stockCode': '000928',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证能源',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000929',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证材料',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000930',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证工业',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000931',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证可选',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000932',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证消费',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000933',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证医药',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000934',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证金融',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000935',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证信息',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000936',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证电信',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000937',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证公用',
    'launchDate': '2009-07-02T16:00:00.000Z'
  },
  {
    'stockCode': '000941',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '新能源',
    'launchDate': '2009-10-27T16:00:00.000Z'
  },
  {
    'stockCode': '000942',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '内地消费',
    'launchDate': '2009-10-27T16:00:00.000Z'
  },
  {
    'stockCode': '000952',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '300地产',
    'launchDate': '2009-10-27T16:00:00.000Z'
  },
  {
    'stockCode': '000958',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '创业成长',
    'launchDate': '2010-03-23T16:00:00.000Z'
  },
  {
    'stockCode': '000978',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '医药100',
    'launchDate': '2011-03-17T16:00:00.000Z'
  },
  {
    'stockCode': '000979',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '大宗商品',
    'launchDate': '2011-08-21T16:00:00.000Z'
  },
  {
    'stockCode': '000986',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指能源',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000987',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指材料',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000988',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指工业',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000989',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指可选',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000990',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指消费',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000991',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指医药',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000992',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指金融',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000993',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指信息',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000994',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指电信',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000995',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '全指公用',
    'launchDate': '2011-08-01T16:00:00.000Z'
  },
  {
    'stockCode': '000998',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '中证TMT',
    'launchDate': '2011-11-07T16:00:00.000Z'
  },
  {
    'stockCode': '399001',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深证成指',
    'launchDate': '1994-12-31T16:00:00.000Z'
  },
  {
    'stockCode': '399005',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中小板指',
    'launchDate': '2006-01-23T16:00:00.000Z'
  },
  {
    'stockCode': '399006',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '创业板指',
    'launchDate': '2010-05-31T16:00:00.000Z'
  },
  {
    'stockCode': '399007',
    'areaCode': 'cn',
    'source': 'cni',
    'market': 'a',
    'name': '深证300',
    'launchDate': '2009-11-03T16:00:00.000Z'
  },
  {
    'stockCode': '399008',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中小300',
    'launchDate': '2010-03-21T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399286',
    'source': 'cni',
    'name': '区块链50',
    'launchDate': '2019-12-23T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399295',
    'source': 'cni',
    'name': '创业蓝筹',
    'launchDate': '2019-01-22T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399296',
    'source': 'cni',
    'name': '创成长',
    'launchDate': '2019-01-22T16:00:00.000Z'
  },
  {
    'stockCode': '399313',
    'areaCode': 'cn',
    'source': 'cni',
    'market': 'a',
    'name': '巨潮100',
    'launchDate': '2005-01-03T16:00:00.000Z'
  },
  {
    'stockCode': '399324',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深证红利',
    'launchDate': '2006-01-23T16:00:00.000Z'
  },
  {
    'stockCode': '399326',
    'areaCode': 'cn',
    'source': 'cni',
    'market': 'a',
    'name': '成长40',
    'launchDate': '2006-01-23T16:00:00.000Z'
  },
  {
    'stockCode': '399330',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深证100',
    'launchDate': '2007-11-22T16:00:00.000Z'
  },
  {
    'stockCode': '399348',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深证价值',
    'launchDate': '2009-11-03T16:00:00.000Z'
  },
  {
    'stockCode': '399363',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '云科技',
    'launchDate': '2009-08-02T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399364',
    'source': 'cni',
    'name': '消费100',
    'launchDate': '2009-08-02T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399377',
    'source': 'cni',
    'name': '小盘价值',
    'launchDate': '2010-01-03T16:00:00.000Z'
  },
  {
    'stockCode': '399393',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国证地产',
    'launchDate': '2012-08-19T16:00:00.000Z'
  },
  {
    'stockCode': '399394',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国证医药',
    'launchDate': '2012-10-28T16:00:00.000Z'
  },
  {
    'stockCode': '399395',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国证有色',
    'launchDate': '2012-10-28T16:00:00.000Z'
  },
  {
    'stockCode': '399396',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国证食品',
    'launchDate': '2012-10-28T16:00:00.000Z'
  },
  {
    'stockCode': '399412',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国证新能',
    'launchDate': '2014-05-15T16:00:00.000Z'
  },
  {
    'stockCode': '399417',
    'areaCode': 'cn',
    'source': 'cni',
    'market': 'a',
    'name': '新能源车',
    'launchDate': '2014-09-23T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399437',
    'source': 'cni',
    'name': '证券龙头',
    'launchDate': '2014-12-29T16:00:00.000Z'
  },
  {
    'stockCode': '399440',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '国证钢铁',
    'launchDate': '2014-12-29T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399441',
    'source': 'cni',
    'name': '生物医药',
    'launchDate': '2015-01-19T16:00:00.000Z'
  },
  {
    'stockCode': '399550',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '央视50',
    'launchDate': '2012-06-05T16:00:00.000Z'
  },
  {
    'stockCode': '399610',
    'areaCode': 'cn',
    'source': 'cni',
    'market': 'a',
    'name': 'TMT50',
    'launchDate': '2010-11-07T16:00:00.000Z'
  },
  {
    'stockCode': '399612',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中创100',
    'launchDate': '2011-02-27T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399617',
    'source': 'cni',
    'name': '深证消费',
    'launchDate': '2011-06-14T16:00:00.000Z'
  },
  {
    'stockCode': '399624',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中创400',
    'launchDate': '2011-08-14T16:00:00.000Z'
  },
  {
    'stockCode': '399625',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中创500',
    'launchDate': '2011-08-14T16:00:00.000Z'
  },
  {
    'stockCode': '399673',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '创业板50',
    'launchDate': '2014-06-17T16:00:00.000Z'
  },
  {
    'stockCode': '399678',
    'source': 'cni',
    'areaCode': 'cn',
    'market': 'a',
    'name': '深次新股',
    'launchDate': '2015-06-17T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399699',
    'source': 'cni',
    'name': '金融科技',
    'launchDate': '2017-06-08T16:00:00.000Z'
  },
  {
    'stockCode': '399701',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '深证F60',
    'launchDate': '2010-05-09T16:00:00.000Z'
  },
  {
    'stockCode': '399702',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '深证F120',
    'launchDate': '2010-05-09T16:00:00.000Z'
  },
  {
    'stockCode': '399803',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '工业4.0',
    'launchDate': '2015-02-12T16:00:00.000Z'
  },
  {
    'stockCode': '399804',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '中证体育',
    'launchDate': '2015-02-08T16:00:00.000Z'
  },
  {
    'stockCode': '399805',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '互联金融',
    'launchDate': '2015-02-09T16:00:00.000Z'
  },
  {
    'stockCode': '399806',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '环境治理',
    'launchDate': '2014-07-20T16:00:00.000Z'
  },
  {
    'stockCode': '399807',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '高铁产业',
    'launchDate': '2015-01-19T16:00:00.000Z'
  },
  {
    'stockCode': '399809',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '保险主题',
    'launchDate': '2015-02-12T16:00:00.000Z'
  },
  {
    'stockCode': '399812',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '养老产业',
    'launchDate': '2014-06-05T16:00:00.000Z'
  },
  {
    'stockCode': '399814',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '大农业',
    'launchDate': '2014-07-21T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '399966',
    'source': 'csi',
    'name': '800证保',
    'launchDate': '2012-12-20T16:00:00.000Z'
  },
  {
    'stockCode': '399967',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证军工',
    'launchDate': '2013-12-25T16:00:00.000Z'
  },
  {
    'stockCode': '399970',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '移动互联',
    'launchDate': '2014-05-04T16:00:00.000Z'
  },
  {
    'stockCode': '399971',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证传媒',
    'launchDate': '2014-04-14T16:00:00.000Z'
  },
  {
    'stockCode': '399973',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证国防',
    'launchDate': '2014-04-14T16:00:00.000Z'
  },
  {
    'stockCode': '399974',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '国企改革',
    'launchDate': '2014-08-06T16:00:00.000Z'
  },
  {
    'stockCode': '399975',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '证券公司',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'stockCode': '399976',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': 'CS新能车',
    'launchDate': '2014-11-27T16:00:00.000Z'
  },
  {
    'stockCode': '399986',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '中证银行',
    'launchDate': '2013-07-14T16:00:00.000Z'
  },
  {
    'stockCode': '399987',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证酒',
    'launchDate': '2014-12-09T16:00:00.000Z'
  },
  {
    'stockCode': '399989',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证医疗',
    'launchDate': '2014-10-30T16:00:00.000Z'
  },
  {
    'stockCode': '399990',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '煤炭等权',
    'launchDate': '2015-01-20T16:00:00.000Z'
  },
  {
    'stockCode': '399991',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '一带一路',
    'launchDate': '2015-02-15T16:00:00.000Z'
  },
  {
    'stockCode': '399995',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '基建工程',
    'launchDate': '2015-03-11T16:00:00.000Z'
  },
  {
    'stockCode': '399996',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '智能家居',
    'launchDate': '2014-09-16T16:00:00.000Z'
  },
  {
    'stockCode': '399997',
    'areaCode': 'cn',
    'source': 'csi',
    'market': 'a',
    'name': '中证白酒',
    'launchDate': '2015-01-20T16:00:00.000Z'
  },
  {
    'stockCode': '399998',
    'source': 'csi',
    'areaCode': 'cn',
    'market': 'a',
    'name': '中证煤炭',
    'launchDate': '2015-02-12T16:00:00.000Z'
  },
  {
    'areaCode': 'cn',
    'market': 'a',
    'stockCode': '980017',
    'source': 'cni',
    'name': '国证芯片',
    'launchDate': '2019-08-15T16:00:00.000Z'
  },
  {
    'areaCode': 'us',
    'market': 'us',
    'source': 'usi',
    'name': '标普500',
    'launchDate': '1957-03-04T05:00:00.000Z',
    'stockCode': '.INX'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSAHP',
    'source': 'hsi',
    'name': '恒生沪深港通AH股溢价指数',
    'launchDate': '2007-07-08T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSCAIT',
    'source': 'hsi',
    'name': '恒生A股行业龙头指数',
    'launchDate': '2009-09-20T16:00:00.000Z'
  },
  {
    'stockCode': 'HSCEI',
    'areaCode': 'hk',
    'source': 'hsi',
    'market': 'h',
    'name': '恒生中国企业指数',
    'launchDate': '1994-08-07T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSCESI',
    'source': 'hsi',
    'name': '恒生中国企业精明指数',
    'launchDate': '2015-06-07T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSHDYI',
    'source': 'hsi',
    'name': '恒生高股息率指数',
    'launchDate': '2012-12-09T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSHK35',
    'source': 'hsi',
    'name': '恒生香港35',
    'launchDate': '2003-01-19T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSHYLV',
    'source': 'hsi',
    'name': '恒生港股通高股息低波动指数',
    'launchDate': '2017-05-07T16:00:00.000Z'
  },
  {
    'stockCode': 'HSI',
    'areaCode': 'hk',
    'source': 'hsi',
    'market': 'h',
    'name': '恒生指数',
    'launchDate': '1989-03-08T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSIII',
    'source': 'hsi',
    'name': '恒生互联网科技业指数',
    'launchDate': '2020-07-19T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSLI',
    'source': 'hsi',
    'name': '恒生综合大型股指数',
    'launchDate': '2001-10-02T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSLMI',
    'source': 'hsi',
    'name': '恒生综合大中型股指数',
    'launchDate': '2015-06-07T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSMI',
    'source': 'hsi',
    'name': '恒生综合中型股指数',
    'launchDate': '2001-10-02T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSML25',
    'source': 'hsi',
    'name': '恒生中国(香港上市)25指数',
    'launchDate': '2003-01-19T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSMSI',
    'source': 'hsi',
    'name': '恒生综合中小型股指数',
    'launchDate': '2015-06-07T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSSCNE',
    'source': 'hsi',
    'name': '恒生港股通新经济指数',
    'launchDate': '2018-01-07T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSSI',
    'source': 'hsi',
    'name': '恒生综合小型股指数',
    'launchDate': '2001-10-02T16:00:00.000Z'
  },
  {
    'areaCode': 'hk',
    'market': 'h',
    'stockCode': 'HSTECH',
    'source': 'hsi',
    'name': '恒生科技指数',
    'launchDate': '2020-06-30T16:00:00.000Z'
  }
]

export const CODE_LIST_MAP = CODE_LIST.reduce((result, next) => {
  result[next.stockCode] = next.name
  return result
}, {})

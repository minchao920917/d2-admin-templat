<template>
  <div class="leftCard">
    <div id="chinaMap" ref="chinaMap"></div>
  </div>
</template>

<script>
import china from 'echarts/map/json/china.json'
import echarts from 'echarts'
export default {
  name: 'leftCard',
  data () {
    return {
      myChart: null,
      dataList: [
        {
          name: '南海诸岛',
          value: 100,
          eventTotal: 100,
          specialImportant: 10,
          import: 10,
          compare: 10,
          common: 40,
          specail: 20
        },
        { name: '北京', value: 540 },
        { name: '天津', value: 130 },
        { name: '上海', value: 400 },
        { name: '重庆', value: 750 },
        { name: '河北', value: 130 },
        { name: '河南', value: 830 },
        { name: '云南', value: 110 },
        { name: '辽宁', value: 19 },
        { name: '黑龙江', value: 150 },
        { name: '湖南', value: 690 },
        { name: '安徽', value: 60 },
        { name: '山东', value: 39 },
        { name: '新疆', value: 452 },
        { name: '江苏', value: 31 },
        { name: '浙江', value: 104 },
        { name: '江西', value: 36 },
        { name: '湖北', value: 52 },
        { name: '广西', value: 33 },
        { name: '甘肃', value: 73 },
        { name: '山西', value: 54 },
        { name: '内蒙古', value: 778 },
        { name: '陕西', value: 22 },
        { name: '吉林', value: 44 },
        { name: '福建', value: 18 },
        { name: '贵州', value: 54 },
        { name: '广东', value: 98 },
        { name: '青海', value: 13 },
        { name: '西藏', value: 0 },
        { name: '四川', value: 44 },
        { name: '宁夏', value: 42 },
        { name: '海南', value: 22 },
        { name: '台湾', value: 23 },
        { name: '香港', value: 25 },
        { name: '澳门', value: 555 }
      ]
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.initEchartMap()
    })
  },
  methods: {
    // 初始化地图
    initEchartMap () {
      echarts.registerMap('china', china)
      this.myChart = echarts.init(this.$refs.chinaMap, null, {
        renderer: 'svg'
      })
      this.myChart.off('click')
      // echart 配制option
      var options = {
        tooltip: {
          triggerOn: 'mousemove', // mousemove、click
          padding: 8,
          borderWidth: 1,
          borderColor: '#409eff',
          backgroundColor: 'rgba(255,255,255,0.7)',
          textStyle: {
            color: '#000000',
            fontSize: 13
          },
          formatter: function (e, t, n) {
            const data = e.data
            const context = `
                            <div>
                                <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
                                <p class="tooltip_style"><span class="tooltip_left">成果总数</span><span class="tooltip_right">${data.value}</span></p>
                            </div>
                            `
            return context
          }
        },
        visualMap: {
          show: true,
          left: 26,
          bottom: 40,
          showLabel: true,
          pieces: [
            {
              gte: 1000,
              label: '>= 1000',
              color: '#5475f5'
            },
            {
              gte: 700,
              lt: 999,
              label: '700 - 999',
              color: '#e6ac53'
            },
            {
              gte: 500,
              lt: 699,
              label: '500 - 699',
              color: '#9feaa5'
            },
            {
              gte: 100,
              lt: 499,
              label: '100 - 499',
              color: '#85daef'
            },
            {
              gte: 10,
              lt: 99,
              label: '10 - 99',
              color: '#74e2ca'
            },
            {
              lt: 10,
              label: '<10',
              color: '#9fb5ea'
            }
          ]
        },
        geo: {
          map: 'china',
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1,
          top: 120,
          layoutSize: '100%', // 保持地图宽高比
          label: {
            normal: {
              show: true,
              fontSize: '14',
              color: 'rgba(0,0,0,0.7)'
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#F3F3F3'
              }
            }
          },
          itemStyle: {
            normal: {
              // shadowBlur: 50,
              // shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: 'rgba(0, 0, 0, 0.2)',
              areaColor: '#1955a4'
            },
            emphasis: {
              areaColor: '#f2d5ad',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: '成果预览',
            type: 'map',
            geoIndex: 0,
            data: this.dataList
          }
        ]
      }
      this.myChart.clear()
      this.myChart.setOption(options)
      this.myChart.resize()
      // 地图的点击事件 ，钻取到市我就不举例了，类似的方法，点击事件可以获取到当前点击的省份的数据；
      this.myChart.on('click', function (params) {
        console.log(params)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.leftCard {
  width: 600px;
  height: 600px;
  #chinaMap {
    width: 600px;
    height: 600px;
  }
}
</style>

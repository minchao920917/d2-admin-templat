<template>
  <div class="mc-chart">
      <mc-chart :init-options="initOptions" :option="option" style="height: 283px" theme="mc-echarts-theme" />
  </div>
</template>

<script>
import McChart from '@/components/mcCharts'

export default {
  components: {
    McChart
  },
  data () {
    return {
      initOptions: {
        renderer: 'svg'
      },
      option: {
        tooltip: {
          trigger: 'axis',
          extraCssText: 'z-index:1'
        },
        grid: {
          top: '0%',
          left: '2%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            splitLine: {
              show: false
            },
            type: 'value',
            show: false
          }
        ],
        yAxis: [
          {
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            type: 'category',
            axisTick: {
              show: false
            },
            data: [
              '莱山区',
              '高新区',
              '芝罘区',
              '牟平区',
              '蓬莱区',
              '开发区'
            ]
          }
        ],
        series: [
          {
            name: '目标',
            type: 'bar',
            barWidth: 25,
            label: {
              show: true,
              position: 'right',
              color: '#1890FF',
              fontSize: 14,
              // @ts-ignore
              formatter: ({ data }) => {
                return `${data}亿元`
              }
            },
            itemStyle: {
              borderRadius: [0, 5, 5, 0],
              color: new McChart.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                ['#3ED572', '#399efd'].map((color, offset) => ({
                  color,
                  offset
                }))
              )
            },
            data: [320, 302, 341, 374, 390, 650]
          }
        ]
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.mc-chart {
  width: 100%;
}
</style>

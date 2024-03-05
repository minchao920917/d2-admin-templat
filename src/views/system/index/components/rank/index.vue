<template>
  <div class="mc-chart">
      <mc-chart ref="chart" :init-options="initOptions" :option="option" style="height: 283px" theme="mc-echarts-theme" />
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
          right: '20%',
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
              'good luck',
              '曲丽丽',
              '付小小',
              '林东东',
              '周星星',
              '朱偏右'
            ]
          }
        ],
        series: [
          {
            name: '累计消费',
            type: 'bar',
            barWidth: 15,
            label: {
              show: true,
              position: 'right',
              fontSize: 12,
              // @ts-ignore
              formatter: ({ data }) => {
                return `${data}万元`
              }
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: [23, 54, 68, 76, 87, 99]
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

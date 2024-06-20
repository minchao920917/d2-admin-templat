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
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ]
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

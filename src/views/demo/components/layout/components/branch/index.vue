<!--
 * @Author: minchao
 * @Date: 2024-05-23 21:34:26
 * @LastEditors: minchao
 * @LastEditTime: 2024-05-24 10:39:11
 * @Description: 请填写简介
-->
<!--
 * @Author: minchao
 * @Date: 2024-05-23 21:34:26
 * @LastEditors: minchao
 * @LastEditTime: 2024-05-24 10:38:55
 * @Description: 请填写简介
-->
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
            name: '数据',
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
              { value: 1048, name: '待机' },
              { value: 735, name: '运行中' },
              { value: 580, name: '警告' },
              { value: 484, name: '离线' }
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

<template>
  <div class="mc-chart">
    <div class="container">
    <div class="left-side">
    </div>
    <div class="right-side">
      <el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-search"
      size="mini"
      v-model="input2">
    </el-input>
    </div>
    </div>
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
    const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
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
          left: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['时间1', '时间2', '时间3', '时间4'],
            axisLine: {
              lineStyle: {
                color: '#DCE2E8'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#556677',
              fontSize: 12,
              margin: 15
            },
            axisPointer: {
              label: {
                padding: [0, 0, 10, 0],
                margin: 15,
                fontSize: 12,
                backgroundColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#fff'
                    },
                    {
                      offset: 0.86,
                      color: '#fff'
                    },
                    {
                      offset: 0.86,
                      color: '#33c0cd'
                    },
                    {
                      offset: 1,
                      color: '#33c0cd'
                    }
                  ],
                  global: false
                }
              }
            },
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#DCE2E8'
              }
            },
            axisLabel: {
              color: '#556677'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '未完成订单',
            type: 'line',
            data: [1905, 1020, 3330, 512],
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: '#9E87FF',
              shadowColor: 'rgba(115,221,255, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
              color: colorList[1],
              borderColor: colorList[1]
            }
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

<style scoped lang="scss">
.mc-chart {
  width: 100%;
  .container {
  display: flex;
  justify-content: space-between;
  .left-side {
    flex: 1;
      p {
        font-size:14px;
        color:rgb(116, 114, 114)
      }
    }

    .right-side {
      width: 150px;
    }
  }
}
</style>

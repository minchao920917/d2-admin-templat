<template>
  <!-- echarts 容器 -->
  <div class="echarts"></div>
</template>

<script>
import echarts from 'echarts'
import debounce from 'lodash/debounce'
import theme from './theme/echarts-theme.json'
import { addListener, removeListener } from './resize-detector/esm'

export default {
  props: {
    // echarts 的配置项
    option: {
      type: Object,
      default: () => ({})
    },
    // echarts 主题
    theme: {
      type: [String, Object],
      default: () => {}
    },
    // echarts 初始化配置项
    initOptions: {
      type: Object,
      default: () => ({})
    },
    // echarts 分组名称
    group: {
      type: String,
      default: ''
    },
    // 是否自动调整大小
    autoResize: {
      type: Boolean,
      default: true
    },
    // 是否浅层监听
    watchShallow: {
      type: Boolean,
      default: false
    },
    // 是否手动更新
    manualUpdate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 上一次的面积
      lastArea: 0,
      // echarts 实例
      chart: null,
      // resize 事件处理函数
      resizeHandler: null,
      // 解除 watch 监听的函数
      unwatchOptions: null,
      // 手动配置项
      manualOptions: null
    }
  },
  mounted () {
    // 注册 echarts 主题
    if (this.option) {
      echarts.registerTheme('mc-echarts-theme', theme)
      this.init()
    }
  },
  activated () {
    // 激活时调整大小
    if (this.autoResize) {
      this.chart && this.chart.resize()
    }
  },
  unmounted () {
    // 销毁 echarts 实例
    if (this.chart) {
      this.destroy()
    }
  },
  methods: {
    // 初始化 echarts 实例
    init (option) {
      if (this.chart) {
        return
      }
      const chart = echarts.init(this.$el, this.theme, this.initOptions)
      if (this.group) {
        chart.group = this.group
      }
      chart.clear()
      chart.setOption(option || this.manualOptions || this.option || {}, true)
      // 添加事件监听器
      Object.keys(this.$attrs).forEach((event) => {
        const handler = this.$attrs[event]
        if (event.indexOf('zr:') === 0) {
          chart.getZr().on(event.slice(3), handler)
        } else {
          chart.on(event, handler)
        }
      })
      // 自动调整大小
      if (this.autoResize) {
        this.lastArea = this.getArea()
        this.resizeHandler = debounce(
          () => {
            if (this.lastArea === 0) {
              this.mergeOptions({}, true)
              this.chart.resize()
              this.mergeOptions(this.option || this.manualOptions || {}, true)
            } else {
              this.chart.resize()
            }
            this.lastArea = this.getArea()
          },
          100,
          { leading: true }
        )
        addListener(this.$el, this.resizeHandler)
      }
      this.chart = chart
    },
    // 销毁 echarts 实例
    destroy () {
      if (this.autoResize) {
        removeListener(this.$el, this.resizeHandler)
      }
      this.chart.dispose()
      this.chart = null
    },
    // 刷新 echarts 实例
    refresh () {
      if (this.chart) {
        this.destroy()
        this.init()
      }
    },
    // 获取面积
    getArea () {
      return this.$el.offsetWidth * this.$el.offsetHeight
    }
  },
  watch: {
    // 监听分组名称变化
    group (group) {
      this.chart.group = group
    },
    // 监听配置项变化
    option: {
      deep: true,
      handler (val, oldVal) {
        if (!this.chart && val) {
          this.init()
        } else {
          this.chart.setOption(val, val !== oldVal)
        }
      }
    },
    // 监听主题变化
    theme () {
      this.chart.dispose()
      this.chart = null
      this.init()
    },
    // 监听初始化配置项变化
    initOptions () {
      this.chart.dispose()
      this.chart = null
      this.init()
    },
    // 监听自动调整大小变化
    autoResize () {
      this.chart && this.chart.resize()
    }
  }
}
</script>

<style scoped>
/* .echarts {
  width: 600px;
  height: 400px
} */
</style>

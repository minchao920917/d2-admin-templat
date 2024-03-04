<template>
  <div class="echarts"></div>
</template>

<script>
import echarts from 'echarts'
import debounce from 'lodash/debounce'
import theme from './theme/echarts-theme.json'
import { addListener, removeListener } from 'resize-detector'

export default {
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    theme: {
      type: [String, Object],
      default: () => {}
    },
    initOptions: {
      type: Object,
      default: () => ({})
    },
    group: {
      type: String,
      default: ''
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    watchShallow: {
      type: Boolean,
      default: false
    },
    manualUpdate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lastArea: 0,
      chart: null,
      // eslint-disable-next-line vue/no-reserved-keys
      __resizeHandler: null,
      // eslint-disable-next-line vue/no-reserved-keys
      __unwatchOptions: null,
      manualOptions: null
    }
  },
  mounted () {
    if (this.option) {
      echarts.registerTheme('mc-echarts-theme', theme)
      this.init()
    }
  },
  activated () {
    if (this.autoResize) {
      this.chart && this.chart.resize()
    }
  },
  unmounted () {
    if (this.chart) {
      this.destroy()
    }
  },
  methods: {
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
      Object.keys(this.$attrs).forEach((event) => {
        const handler = this.$attrs[event]
        if (event.indexOf('zr:') === 0) {
          chart.getZr().on(event.slice(3), handler)
        } else {
          chart.on(event, handler)
        }
      })
      if (this.autoResize) {
        this.lastArea = this.getArea()
        this.__resizeHandler = debounce(
          () => {
            if (this.lastArea === 0) {
              this.mergeOptions({}, true)
              this.resize()
              this.mergeOptions(this.option || this.manualOptions || {}, true)
            } else {
              this.resize()
            }
            this.lastArea = this.getArea()
          },
          100,
          { leading: true }
        )
        addListener(this.$el, this.__resizeHandler)
      }
      this.chart = chart
    },
    destroy () {
      if (this.autoResize) {
        removeListener(this.$el, this.__resizeHandler)
      }
      this.chart.dispose()
      this.chart = null
    },
    refresh () {
      if (this.chart) {
        this.destroy()
        this.init()
      }
    },
    getArea () {
      return this.$el.offsetWidth * this.$el.offsetHeight
    }
  },
  watch: {
    group (group) {
      this.chart.group = group
    },
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
    theme () {
      this.chart.dispose()
      this.chart = null
      this.init()
    },
    initOptions () {
      this.chart.dispose()
      this.chart = null
      this.init()
    },
    autoResize () {
      this.chart && this.chart.resize()
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 600px;
  height: 400px;
}
</style>

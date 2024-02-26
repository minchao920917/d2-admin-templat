<template>
  <svg aria-hidden="true" :fill="color">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
export default {
  name: 'd2-icon-svg',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#000',
      required: true
    }
  },
  computed: {
    icon () {
      return `#d2-${this.name}`
    }
  }
}
</script>

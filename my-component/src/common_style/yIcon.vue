<template>
  <div
    class="svg-icon-box"
    :style="{width: size + 'px', height: size + 'px', 'line-height': size + 'px', cursor: cursor ? 'pointer' : 'auto', overflow: 'hidden'}"
    @mouseover="changeImageColor(true)"
    @mouseleave="changeImageColor(false)"
    @click="clickFun($event)"
  >
    <svg :class="svgClass" aria-hidden="true" :style="{fontSize: size + 'px', filter: self ? 'none' : 'drop-shadow(' + iconColor + ' 0px -1000px)',transform: self ? 'none' : 'translate(0px, 1000px)'}">
      <use :xlink:href="iconName"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'YIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#5D6E7F'
    },
    size: {
      type: [Number, String],
      default: 16
    },
    cursor: {
      type: [Boolean, String, Number],
      default: false
    },
    hover: {
      type: String,
      default: ''
    },
    self: {
      type: [Boolean, String, Number],
      default: false
    },
  },
  data() {
    return {
      isHover: false
    }
  },
  computed: {
    iconColor() {
      return this.isHover ? this.hover || this.color : this.color
    },
    iconName() {
      return this.type.startsWith('icon-') ? `#${this.type}` : `#icon-${this.type}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  methods: {
    changeImageColor(flag) {
      if (this.self) return
      this.isHover = flag
    },
    clickFun(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped>
.svg-icon-box {
  display: inline-block;
  vertical-align: middle;
}
.svg-icon {
  width: 1em;
  height: 1em;
  /* vertical-align: -0.15em; */
  fill: currentColor;
  overflow: hidden;
}
</style>
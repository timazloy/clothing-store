<template>
  <div class="custom-select">
    <button @click="areOptionsVisible = !areOptionsVisible">{{selected}}</button>
    <div
        class="custom-select__options"
        v-if="areOptionsVisible"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-Select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      areOptionsVisible: false

    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = !this.areOptionsVisible
    },
    hideSelect() {
      this.areOptionsVisible = !this.areOptionsVisible
    }
  },
  // mounted() {
  //   document.addEventListener('click', this.hideSelect.bind(this), true)
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.hideSelect)
  // }
}
</script>

<style scoped>

</style>
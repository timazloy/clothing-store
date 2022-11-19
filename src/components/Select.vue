<template>
  <div class="custom-select">
    <button @click="areOptionsVisible = !areOptionsVisible">{{selected}}</button>
    <div
        class="custom-select__options"
        v-if="areOptionsVisible"
    >
      <p
        v-for="option in categories"
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
    categories: {
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
}
</script>

<style scoped>

</style>
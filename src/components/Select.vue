<template>
  <div class="main-wrapper__custom-select custom-select">
    <button
        type="button"
        class="custom-select__button custom-button"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</button>

      <div
          class="custom-select__options"
          v-if="areOptionsVisible"
      >
        <button
            class="custom-select__button custom-button"
            type="button"
            v-for="option in categories"
            :key="option.value"
            @click="selectOption(option)"
        >
          {{option.name}}
        </button>
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
    },
    isExpanded: {
      type: Boolean,
      default() {
        return false
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

<style lang="scss">
.main-wrapper {
  &__custom-select {
    margin-bottom: 20px;
  }
}

.custom-select {
  width: 100%;
  max-width: 211px;
  display: flex;
  flex-direction: column;
  position: relative;

  &__options {
    display: flex;
    flex-direction: column;
    max-width: 211px;
    width: 100%;
    top: 37px;
    position: absolute;
  }

}

.custom-button {
  background: no-repeat;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px 20px;
  width: 100%;
  background: white;
  border-radius: 10px;
  height: 100%;
}
</style>

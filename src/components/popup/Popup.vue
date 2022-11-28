<template>
  <div class="popup">
    <div class="popup__header">
      <span>Popup name</span>
      <span>
        <i  @click="closePopup" class="material-icons">close</i>
      </span>
    </div>
    <div class="popup__content">
      <slot></slot>
    </div>
    <div class="popup__footer">
      <button type="button">add</button>
      <button @click="closePopup" type="button">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-Popup",
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok'
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
  .popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    right: 0;
    left: 0;
    width: 400px;

    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
</style>
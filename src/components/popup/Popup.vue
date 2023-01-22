<template>
  <div class="catalog-item__wrapper-popup" ref="popup_wrapper">
    <div class="popup">
      <div class="popup__header popup-header">
        <h2>{{popupTitle}}</h2>
        <button type="button" class="popup-header__button">
          <i  @click="closePopup" class="material-icons">close</i>
        </button>
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button
            v-if="!addedButton"
            class="popup__button button-add"
            type="button"
            @click="rightButtonAction"
        >{{rightBtnTitle}} ({{price}} р.)</button>
        <button v-else
                type="button"
                class="catalog-item__button button-added button-added--small"
        >Added to cart</button>

      </div>
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
    },
    popupTitle: {
      type: String,
      default: 'Popup name'
    },
    addedButton: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    rightButtonAction() {
      this.$emit('rightButtonAction')
    }
  },
  mounted() {
    document.addEventListener('click', (item) => {
      if (item.target === this.$refs['popup_wrapper']) {
        this.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  .popup {
    padding: 20px;
    position: fixed;
    margin: auto;
    width: 44%;
    background: white;
    border-radius: 5px;
    z-index: 2;



    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__header {
      margin-bottom: 20px;
    }

    &__content {
      display: flex;
      gap: 40px;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
    }

    &__button {
      width: fit-content;
    }
  }
</style>
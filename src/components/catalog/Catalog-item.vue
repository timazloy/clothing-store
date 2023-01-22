<template>
  <div class="catalog-item">
    <Popup
        v-if="isInfoPopupVisible"
        @closePopup="closePopup"
        @rightButtonAction="addToCart"
        rightBtnTitle="Add to Cart"
        :popupTitle="product_data.name"
        :addedButton="addedButton"
    >
      <template>
        <div>
          <img :src="require('/src/assets/images/' + product_data.image)" class="popup__image" alt="image">
          <p>{{product_data.price}} р.</p>
        </div>
        <div class="popup__description popup-description" v-html="addDescription"></div>
      </template>
    </Popup>
    <p class="catalog-item__title">{{product_data.name}}</p>
    <div class="catalog-item__cover">
      <img class="catalog-item__image" :src="require('/src/assets/images/' + product_data.image) " alt="image">
    </div>
    <p class="catalog-item__text">Price: {{product_data.price}} р.</p>
    <button
        @click="showPopupInfo"
        type="button"
        class="catalog-item__button button-show"
    >show more</button>
    <button v-if="!addedButton"
        type="button"
        class="catalog-item__button button-add"
        @click="addToCart"
    >Add to Cart</button>
    <button v-if="addedButton"
        type="button"
        class="catalog-item__button button-added"
        @click="addToCart"
    >Added to cart</button>
  </div>
</template>

<script>
import Popup from "@/components/popup/Popup";

export default {
  name: "Catalog-item",
  components: {
    Popup,
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible: false,
      addedButton: false
    }
  },
  computed: {
    addDescription() {
      let html = ''
      for (let key in this.product_data.description) {
        html += `
            <div class="popup-description__wrapper param">
              <span class="param__value">${this.product_data.description[key]}</span>
              <span class="param__prop">${key}</span>
            </div>
        `
      }
      return html
    }
  },
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    closePopup() {
      this.isInfoPopupVisible = false
    },
    addToCart() {
      this.$emit('addToCart' ,this.product_data)
      this.addedButton = true
    }
  }
}
</script>

<style lang="scss">
  .catalog-item {
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    max-width: 179px;
    width: 100%;
    background: white;

    &:hover {
      box-shadow: 1px 0px 12px #666161;
    }

    &__wrapper-popup {
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      position: fixed;
      background: rgb(50, 44, 44, 0.4);
    }

    &__title {
      margin-bottom: 10px;
      font-weight: 600;
    }

    &__text {
      margin: 10px 0;
    }

    &__button {
      width: 100%;
    }

    &__button:not(:last-child) {
      margin-bottom: 10px;
    }

    &__cover {
      width: 100%;
      max-width: 180px;
      height: 250px;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .button-add {
    border: none;
    background: #9191d8;
    cursor: pointer;
    //width: 100%;
    padding: 15px;
    border-radius: 5px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #7676ed;
    }
  }

  .button-added {
    border: none;
    background: #6cab5d;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    pointer-events: none;

    &--small {
      width: fit-content;
    }
  }

  .button-show {
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .popup-description {
    width: 100%;
    &__wrapper {
      //display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }

  .popup {
    &__image {
      max-width: 220px;
    }
  }

  .param {
    line-height: 1.4;
  }

  .param__prop {
    text-align: left;
    position: relative;
    display: block;
    overflow: hidden;
  }

  .param__prop:after {
    content: '';
    position: absolute;
    margin-left: .3em;
    bottom: .35em;
    width: 100%;
    border-bottom: .1em dotted;
  }

  .param__value {
    float: right;
    padding-left: .2em;
  }

  /* Modify */
  .param--align:after {
    content: '';
    display: table;
    clear: both;
  }

  .param--align .param__prop {
    float: left;
    width: 70%;
  }

  .param--align .param__value {
    float: right;
    width: 30%;
    box-sizing: border-box;
  }

  /* =========================== */
  h1 {
    padding-left: 40px;
  }

  .list {
    list-style-type: none;
  }

  .list__item {
    margin-bottom: 10px;
  }

  .list--light {
    color: steelblue;
  }

  .list--bigger {
    font-size: 30px;
  }

  .list--gutter {
    padding: 0 40px;
  }


</style>
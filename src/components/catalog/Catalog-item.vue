<template>
  <div class="catalog-item">

    <Popup
        v-if="isInfoPopupVisible"
        @closePopup="closePopup"
    >
      <div>
        <p>{{product_data.name}}</p>
        <img :src="require('/src/assets/images/' + product_data.image) " alt="image">
        <p>{{product_data.price}} р.</p>
      </div>
    </Popup>

    <p>{{product_data.name}}</p>
    <img :src="require('/src/assets/images/' + product_data.image) " alt="image">
    <p>{{product_data.price}} р.</p>
    <button @click="showPopupInfo" type="button">show more</button>
    <button
        type="button"
        class="catalog-item__button"
        @click="addToCart"
    >Add to Cart</button>
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
      isInfoPopupVisible: false

    }
  },
  computed: {},
  methods: {
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    closePopup() {
      this.isInfoPopupVisible = false
    },
    addToCart() {
      this.$emit('addToCart' ,this.product_data)
    }
  }
}
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;

    &__button {
      border: none;
      background: #9191d8;
      cursor: pointer;
      width: 100%;
      padding: 15px;
      border-radius: 5px;
      transition: 0.3s ease-in-out;

      &:hover {
        background: #7676ed;
      }
    }
  }
</style>
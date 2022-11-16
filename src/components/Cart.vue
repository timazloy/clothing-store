<template>
  <div class="cart">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog-items__link">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <div class="cart__wrapper">
      <p v-if="!cart_data.length">There are no products in cart...</p>
      <CartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
      />
    </div>

  </div>
</template>

<script>
import CartItem from './Cart-item'
import {mapActions} from "vuex";

export default {
  name: "v-Cart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">
.cart {
  width: 100%;

  &__wrapper {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
}
</style>
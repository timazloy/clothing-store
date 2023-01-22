<template>
  <div class="cart">
    <h1>Cart</h1>
    <router-link :to="{name: 'catalog'}">
      <div class="catalog-items__link">Back to Catalog</div>
    </router-link>

    <div class="cart__wrapper">
      <p v-if="!cart_data.length">There are no products in cart...</p>
      <CartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
      />
      <div v-if="cart_data.length" class="cart__total">
        Total: {{cartTotalCost}} Rub
      </div>
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
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce((previousValue, currentValue) => {
          return previousValue + currentValue
        })
      }
      return result
    }
  },
  methods: {
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
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
    margin-top: 15px;
  }
  &__total {
    padding: 15px;
    background: #b3b3da;
  }
}
</style>
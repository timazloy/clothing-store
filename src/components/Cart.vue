<template>
  <div class="cart">
    <h1>Cart</h1>
    <CartItem
      v-for="(item) in cart_data"
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
import CartItem from './Cart-item'

export default {
  name: "vCart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    },
    methods: {
      // deleteFromCart() {
      //   console.log(123)
      // }
    }
  }
}
</script>

<style lang="scss">
.cart {
  display: flex;
  gap: 20px;
}
</style>
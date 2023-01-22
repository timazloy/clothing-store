<template>
  <div class="cart-item">
    <img :src="require('../../assets/images/' + cart_item_data.image) " class="cart-item__img" alt="image">
    <div class="cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}} р. шт.</p>
    </div>
    <div>total: {{test}} р.</div>
    <div class="cart-item__quantity-wrapper quantity-wrapper">
      <button @click="decrementItem" class="quantity-wrapper__button">-</button>
      <div class="cart-item__quantity">{{cart_item_data.quantity}}</div>
      <button @click="incrementItem" class="quantity-wrapper__button">+</button>
    </div>

    <button
        class="cart-item__button delete-button"
        @click="deleteFromCart" >Delete</button>
  </div>
</template>

<script>
export default {
  name: "Cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart')
    },
    incrementItem() {
      this.$emit('increment')
    },
    decrementItem() {
      this.$emit('decrement')
    }
  },
  computed: {
    test() {
      return this.cart_item_data.price * this.cart_item_data.quantity
    },
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
  .cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    background: white;
    border-radius: 10px;

    &__img {
      width: 100px;
    }

    &__quantity-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .quantity-wrapper {
    &__button {
      background: none;
      border: none;
      font-size: 21px;
      cursor: pointer;
    }
  }

  .delete-button {
    background: #eb7979;
    padding: 7px;
    border-radius: 10px;
  }
</style>
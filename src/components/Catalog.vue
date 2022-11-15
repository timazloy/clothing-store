<template>
  <div class="catalog-items">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog-items__link">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <CatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>

</template>

<script>
import CatalogItem from './Catalog-item'
import  {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-Catalog",
  components: {
    CatalogItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
.catalog-items {
  display: flex;
  gap: 20px;

  &__link {

  }
}


</style>
<template>
  <div class="Catalog-items">
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
        'PRODUCTS'
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
.Catalog-items {
  display: flex;
  gap: 20px;
}


</style>
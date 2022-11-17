<template>
  <div class="catalog-items">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog-items__link">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <Select
        :options="options"
        @select="optionSelect"
        :selected="selected"
    />
    <p>
      Selected option:
      {{selected}}
    </p>
    <div class="catalog-items__wrapper">
      <CatalogItem
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>

</template>

<script>
import CatalogItem from './Catalog-item'
import Select from '../Select'
import  {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-Catalog",
  components: {
    CatalogItem,
    Select
  },
  data() {
    return {
      options: [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3},
        {name: 'Option 4', value: 4},
        {name: 'Option 5', value: 5}
      ],
      selected: 'Select'
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
    },
    optionSelect(option) {
      console.log(option)
      this.selected = option.name
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
.catalog-items {

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
  }

  &__link {
    position: absolute;
    top: 30px;
    right: 30px;
    color: black;
    cursor: pointer;
    padding: 15px;
    border: 1px solid black;
  }
}


</style>
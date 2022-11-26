<template>
  <div class="catalog-items">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog-items__link">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filter">
      <Select
          :categories="categories"
          @select="sortByCategories"
          :selected="selected"
          :isExpanded="IS_DESKTOP"
      />
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="8700"
            step="100"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="8700"
            step="100"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
    </div>
    <div class="catalog-items__wrapper">
      <CatalogItem
          v-for="product in filterProducts"
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
      categories: [
        {name: 'Все', value: 'all'},
        {name: 'Мужские', value: 'male'},
        {name: 'Женские', value: 'female'},

      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 8700
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART',
        'IS_MOBILE',
        'IS_DESKTOP'
    ]),
    filterProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice
        this.maxPrice = this.minPrice;
        this.minPrice = temp
      }
      this.sortByCategories()
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter((item) => {
        return item.price >= this.minPrice && item.price <= this.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          this.selected === category.name
          return e.category === category.name
        })
      }
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    this.sortByCategories()
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

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>

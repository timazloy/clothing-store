<template>
  <div class="catalog-items">
    <h1 class="catalog-items__title">Catalog</h1>
    <router-link  class="catalog-items__link" :to="{name: 'cart', params: {cart_data: CART}}">
      <div >Cart: {{CART.length}}</div>
    </router-link>
    <div class="filter">
      <Select
          :categories="categories"
          @select="sortByCategories"
          :selected="selected"
          :isExpanded="IS_DESKTOP"
      />

      <Select
          :categories="categoriesPrice"
          @select="sortByPrice"
          :selected="selectedPrice"
          :isExpanded="IS_DESKTOP"
      />

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
      categoriesPrice: [
        {name: 'Сортировка по цене', value: 'all'},
        {name: 'Цена по возрастанию', value: 'more'},
        {name: 'Цена по убыванию', value: 'less'},
      ],
      selected: 'Все',
      selectedPrice: 'Сортировка по цене',
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
    // setRangeSlider() {
    //   if (this.minPrice > this.maxPrice) {
    //     let temp = this.maxPrice
    //     this.maxPrice = this.minPrice;
    //     this.minPrice = temp
    //   }
    //   this.sortByCategories()
    // },
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS]

      this.selected = category.name
      if (category) {
        this.sortedProducts = this.sortedProducts.filter((e) => {
          this.selected = category.name
          return e.category === category.name
        })
      }
    },
    sortByPrice(option) {
      if (this.sortedProducts.length === 0) {
        this.sortedProducts = [...this.PRODUCTS]
        if (option.value === 'more') this.sortedProducts.sort(( a, b ) => a.price - b.price);
        else if (option.value === 'less') this.sortedProducts.sort(( a, b ) => b.price - a.price);
        else this.sortedProducts = [...this.PRODUCTS]

        this.selectedPrice = option.name
      } else {
        if (option.value === 'more') this.sortedProducts.sort(( a, b ) => a.price - b.price);
        else if (option.value === 'less') this.sortedProducts.sort(( a, b ) => b.price - a.price);
        else this.sortedProducts = [...this.PRODUCTS]

        this.selectedPrice = option.name
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
a {
  text-decoration: none;
}

.filter {
  display: flex;
  gap: 40px;

  @media (max-width: 728px) {
    max-width: 462px;
    margin: 0 auto;
  }
}

.catalog-items {
  max-width: 715px;

  &__title {
    margin-bottom: 20px;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
  }

  &__link {
    color: black;
    cursor: pointer;
    padding: 15px;
    border: 1px solid black;
    margin-left: auto;
    max-width: 145px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
    border-radius: 10px;
    margin-bottom: 15px;
    
    @media (max-width: 400px) {
      max-width: none;
      width: auto;
    }
  }
}

.range-slider {
  width: 140px;
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
  position: relative;
  top: 2px;
  margin-top: -7px;
}

.range-values {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>

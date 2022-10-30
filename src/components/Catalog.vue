<template>
  <div>
    <h1>Catalog</h1>
    <CatalogItem
      v-for="product in products"
      :key="product.article"
      :product_data="product"
    />
  </div>

</template>

<script>
import CatalogItem from './Catalog-item'
export default {
  name: "v-Catalog",
  components: {
    CatalogItem
  },
  data() {
    return {
      products: [
        {
          image: "1.jpg",
          name: "T-shirt 1",
          price: 2100,
          article: "T1",
          available: true,
          category: "Мужские"
        },
        {
          image: "2.jpg",
          name: "T-shirt 2",
          price: 3150,
          article: "T2",
          available: true,
          category: "Женские"
        },
        {
          image: "3.jpg",
          name: "T-shirt 3",
          price: 4200,
          article: "T3",
          available: false,
          category: "Женские"
        },
        {
          image: "4.jpg",
          name: "T-shirt 4",
          price: 5300,
          article: "T4",
          available: true,
          category: "Мужские"
        },
        {
          image: "5.jpg",
          name: "T-shirt 5",
          price: 6500,
          article: "T5",
          available: false,
          category: "Женские"
        },
        {
          image: "6.jpeg",
          name: "T-shirt 6",
          price: 8700,
          article: "T6",
          available: true,
          category: "Женские"
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
<template>
  <div class="catalog-item">
    <p>{{product_data.name}}</p>
    <p>{{product_data.price}} р.</p>
    <img  :src="require('/src/assets/images/' + product_data.image) " alt="image">
    <button>Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "Catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
  }
</style>
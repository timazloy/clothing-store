<template>
  <div class="main-wrapper">
    <p>{{title}}</p>
    <Catalog/>
    <Cart/>
  </div>
</template>

<script>
import Catalog from './Catalog'
import Cart from './Cart'

export default {
  name: 'main-wrapper',
  components: {
    Catalog,
    Cart
  },
  props: {},
  data() {
    return{
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log(123)
  }
}
</script>

<style lang="scss">

.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}

</style>
<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'main-wrapper',
  props: {},
  data() {
    return{
      title: 'Main wrapper'
    }
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
  },
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
<template>
  <div id="app">
    <MainWrapper/>
  </div>
</template>

<script>
import MainWrapper from './components/Main-wrapper'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    MainWrapper,
  },
  computed: {
    ...mapGetters([
        'IS_MOBILE',
        'IS_DESKTOP',
    ])
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) {
        this.SET_DESKTOP()
        console.log('des', this.IS_DESKTOP)
      } else {
        this.SET_MOBILE()
        console.log('mob', this.IS_MOBILE)
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url("/src/assets/images/background-main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

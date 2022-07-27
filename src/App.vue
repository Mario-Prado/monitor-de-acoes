<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar }
  // created () {
  //   this.$http.post('usuarios.json', { Nome: 'Mario', Cidade: 'São Carlos' })
  //     .then(resp => console.log(resp))
  // }
}
</script>

<style>
#app {
border: 1px solid rgba(0, 0, 0, 0.288);
}
</style>

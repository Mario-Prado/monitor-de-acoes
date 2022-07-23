<template>
  <div id="app">
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar },
  // created () {
  //   this.$http.post('usuarios.json', { Nome: 'Mario', Cidade: 'São Carlos' })
  //     .then(resp => console.log(resp))
  // }
}
</script>

<style>
#app {
  background-color: gray;
}
</style>

<template>
<div class="tela">
    <h1>Ações</h1>
    <div class="cardscontainer">
        <CardCompra v-for="acao in acoes" :key="acao.sigla" :acao="acao"></CardCompra>
    </div>
</div>
</template>

<script>
import CardCompra from '@/components/CardCompra.vue'

export default {
  computed: {
    acoes () {
      return this.$store.state.acoesDisponiveis
    }
  },
  components: { CardCompra }
}
</script>

<style>
.tela{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    margin: 10px 0px 20px 0px;
}
.cardscontainer{
    max-width: 85%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 15px;
}
</style>

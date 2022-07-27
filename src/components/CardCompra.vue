<template>
<div id="cardcontainer">
    <div class="cardheader">{{acao.sigla}} | Preço: {{acao.preco | dinheiro}}</div>
    <div class="cardform">
        <input type="number" required v-model="quantidade"
        @focusout="neutro=true" @focusin="neutro=false" :class="estiloInput">
        <button>{{compraImpedida? 'Insuficiente': 'Comprar'}}</button>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      quantidade: null,
      neutro: true
    }
  },
  computed: {
    compraImpedida () {
      if (!this.quantidade) {
        return false
      } else if (this.quantidade * this.acao.preco > this.$store.state.saldo) {
        return true
      } else {
        return false
      }
    },
    estiloInput () {
      const vermelho = this.compraImpedida
      const azul = !this.compraImpedida && !this.neutro
      return {
        vermelho,
        azul,
        neutro: this.neutro
      }
    }
  },
  props: {
    acao: { type: Object, required: true }
  }
}
</script>

<style>
#cardcontainer{
    min-width: 200px;
    font-size: 0.9rem;
    margin: 0px 5px;
    color: white;
}
.cardheader{
    padding: 5px;
    background-color: rgb(27, 204, 71);
    border-left: 3px solid rgb(7, 145, 7);
    margin-bottom: 2px;
}
.cardform{
    display: flex;
    justify-content: space-between;
}
.cardform button{
    padding: 3px;
    font-size: inherit;
}
.neutro{
    outline:none;
    border:none;
    border-bottom: 1px solid rgba(49, 49, 49, 0.267);
}
.azul{
    outline:none;
    border:none;
    border-bottom: 1px solid rgba(86, 174, 233, 0.993);
}
.vermelho{
    outline:none;
    border:none;
    border-bottom: 1px solid rgba(255, 3, 3, 0.993);
}

</style>

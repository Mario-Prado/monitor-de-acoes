<template>
    <nav id="navbar">
        <div id="leftnav">
            <div id="logo"><strong>STOCK</strong>MANAGER</div>
            <ul>
                <router-link tag="li" to="/" exact>Início</router-link>
                <router-link tag="li" to="/acoes">Ações</router-link>
                <router-link tag="li" to="/portifolio">Portifólio</router-link>
            </ul>
        </div>
        <div id="rightnav">
            <ul>
                <li>Salvar dados</li>
                <li>Finalizar dia</li>
            </ul>
            <div id="navsaldo">Saldo</div>
        </div>
    </nav>
</template>

<style scoped>
nav{
    display: flex ;
    justify-content: space-between;
    background: linear-gradient( #dbdbdb, #f2f2f2, #eaeaea, #dbdbdb );
    color:#4b4941;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.089);
    align-items: center;
}
#leftnav{
    display:flex;
    color: #2b2a25;
    align-items: center;
}
#rightnav{
    display:flex;
}
#logo{
    margin-right: 10px;
    font-size: 1.2rem;
}
ul{
    align-items:center;
    display:flex;
}

#leftnav li{
    list-style: none;
    padding: 5px 3px;
}

#rightnav li, #rightnav div{
    list-style: none;
    padding:0px 3px;
    color: #a4acc0;
    font-size: 0.8rem;
}

li.router-link-exact-active {
  background-color: #a7a6a6;
  color:white;
  cursor: pointer;
}
</style>

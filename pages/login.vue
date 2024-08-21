<template>
    <div>
        Login
        <button @click="logar">Login</button>
        <button @click="desLogar">Deslogar</button>
    </div>
</template>

<script setup>
const login = useCookie('login')

const logar = () => {
    login.value = 'logado!'
}

const desLogar = () => {
    login.value = 'deslogado!'
}
</script>

<style  scoped>

</style>
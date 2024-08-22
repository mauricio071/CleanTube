<template>
    <div class="text-5xl text-center">Página Inicial</div>
</template>

<script setup>
// const { user } = useUserSession();
const titulo = "Home";

useHead({
    title: titulo,
    meta: [
        {
            name: "description",
            content: "Site de Nuxt 3",
        },
    ],
});
</script>
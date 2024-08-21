<template>
    <div>
        <p>Autor: Maurício</p>
        <p>Ano: 2024</p>
        <p>{{ diferencaEmDias }} dias atrás</p>
    </div>
</template>

<script lang="ts" setup>
    const { diferencaEmDias, diasPassadas } = useFormatacao()

    const dataVideo = new Date(2023, 9, 2)

    diasPassadas(dataVideo)
</script>

<style scoped>

</style>
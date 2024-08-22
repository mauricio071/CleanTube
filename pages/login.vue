<template>
    <UCard>
        <template #header>
            <h1 class="text-2xl text-center">Faça login para acessar a plataforma</h1>
        </template>
        <div class="space-y-4">
            <a href="/auth/google" class="block">
                <UButton block label="Login com o Google" color="gray" size="lg">
                    <template #leading>
                        <IconGoogle />
                    </template>
                </UButton>
            </a>
            <a href="/auth/oauth0" class="block">
                <UButton block label="Login com o OAuth" color="gray" size="lg">
                    <template #leading>
                        <IconOauth0 />
                    </template>
                </UButton>
            </a>
        </div>
    </UCard>
</template>

<script setup>
definePageMeta({
    layout: "auth",
    // middleware: "auth"
});
</script>

<style lang="scss" scoped></style>
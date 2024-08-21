<template>
    <div>
        <p class="text-center text-4xl mb-16">{{ $t('tituloFavorito') }}</p>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <UCard v-for="video in favoritos" :key="video.id">
                <template #header>
                    {{ video.descricao }}
                </template>

                <p>{{ converteDataBrasil(video.data_postagem) }}</p>
                <iframe :src="video.url" frameborder="0" title="Youtube vídeo" class="w-full h-48" />

                <template #footer>
                    <UButton @click="removerFavorito(video.id)" color="red">Remover Favorito</UButton>
                </template>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Video } from "@/interfaces/video"

// const favoritos = useFavoritos()
const { $toast } = useNuxtApp()

const videoStore = useVideoStore()
const { favoritos } = storeToRefs(videoStore)

const converteDataBrasil = (dataAtual: string) => {
    return new Date(dataAtual).toLocaleDateString("pt-BR");
}

const removerFavorito = (id: number) => {
    videoStore.removerFavorito(id)
    $toast.error("Vídeo removido do favorito!")
}
</script>

<style scoped></style>
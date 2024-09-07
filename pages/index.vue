<template>
    <div>
        <h1 class="text-4xl text-center mb-16">{{ $t('titulo') }}</h1>
        <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
            <UCard v-for="video in videos" :key="video.id">
                <template #header>
                    {{ video.descricao }}
                </template>

                <iframe :src="formatarUrl(video.url)" frameborder="0" title="Youtube vídeo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="w-full h-48" />

                <template #footer>
                    <div class="flex justify-between">
                        <UButton @click="favoritar(video)">Adicionar Favorito</UButton>
                        <nuxt-link :to="{
                            name: 'videos-id',
                            params: { id: video.id.toString() }
                        }">
                            <UButton label="Ver vídeo" color="gray">
                                <template #trailing>
                                    <UIcon name="i-heroicons-arrow-right-20-solid" />
                                </template>
                            </UButton>
                        </nuxt-link>
                    </div>
                </template>
            </UCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Video } from "@/interfaces/video"

const titulo = "Vídeos";

useHead({
    title: titulo,
    meta: [
        {
            name: "description",
            content: "Site de Nuxt 3",
        },
    ],
});

// const favoritos = useFavoritos()
const { adicionarFavorito } = useVideoStore();

const { $toast } = useNuxtApp()
// const { locale } = useI18n()

// const videos = ref<Video[]>([])

const { data: videos, error } = await useFetch("/api/v1/videos")

const favoritar = (video: Video) => {
    adicionarFavorito(video)
    $toast.success('Favoritado com sucesso!')
}

onMounted(async () => {
    if (error.value) {
        $toast.error(error.value.statusMessage || "")
    }
})
</script>
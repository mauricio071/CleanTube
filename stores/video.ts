import type { Video } from "~/interfaces/video"

export const useVideoStore = defineStore("videos",
    () => {
        const favoritos = ref<Video[]>([])

        const adicionarFavorito = (video: Video) => {
            const verificacao = favoritos.value.some((item) => item.id === video.id)
            if (!verificacao) {
                favoritos.value.push(video)
            }
        }

        const removerFavorito = (id: Number) => {
            const newArr = favoritos.value.filter((item) => item.id !== id)
            favoritos.value = newArr
        }

        return { favoritos, adicionarFavorito, removerFavorito }
    },
    {
        persist: {
            storage: persistedState.localStorage
        }
    }

)
<template>
    <div>
        <div>
            <UModal v-model="isOpen">
                <div class="p-4">
                    <UForm :validate="validate" :state="state" @submit="onSubmit">
                        <UFormGroup label="descricao" name="descricao" class="mb-4">
                            <UInput v-model="state.descricao" />
                        </UFormGroup>

                        <UFormGroup label="url" name="url" class="mb-4">
                            <UInput v-model="state.url" type="url" />
                        </UFormGroup>

                        <UButton type="submit">
                            Enviar
                        </UButton>
                    </UForm>
                </div>
            </UModal>
        </div>

        <UCard class="w-[800px] m-auto">
            <template #header>
                <div class="flex justify-between">
                    <p>{{ video.descricao }}</p>
                    <div class="space-x-4">
                        <UButton @click="abrirModal" icon="i-heroicons-pencil-square" size="sm" color="primary"
                            variant="solid" label="Editar" :trailing="false" />
                        <UButton @click="excluirVideo" icon="i-heroicons-trash" size="sm" color="red" variant="solid"
                            label="Excluir" :trailing="false" />
                    </div>
                </div>
            </template>

            <p v-data-horario>{{ video.data_postagem }}</p>
            <iframe :src="formatarUrl(video.url)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0" title="Youtube vídeo"
                class="w-full h-[500px]" />
        </UCard>
    </div>
</template>

<script setup lang="ts">
import type { Video } from '~/interfaces/video';
import type { FormError, FormSubmitEvent } from '#ui/types'

// definePageMeta({
//     layout: 'exibicao',
//     middleware: 'video'
// })

const route = useRoute()

const { id } = route.params

const { data: video } = await useFetch<Video>(`/api/v1/videos/${id}`);

if (!video.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Vídeo não encontrado",
    });
}

const router = useRouter()

const { $toast } = useNuxtApp()

const idParams = computed(() => route.params.id)

// const video = ref<Video>({} as Video)

const isOpen = ref(false)

const state = reactive({
    id: 0,
    descricao: "",
    url: ""
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.descricao) errors.push({ path: 'descricao', message: 'Required' })
    if (!state.url) errors.push({ path: 'url', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    try {
        await $fetch(`/api/v1/videos/${route.params.id}`, {
            method: "PUT",
            body: state
        })
        isOpen.value = false
        router.push('/')
        $toast.success("Vídeo atualizado!")
    } catch (error) {
        $toast.error("Erro ao atualizar o vídeo")
    }
}

async function excluirVideo(event: FormSubmitEvent<any>) {
    try {
        await $fetch(`/api/v1/videos/${route.params.id}`, {
            method: "DELETE"
        })
        isOpen.value = false
        router.push('/')
        $toast.success("Vídeo excluído!")
    } catch (error) {
        $toast.error("Erro ao excluir o vídeo")
    }
}

const abrirModal = () => {
    state.id = video.value.id
    state.descricao = video.value.descricao
    state.url = video.value.url
    isOpen.value = true
}

onMounted(async () => {
    video.value = await $fetch(`/api/v1/videos/${route.params.id}`)
})
</script>

<style lang="scss" scoped></style>
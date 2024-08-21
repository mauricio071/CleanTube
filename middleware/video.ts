export default defineNuxtRouteMiddleware((to, from) => {
    const paramsId = Number(to.params.id)

    if (isNaN(paramsId) || paramsId < 0) {
        return navigateTo('/videos')
    }
})
// const login = true

export default defineNuxtRouteMiddleware((to, from) => {
    const login = useCookie('login')
    // if (!login && to.path !== '/login') {
    //     return navigateTo('/login')
    // }

    if (login.value !== 'logado!' && to.path !== '/login') {
        return navigateTo('/login')
    }

    if (login.value === "deslogado!" && to.path !== '/') {
        return navigateTo('/')
    }
})
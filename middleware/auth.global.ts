export default defineNuxtRouteMiddleware((to, from) => {
    const { loggedIn, user } = useUserSession()

    if (!loggedIn.value && to.path !== "/login") {
        return navigateTo('/login')
    }

    if (to.meta.permissao && user.value?.email !== 'naokimau@gmail.com') {
        throw createError({
            statusCode: 401,
            message: "Você não tem permissão para acessar esta página"
        })
    }
    //login usando o cookie
    // const login = useCookie('login')
    // if (!login && to.path !== '/login') {
    //     return navigateTo('/login')
    // }
})
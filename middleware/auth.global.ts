export default defineNuxtRouteMiddleware((to, from) => {
    // const { loggedIn } = useUserSession()
    const user = useUserSession()
    console.log(user.user.value)
    // if (!loggedIn.value && to.path !== "/login") {
    //     return navigateTo('/login')
    // }
    //login usando o cookie
    // const login = useCookie('login')
    // if (!login && to.path !== '/login') {
    //     return navigateTo('/login')
    // }
})
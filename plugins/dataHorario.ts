export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('data-horario', {
        mounted(el, binding) {
            const dataFormatada = new Date(el.innerText)
            el.innerHTML = formataData(dataFormatada, binding.value)
        }
    })
});

const formataData = (data: Date, tipo: string = "") => {
    switch (tipo) {
        case "dd/mm/yyyy":
            return data.toLocaleDateString("pt-BR")
        case "hh:mm":
            return data.toLocaleDateString("pt-BR")
        default:
            return data.toLocaleDateString("pt-BR")
    }
}
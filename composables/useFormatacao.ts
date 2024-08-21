export default function () {
    const diferencaEmDias = ref(0)

    const diasPassadas = (data: Date) => {
        const dataAtual = new Date().getTime();
        const diferencaEmMilisegundos = dataAtual - data.getTime();

        diferencaEmDias.value = Math.floor(
            diferencaEmMilisegundos / (1000 * 60 * 60 * 24)
        )
    }

    return { diferencaEmDias, diasPassadas }
}
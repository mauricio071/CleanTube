export default (url: string) => {
    if (url.includes('v=')) {
        const videoId = url?.split('v=')[1].split('&')[0]
        const urlCompartilahamento = `https://www.youtube.com/embed/${videoId}`
        return urlCompartilahamento
    }

    return ''
}
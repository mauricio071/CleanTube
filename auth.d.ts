declare module '#auth-utils' {
    interface User {
        id: number,
        nome: string,
        email: string,
        permissao: string,
        urlFoto: string,
        usuarioId: number
    }
}

export { }
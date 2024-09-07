interface Rotas {
    nome: string;
    path: string;
    permitido?: string;
}

export default () => {
    const rotas: Rotas[] = [
        { nome: "Todos os vídeos", path: "/" },
        // { nome: "Videos", path: "/videos" },
        { nome: "Adicionar Vídeos", path: "/videos/adicionar", permitido: 'naokimau@gmail.com' },
        { nome: "Favoritos", path: "/videos/favoritos" },
    ];
    return rotas;
};
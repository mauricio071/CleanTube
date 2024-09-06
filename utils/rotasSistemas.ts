interface Rotas {
    nome: string;
    path: string;
    permissao?: string;
}

export default () => {
    const rotas: Rotas[] = [
        { nome: "Meus Vídeos", path: "/" },
        // { nome: "Videos", path: "/videos" },
        { nome: "Adicionar Vídeos", path: "/videos/adicionar", permissao: "ADMINISTRADOR" },
        { nome: "Favoritos", path: "/videos/favoritos" },
    ];
    return rotas;
};
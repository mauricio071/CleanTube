interface Rotas {
    nome: string;
    path: string;
}

export default () => {
    const rotas: Rotas[] = [
        { nome: "Meus Vídeos", path: "/" },
        // { nome: "Videos", path: "/videos" },
        { nome: "Adicionar Vídeos", path: "/videos/adicionar" },
        { nome: "Favoritos", path: "/videos/favoritos" },
        { nome: "Clientes", path: "/clientes" },
    ];
    return rotas;
};
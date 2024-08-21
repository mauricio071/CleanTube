import { Video } from "~/interfaces/video"

export default defineEventHandler((event) => {

    const videos: Video[] = [
        {
            id: 1,
            descricao: "Descrição 1",
            url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=8",
            data_postagem: "2024-07-19"
        },
        {
            id: 2,
            descricao: "Descrição 2",
            url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=8",
            data_postagem: "2024-07-19"
        },
        {
            id: 3,
            descricao: "Descrição 3",
            url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=8",
            data_postagem: "2024-07-19"
        },
        {
            id: 4,
            descricao: "Descrição 4",
            url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=8",
            data_postagem: "2024-07-19"
        },
        {
            id: 5,
            descricao: "Descrição 5",
            url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=8",
            data_postagem: "2024-07-19"
        },
        {
            id: 6,
            descricao: "Descrição 6",
            url: "https://www.youtube.com/watch?v=d-4fyzA2ZC8&list=PLxd1RHU8YgYmTKohDs2lTqGvy0eaZJFfK&index=8",
            data_postagem: "2024-07-19"
        },
    ]

    const requestId = event.context.params?.id || 0;

    return {
        videos: videos.find((item) => item.id === Number(requestId))
    }
})
import { Video } from "~/interfaces/video";
import { postgresClient } from "../utils";
import { H3Event } from "h3"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const buscaVideos = async () => {
    return await prisma.video.findMany({
        orderBy: {
            descricao: "desc"
        }
    })
}

export const buscaPorId = async (event: H3Event) => {
    const request = getRouterParams(event)

    if (!request.id) {
        throw createError({
            statusCode: 400,
            name: "Vídeo inválido"
        })
    }

    const video = await prisma.video.findFirst({
        where: {
            id: Number(request.id)
        }
    })

    return !video ? "Vídeo não encontrado" : video;
}

export const addVideo = async (event: H3Event): Promise<string> => {
    try {
        const request = await readBody<Video>(event)

        await prisma.video.create({
            data: {
                ...request,
            }
        })
        return "Vídeo adicionado com sucesso!"
    } catch (err) {
        throw createError({
            statusCode: 500,
            name: "Erro ao criar vídeo"
        })
    }
}

export const atualizaVideo = async (event: H3Event): Promise<string> => {
    try {
        const requestBody = await readBody(event)

        const request = getRouterParams(event)

        if (!request.id) {
            throw createError({
                statusCode: 400,
                name: "Vídeo inválido"
            })
        }

        await prisma.video.update({
            where: {
                id: Number(request.id)
            },
            data: {
                descricao: requestBody.descricao,
                url: requestBody.urls
            }
        })

        return "Vídeo atualizado com sucesso!"
    } catch (err) {
        throw createError({
            statusCode: 500,
            name: "Erro ao atualizar vídeo"
        })
    }
}

export const deletarVideoPorId = async (event: H3Event) => {
    try {
        const request = getRouterParams(event)

        if (!request.id) {
            throw createError({
                statusCode: 400,
                name: "Vídeo inválido"
            })
        }

        await prisma.video.delete({
            where: {
                id: Number(request.id)
            },
        })

        return "Vídeo deletado com sucesso!"
    } catch (err) {
        throw createError({
            statusCode: 500,
            name: "Erro ao deletar vídeo"
        })
    }

}
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default oauthGoogleEventHandler({
    async onSuccess(event, { user, tokens }) {
        //verificar se o usuário exixste
        let usuario = await prisma.usuario.findUnique({
            where: {
                email: user.email,
            },
            include: {
                permissao: true,
            }
        })

        //se não o usuário não existir
        if (!usuario) {
            const PERMISSAO_USUARIO = 2;
            usuario = await prisma.usuario.create({
                data: {
                    email: user.email,
                    nome: user.name,
                    permissaoId: PERMISSAO_USUARIO
                },
                include: {
                    permissao: true
                }
            })
        }

        await setUserSession(event, {
            user: {
                id: user.id,
                email: user.email,
                urlFoto: user.picture,
                nome: String(user.name).trim(),
                permissao: usuario.permissao.nome,
                usuarioId: usuario.id,
            },
        });

        return sendRedirect(event, "/");
    },
    onError(event, error) {
        console.log("Erro Google Auth", error);
        return sendRedirect(event, "/");
    },
});
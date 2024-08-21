import * as videoController from "../controller/video"

const router = createRouter()

router.get("/videos", defineEventHandler(videoController.buscaVideos))
router.get("/videos/:id", defineEventHandler(videoController.buscaVideoPorId))
router.post("/videos", defineEventHandler(videoController.addVideo))
router.put("/videos/:id", defineEventHandler(videoController.atualizaVideo))
router.delete("/videos/:id", defineEventHandler(videoController.deletarVideoPorId))


export default useBase("/api/v1", router.handler)
import axios from "axios"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { Art } from "@/models/Art.js"
import { AppState } from "@/AppState.js"

//Axios already set up for us! env.js
class ArtService {


    async discoverArt() {

        const response = await api.get('api/artworks')
        logger.log('Got art!🎨', response.data)

        const artwork = response.data.artworks.map(pojo => new Art(pojo))
        AppState.arts = artwork

    }





}

export const artService = new ArtService()
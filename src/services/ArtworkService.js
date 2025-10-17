import axios from "axios"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Artwork.js"


//Axios already set up for us! env.js
class ArtworkService {


    async discoverArt() {

        const response = await api.get('api/artworks')
        logger.log('Got art!🎨', response.data)

        const artwork = response.data.artworks.map(pojo => new Artwork(pojo))
        AppState.artworks = artwork

    }





}

export const artworkService = new ArtworkService
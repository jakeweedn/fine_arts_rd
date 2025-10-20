import axios from "axios"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { AppState } from "@/AppState.js"
import { Artwork } from "@/models/Artwork.js"


//Axios already set up for us! env.js
class ArtworkService {



    //Get artwork from API
    async discoverArt() {

        const response = await api.get('api/artworks')
        logger.log('Got art!🎨', response.data)

        // const artwork = response.data.artworks.map(pojo => new Artwork(pojo))
        // AppState.artworks = artwork

        this.handleArtworksResponse(response)

    }

    //Functions for changing pages
    async changeDiscoverPage(pageNumber) {

        const response = await api.get(`api/artworks?page=${pageNumber}`)
        logger.log('GOT DIFFERENT PAGE OF MOVIES 🍿', response.data)
        this.handleArtworksResponse(response)
    }

    async changeSearchPage(pageNumber, searchTerm) {






    }

    async likeArtwork(artworkId) {


        const response = await api.post(`api/artworks/${artworkId}/admire`) //remember, : part of what is replaced 
        logger.log('Liked artwork', response.data)



        //Display who has liked the artwork to the page:-finish the below out...

        let selectedArtwork = AppState.artworks.find((artwork) => artwork.id == artworkId)
        let likesArray = selectedArtwork.admirers





        //display to the page, then worry about splicing later...








    }





    handleArtworksResponse(response) {

        const artworks = response.data.artworks.map(pojo => new Artwork(pojo))
        AppState.artworks = artworks
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.pages > 35 ? 35 : response.data.pages
    }





}

export const artworkService = new ArtworkService
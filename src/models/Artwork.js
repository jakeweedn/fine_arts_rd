

export class Artwork {

    constructor(data) {

        this.id = data.id
        this.slug = data.slug
        this.height = data.height
        this.width = data.width
        this.originalLink = data.originalLink
        this.imgUrl = data.imgUrls.full//do we really need more than one?

    }


}
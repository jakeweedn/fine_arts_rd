

export class Artwork {

    constructor(data) {

        this.id = data.id
        this.slug = data.slug
        this.height = data.height
        this.width = data.width
        this.originalLink = data.originalLink
        this.imgUrl = data.imgUrls.small

        this.admirers = data.admirers
        this.admirersIds = data.admirersIds

    }


}
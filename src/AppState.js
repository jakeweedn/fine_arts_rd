import { reactive } from 'vue'
import { Art } from './models/Art.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  arts: [

    /** @type {Art[]} */
    new Art({

      id: "8c24",
      slug: "Spaceman in the Sea",
      height: 356,
      width: 200,
      originalLink: "https://static.vecteezy.com/system/resources/thumbnails/005/920/794/small/spaceman-in-the-sea-under-clouds-at-sunset-video.jpg"


    })

    // new Art({

    //   id: 
    //   slug:
    //   height:
    //   width:
    //   originalLink:
    //   imgURL:


    // })


  ],


  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})


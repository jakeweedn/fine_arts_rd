import { reactive } from 'vue'


import { Artwork } from './models/Artwork.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**@type {Artwork[]} */
  artworks: [





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


import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'z4kclkrf',
  dataset: 'production',
  apiVersion: '2022-07-09', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
// token: 'sanity-auth-token', // or leave blank for unauthenticated usage
})

const imageBuilder = imageUrlBuilder(client)

export function fetch(query, param = {}) {
    return client.fetch(query, param)
}

export function getImageUrl(source) {
  return imageBuilder.image(source).url()
}

// const query = '*[_type == "bike" && seats >= $minSeats] {name, seats}'
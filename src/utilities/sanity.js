import sanityClient from '@sanity/client'

// const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'z4kclkrf',
  dataset: 'production',
  apiVersion: '2022-07-09', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
// token: 'sanity-auth-token', // or leave blank for unauthenticated usage
})

export function fetch(query, param = {}) {
    return client.fetch(query, param)
}

// const query = '*[_type == "bike" && seats >= $minSeats] {name, seats}'
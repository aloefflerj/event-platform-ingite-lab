import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x9jc5s09vs01up2o3yhhjw/master',
    cache: new InMemoryCache()
})
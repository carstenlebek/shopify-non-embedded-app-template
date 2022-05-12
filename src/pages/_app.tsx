import '@styles/globals.css'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client"

function MyApp({Component, pageProps}) {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `/api/graphql`,
        }),
    });


    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
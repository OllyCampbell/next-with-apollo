import { ApolloClient, HttpLink, InMemoryCache, gql } from "apollo-boost";
import withApollo from "next-with-apollo";

const IS_LOCAL_QUERY = gql`
    query IS_LOCAL_QUERY {
        isLocal @client
    }
`;

const typeDefs = gql`
    extend type Query {
        isLocal: Boolean!
    }

    extend type Mutation {
        setLocal(isLocal: Boolean!): Boolean!
    }
`;

const resolvers = {
    Mutation: {
        setLocal(_, { isLocal }, { cache }, info) {
            cache.writeQuery({
                query: IS_LOCAL_QUERY,
                data: { isLocal },
            });
            return isLocal;
        },
    },
};

const createClient = ({ headers }) => {
    const cache = new InMemoryCache();

    cache.writeData({
        data: {
            isLocal: true,
        },
    });

    const link = new HttpLink({
        uri: `${process.env.BACKEND_URL}`,
        credentials: "include",
        headers,
    });

    return new ApolloClient({
        cache,
        link,
        typeDefs,
        resolvers,
    });
};

export default withApollo(createClient);
export { IS_LOCAL_QUERY };

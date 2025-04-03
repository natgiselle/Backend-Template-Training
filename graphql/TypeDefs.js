const { gql } = require('apollo-server');

const typeDefs = gql`
    type Artist {
        id: ID!
        name: String
        genre: String
    }

    type Query {
        getArtists: [Artist]
        getArtist(id: ID!): Artist
    }

    type Mutation {
        addArtist(name: String!, genre: String!): Artist
    }
`;

module.exports = typeDefs;

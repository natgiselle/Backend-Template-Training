const Artist = require('../../models/Artist');

const resolvers = {
    Query: {
        getArtists: async () => await Artist.find(),
        getArtist: async (_, { id }) => await Artist.findById(id),
    },
    Mutation: {
        addArtist: async (_, { name, genre }) => {
            const artist = new Artist({ name, genre });
            await artist.save();
            return artist;
        },
    },
};

module.exports = resolvers;

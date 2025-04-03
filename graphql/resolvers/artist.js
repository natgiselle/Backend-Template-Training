const Artist = require('../../models/Artist');

module.exports = {
    Query: {
        getArtists: async () => {
            return await Artist.find();
        },
        getArtist: async (_, { id }) => {
            return await Artist.findById(id);
        },
    },
    Mutation: {
        addArtist: async (_, { name, genre }) => {
            const artist = new Artist({ name, genre });
            await artist.save();
            return artist;
        },
    },
};

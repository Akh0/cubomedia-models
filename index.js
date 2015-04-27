/**
 * Export models/
 *
 */

var mongoose = require('mongoose');

module.exports = {
    /**
     * La connexion à la base doit être faite avant le chargement des models pour qu'ils soient utilisables
     * @param mongoUri
     */
    connect: function(mongoUri, mongoOptions) {
        mongoose.connect(mongoUri, mongoOptions);
    },
    File: require('./models/file.model'),
    Movie: require('./models/movie.model'),
    Serie: require('./models/serie.model'),
    Episode: require('./models/episode.model')
};
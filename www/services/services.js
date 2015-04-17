angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var movies = [{
    id: 0,
    title: 'House M.D.',
    year: '2004',
    img: 'http://ia.media-imdb.com/images/M/MV5BMjA4NTkzNjg1OF5BMl5BanBnXkFtZTcwNjg3MTI1Ng@@._V1_SX178_AL_.jpg'
  }];

  return {
    all: function() {
      return movies;
    },
    remove: function(movie) {
      movies.splice(movies.indexOf(movie), 1);
    },
    get: function(id) {
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].id === parseInt(id)) {
          return movies[i];
        }
      }
      return null;
    }
  };
});

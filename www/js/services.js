angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'House M.D.',
    lastText: '2004',
    face: 'http://ia.media-imdb.com/images/M/MV5BMjA4NTkzNjg1OF5BMl5BanBnXkFtZTcwNjg3MTI1Ng@@._V1_SX178_AL_.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

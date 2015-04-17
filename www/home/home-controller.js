angular.module('home.controller', ['starter.services'])

.controller('homeCtrl', function($scope, Chats){
    
    $scope.movies = [{
    id: 0,
    title: 'House M.D.',
    year: '2004',
    img: 'http://ia.media-imdb.com/images/M/MV5BMjA4NTkzNjg1OF5BMl5BanBnXkFtZTcwNjg3MTI1Ng@@._V1_SX178_AL_.jpg'
  }];
  
  $scope.remove = function(id){
      $scope.movies.splice($scope.movies.indexOf(id), 1);
  }
    
})
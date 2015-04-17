angular.module('settings.controller', [])

.controller('settingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
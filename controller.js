angular.module('userProfiles').controller('MainController', function($scope, svc){

    $scope.getUsers = function(){
      $scope.users = svc.getUsers();
    };

    $scope.getUsers();
    $scope.toggleFavorite = svc.toggleFavorite;

});

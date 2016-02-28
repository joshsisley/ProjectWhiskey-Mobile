/**
 * Created by Joshua on 2/27/20
 **/
angular.module('whiskyMobile').controller('logoutController', function($scope, $location) {
    $scope.logout = function() {
        Meteor.logout();
        $location.path('/');
    };
});
/**
 * Created by Joshua on 2/27/2016.
 */
angular.module('whiskyMobile').controller('loginController', function($scope, $location) {
    $scope.login = function() {
        Meteor.loginWithPassword($scope.loginEmail, $scope.loginPassword, function(error) {
            if (!error) {
                $location.path('/home');
            } else {
                console.log(error.reason);
            }
        });
    }
});
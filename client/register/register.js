/**
 * Created by Joshua on 2/27/2016.
 */
angular.module('whiskyMobile').controller('registerController', function($scope) {
    $scope.submitRegistration = function() {
        Accounts.createUser({
            email: $scope.registerEmail,
            password: $scope.registerPassword,
            profile: {
                userType: 'mobile'
            }
        });
        console.log(Meteor.users.find().fetch());
    };
});
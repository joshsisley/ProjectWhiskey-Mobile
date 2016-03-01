/**
 * Created by Joshua on 2/27/2016.
 */
angular.module('whiskyMobile').controller('registerController', function($scope, $cordovaBarcodeScanner) {

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner
            .scan()
            .then(function(barcodeData) {
                console.log("success");
                console.log(barcodeData);
            }, function(error) {
                console.log("did not work, oh no :(")
            });
    };

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
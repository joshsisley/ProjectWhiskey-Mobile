/**
 * Created by Joshua on 2/27/2016.
 */
angular.module('whiskyMobile', ['angular-meteor', 'ui.router', 'accounts.ui', 'ngCordova']);

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
    document.addEventListener("deviceready", onDeviceReady, false);
    cordova.plugins.barcodeScanner.scan( //<------------- The code breaks at the word cordova
        function (result) {
            alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
} else {
    angular.element(document).ready(onReady);
}


function onReady() {
    angular.bootstrap(document, ['whiskyMobile'], {
        strictDi: true
    });
}
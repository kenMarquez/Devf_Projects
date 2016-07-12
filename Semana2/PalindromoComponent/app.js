/**
 * Created by Ken on 22/06/16.
 */
(function () {
    'use strict'

    var app = angular.module('myApp', []);
    
    
    app.controller('myCtrl', function ($scope) {
        $scope.mytext = "";
        $scope.validate = function () {

            var cadena = $scope.mytext;
            var nuevaCadena;

            if (cadena.trim().length == 0) {
                return false;
            }
            for (var i = 0; i < cadena.length; i++) {
                console.log(cadena.charAt(i));
                console.log(cadena.charAt(cadena.length - (i + 1)));
                var char1 = cadena.charAt(i);
                var char2 = cadena.charAt(cadena.length - (i + 1));
                if (char1 != char2) {
                    return false;
                }
            }
            return true;
        };
    });
})();





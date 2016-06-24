/**
 * Created by Ken on 22/06/16.
 */
(function () {
    'use strict'

    var palindromo = {
        controller: praCtrl,
        templateUrl: 'palindromo.html',
    }

    angular
        .module('practica3', [])
        .component('palindromo', palindromo);

    function praCtrl() {
        var prac = this;
        prac.name = 'Incerta Tu texto'
        $scope.validate = function (text) {
            console.log(text);
        }

    }

    var app = angular.module('myApp', []);
    app.controller('myCtrl', function ($scope) {
        $scope.mytext = "";
        $scope.validate = function () {
            var cadena = $scope.mytext;
            var nuevaCadena;

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





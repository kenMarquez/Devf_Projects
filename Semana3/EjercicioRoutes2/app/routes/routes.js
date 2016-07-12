/**
 * Created by Ken on 04/07/16.
 */
(function () {
    'use strict'

    angular
        .module('starwars')
        .config(ken)

    function ken($routeProvider) {
        $routeProvider
            .when('/', {
                // template: `<character category="'people'" id="1"></character>`
                // template: '<planets category="people" id="1"></planets>'
            })
            .when('/planets', {
                // template: `<planets category="'planets'" id="1"></planets>`
            })
            .when('/hola', {
                template: '<h1>que onda</h1>'
            })
            .when('/character', {})
            .otherwise({
                redirecTo: '/'
            });
    }
})();



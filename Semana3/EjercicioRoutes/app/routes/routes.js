/**
 * Created by Ken on 04/07/16.
 */
(function () {
    'use strict'

    angular
        .module('pracRoutes')
        .config(ken)

    function ken($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../componets/card'
            })
            .when('/texto', {
                templateUrl: 'navbar.html'
            })
            .when('/hola', {
                template: '<h1>que onda</h1>'
            })
            .otherwise({
                redirecTo: '/'
            });
    }

    
})();



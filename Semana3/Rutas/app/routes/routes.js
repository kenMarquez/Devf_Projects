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
                template: '<h3>hola</h3>'
            })
            .when('/texto', {
                template: '<h1>texto</h1>'
            })
            .when('/hola', {
                template: '<h1>que onda</h1>'
            })
            .otherwise({
                redirecTo: '/'
            });
    }
})();



/**
 * Created by Ken on 08/07/16.
 */
(function () {
    'use strict'

    angular
        .module('pokemonapi')
        .config(ken)
    
    

    function ken($routeProvider) {
        $routeProvider
            .when('/', {
                template: `<pokemon id="1"></pokemon>`
            })
            .when('/1', {
                template: `<pokemon id="2"></pokemon>`
            })
            .when('/3', {
                template: `<pokemon id="3"></pokemon>`
            })
            .when('/character', {})
            .otherwise({
                redirecTo: '/'
            });
    }
})();


/**
 * Created by Ken on 06/07/16.
 */
(function () {
    'use strict'

    angular
        .module('starwars')
        .factory('starwarsApi', starwarsApi);

    function starwarsApi($resource) {
        return $resource('http://swapi.co/api/:category/:id')
    }
})();

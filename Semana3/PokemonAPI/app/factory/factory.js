/**
 * Created by Ken on 08/07/16.
 */
(function () {
    'use strict'

    angular
        .module('pokemonapi')
        .factory('pokemonApi', pokemonApi);

    function pokemonApi($resource) {
        return $resource('http://pokeapi.co/api/v2/pokemon/:id')
    }
})();

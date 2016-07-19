/**
 * Created by Ken on 15/07/16.
 */
(function () {

    'use strict'

    function marvelData($resource) {
        var apikey = '2b8fe9b1ce46226767c491c54c9321fd';
        var hash = 'bd19a81c4232144a84dd3213766e800c';
        var ts = 1;
        console.log('http://gateway.marvel.com//v1/public/characters?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash);
        return $resource('http://gateway.marvel.com//v1/public/characters?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash);
    }

    angular
        .module('marvel')
        .factory('marvelData', marvelData);

})();
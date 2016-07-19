/**
 * Created by Ken on 14/07/16.
 */
(function () {
    'use strict'

    angular
        .module('pracfirebase')
        .factory('authService', authService);

    // authService.$inject = ['$firebaseAuth']

    function authService($firebaseAuth) {
        var link = new Firebase('https://123456789123.firebaseio.com/');
        return $firebaseAuth(link);
    }

})();
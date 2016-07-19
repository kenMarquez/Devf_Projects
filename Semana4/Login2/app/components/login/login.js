/**
 * Created by Ken on 14/07/16.
 */
(function () {
    'use strict'

    var login = {
        controller: loginController,
        templateUrl: "app/components/login/login.html",
    }

    // loginController.$inject = ['Auth', '$location'];

    function loginController(Auth, $location) {
        var log = this;

        log.login = function () {
            Auth.$authWithPassword({
                email: log.email,
                password: log.password
            }).then(function (userData) {
                console.log('User logged in with uid', userData);
                $location.path('/data');
                location.reload();
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    angular
        .module('pracfirebase')
        .component('login', login);
})();
/**
 * Created by Ken on 04/07/16.
 */
(function () {
    'use strict'

    var navbar = {
        controller: navCtrl,
        templateUrl: "navbar.html"
    }

    angular.module('repaso', [])
        .component('navBar', navbar);

    function navCtrl() {
        var first = this;
    }
})();
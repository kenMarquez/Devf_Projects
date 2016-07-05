/**
 * Created by Ken on 22/06/16.
 */
(function () {
    'use strict'

    var app = angular.module('myApp', ['ngYoutubeEmbed']);


    app.controller('myCtrl', ['$scope', function ($scope) {
        $scope.link = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
    }]);

})();
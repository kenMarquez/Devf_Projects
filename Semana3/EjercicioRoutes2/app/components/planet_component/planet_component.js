/**
 * Created by Ken on 06/07/16.
 */
(function () {
    'use strict'

    var planets = {
        bindings: {
            category: "=",
            id: "="
        },
        controller: planetsCtrl,
        templateUrl: 'app/components/planet_component/planet.html'

    }


    function planetsCtrl(starwarsApi) {
        var plan = this;


        plan.planets = starwarsApi.get({
            category: plan.category,
            id: plan.id
        })
        console.log('>>>>>', plan.planets)
    }

    angular
        .module('starwars')
        .component('planets', planets);

})();
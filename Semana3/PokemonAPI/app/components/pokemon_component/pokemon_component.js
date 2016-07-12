/**
 * Created by Ken on 08/07/16.
 */
(function () {
    'use strict'

    var pokemon = {
        bindings: {
            name: "=",
            id: "=",
        },
        controller: pokemonCtrl,
        templateUrl: 'app/components/pokemon_component/pokemon.html',
    }


    function pokemonCtrl(pokemonApi) {
        var pok = this;

        pok.pokemon = pokemonApi.get({
            // category: char.category,
            name: pok.name,
            id: pok.id,
        });
        console.log('>>>>>', pok.pokemon);

    }

    angular
        .module('pokemonapi')
        .component('pokemon', pokemon);
})();
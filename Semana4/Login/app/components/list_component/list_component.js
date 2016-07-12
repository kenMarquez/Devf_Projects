/**
 * Created by Ken on 11/07/16.
 */
(function () {
    'use strict'

    var list = {
        templateUrl: "app/components/list_component/list.html",
        controller: listCtrl,
    }

    function listCtrl($firebaseArray) {
        var list = this;
        console.log("aqui");
        var ref = new Firebase('https://123456789123.firebaseio.com/');

        list.data = $firebaseArray(ref);
        console.log("list: ", list.data);

        $('.collapsible').collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });

    }

    angular
        .module('login')
        .component('list', list);

})();


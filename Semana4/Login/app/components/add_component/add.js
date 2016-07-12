(function () {
    'use strict'

    var add = {
        templateUrl: "app/components/add_component/add.html",
        controller: addCtrl,
    }


    function addCtrl($firebaseArray) {
        var agregar = this;

        var ref = new Firebase('https://123456789123.firebaseio.com/');

        agregar.data = $firebaseArray(ref);
        // console.log("data2", agregar.data);
        agregar.add = add;

        function add() {
            agregar.data.$add({
                'name': agregar.name,
                'correo': agregar.email,
                'message': agregar.text
            });

            agregar.name = '';
            agregar.email = '';
            agregar.text = '';
        }
    }

    angular
        .module('login')
        .component('add', add);

})();
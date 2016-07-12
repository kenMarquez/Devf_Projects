/**
 * Created by Ken on 07/07/16.
 */
(function () {

    'use strict'

    var chat = {
        controller: chatCtrl,
        templateUrl: "app/chat_componet/chat.html",
    }

    function chatCtrl(chatData) {
        var chat = this;
        chat.messages = chatData;
        chat.addMessage = function addMessage() {
            chat.messages.$add({
                user: chat.user,
                message: chat.message,
            });
            chat.message = "";
        }


    }

    angular
        .module('chat')
        .component('chat', chat);

})();
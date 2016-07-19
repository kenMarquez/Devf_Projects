/**
 * Created by Ken on 14/07/16.
 */
(function () {
    'use strict'

    var spotifyPlayer = {
        templateUrl: "app/components/spotify_component/spotify.html",
        controller: spotifyCtrl,
    }

    function spotifyCtrl(spotifySearch) {
        var spotify = this;
        spotify.audio = new Audio;
        spotify.play = play;
        spotify.song = null;
        spotify.playList = null;
        spotify.search = doSearch;
        // spotify.milliseconds = milliseconds;

        function play(song) {
            spotify.song = song;
            spotify.audio.pause();
            spotify.audio.src = song.preview_url;
            spotify.audio.play();
        }

        function doSearch() {
            console.log(spotify.song_name)
            spotifySearch.get({song: spotify.song_name})
                .$promise
                .then(function (response) {
                    console.log(response)
                    spotify.playlist = response.tracks.items;
                    console.log(spotify.playlist)
                    spotify.play(response.tracks.items[0])
                });
        }


    }


    angular
        .module('spotify')
        .component('spotifyPlayer', spotifyPlayer);

})
();
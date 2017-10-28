
var buttonService = {

    isOnPause: function () {

        return document.getElementById("startBtn").classList.contains("start-button");
    },

    onPause: function () {

        var el = document.getElementById("startBtn");

        el.classList.remove("start-button");

        el.classList.add("pause-button");

        el.innerText = "Pause";
    },


    onStart: function () {

        var el = document.getElementById("startBtn");

        el.classList.remove("pause-button");

        el.classList.add("start-button");

        el.innerText = "Start";
    }
}
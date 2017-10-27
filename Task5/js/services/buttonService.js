
var generateBtn = document.getElementById("generateBtn");

var shotBtn = document.getElementById("shotBtn");


var buttonService = {

    isOnPause: function () {

        return document.getElementById("startBtn").classList.contains("start-button");
    },

    onPause: function () {

        var el = document.getElementById("startBtn");

        el.classList.remove("start-button");

        el.innerText = "Pause";
    },


    onStart: function () {

        var el = document.getElementById("startBtn");

        el.classList.add("start-button");

        el.innerText = "Start";
    }
}
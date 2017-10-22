window.addEventListener("load", function () {

    var zombieOb;

    var zombieEl;


    //#region button elements

    var generateBtn = document.getElementById("generateBtn");

    var moveBtn = document.getElementById("moveBtn");

    var hitBtn = document.getElementById("hitBtn");

    //#endregion


    //#region functions

    var generate = function() {

        zombieOb = new Zombie();

        zombieEl = zombieOb.getElement();


        var roadElement = document.getElementById("zombieRoad");

        roadElement.appendChild(zombieEl);


        //#region button handlers managing

        buttonService.disableElement(generateBtn, generate);

        buttonService.enableElement(moveBtn, move);

        buttonService.enableElement(hitBtn, hit);


        zombieOb.on("killed", function () {

            buttonService.enableElement(generateBtn, generate);

            buttonService.disableElement(moveBtn, move);

            buttonService.disableElement(hitBtn, hit);
        });

        //#endregion
    };

    var move = function() {

        var previousMargin = getComputedStyle(zombieEl).marginLeft;

        var currentMargin = parseInt(previousMargin) - zombieOb.move();

        zombieEl.style.marginLeft = currentMargin + "px";
    }

    var hit = function () {

        var damage = 40;

        zombieOb.hit(damage);


        var healthElement = document.getElementsByClassName("health")[0];

        var currHealthWidth = getComputedStyle(healthElement).width;


        var resWidth = parseInt(currHealthWidth) - damage / 2;

        healthElement.style.width =  resWidth + "px";
    }

    //endregion


    document.getElementById("generateBtn").addEventListener("click", generate);


    var buttonService = {

        enableElement: function (element, eventFunction) {

            element.addEventListener("click", eventFunction);

            element.classList.remove("unavailable-button");
        },

        disableElement: function (element, eventFunction) {

            element.removeEventListener("click", eventFunction);

            element.classList.add("unavailable-button");
        }
    }
});
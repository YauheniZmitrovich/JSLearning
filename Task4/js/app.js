window.addEventListener("load", function () {

    var zombieOb;


    //#region button elements

    var generateBtn = document.getElementById("generateBtn");

    var shotBtn = document.getElementById("shotBtn");

    //#endregion


    //#region functions

    var generate = function() {

        if(buttonService.isOn(generateBtn)) { //is the button pressed?

            generateBtn.classList.remove("pressed-button");

        } else {

            if(zombieOb == null) {

                createZombie();

                buttonService.enableElement(shotBtn, shot);
            }

            generateBtn.classList.add("pressed-button");
        }
    };

    var move = function() {

        var timerId = setTimeout(function tick() {

            var zombieEl = zombieOb.getElement();

            var previousMargin = getComputedStyle(zombieEl).marginLeft;

            var currentMargin = parseInt(previousMargin) - zombieOb.move();

            zombieEl.style.marginLeft = currentMargin + "px";


            if(currentMargin > 0) {

                timerId = setTimeout(tick, 500);
            }

        }, 500);
    }

    var shot = function () {

        var damage = 40;


        var healthElement = document.getElementsByClassName("health")[0];

        var previousHealth = parseInt(getComputedStyle(healthElement).width);


        var resHealth = previousHealth - damage / 2;

        if(resHealth > 0) {

            healthElement.style.width = resHealth + "px";
        }

        zombieOb.hit(damage);
    }


    function createZombie() {

        zombieOb = new Zombie();

        var zombieEl = zombieOb.getElement();


        roadElement = document.getElementById("zombieRoad");

        roadElement.appendChild(zombieEl);


        move();


        zombieOb.on("killed", function () {

            zombieEl.parentNode.removeChild(zombieEl);

            if(buttonService.isOn(generateBtn)) {

                createZombie();

            } else {

                zombieOb = null;

                buttonService.disableElement(shotBtn, shot);
            }
        });
    }

    //endregion


    generateBtn.addEventListener("click", generate);


    var buttonService = {

        enableElement: function (element, eventFunction) {

            element.addEventListener("click", eventFunction);

            element.classList.remove("unavailable-button");
        },

        disableElement: function (element, eventFunction) {

            element.removeEventListener("click", eventFunction);

            element.classList.add("unavailable-button");
        },

        isOn: function (element) {

            return element.classList.contains("pressed-button");
        }
    }
});
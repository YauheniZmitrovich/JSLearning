window.addEventListener("load", function () {

    var startBtn = document.getElementById("startBtn");

    var zombies = {};

    var timerGeneratingId;


    var start = function () {

        if(buttonService.isOnPause() == true) {//if zombie is not generating

            buttonService.onPause();

            timerGeneratingId = setTimeout(function tick() {

                var count = 0;

                var randNum = random(1, 3);

                switch (randNum) {

                    case 1:

                        zombies[count] = new Unit.simpleZombie(count, "simpleZombie");

                        break;

                    case 2:

                        zombies[count] = new Unit.strongZombie(count, "strongZombie");

                        break;

                    case 3:

                        zombies[count] = new Unit.michaelZombie(count, "michaelZombie");

                        break;
                }


                var zombieEl = zombies[count].getElement();

                randNum = random(1, 5);

                var lineEl = document.getElementById("zombieLine" + randNum);

                lineEl.appendChild(zombieEl);

                move(zombies[count]);


                count++;


                timerGeneratingId = setTimeout(tick, 10000);

            }, 1000);
        }
        else {

            buttonService.onStart();

            clearTimeout(timerGeneratingId);
        }
    };


    var move = function(zombieOb) {

        var timerMovingId = setTimeout(function tick() {

            var zombieEl = zombieOb.getElement();

            var previousMargin = getComputedStyle(zombieEl).marginLeft;

            var currentMargin = parseInt(previousMargin) - zombieOb.move();

            zombieEl.style.marginLeft = currentMargin + "px";


            if(currentMargin > 0) {

                timerMovingId = setTimeout(tick, 200);
            }

        }, 200);
    }



    startBtn.addEventListener("click", start);

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
});
//     function createZombie() {
//
//         zombieOb = new Zombie();
//
//         var zombieEl = zombieOb.getElement();
//
//
//         roadElement = document.getElementById("zombieRoad");
//
//         roadElement.appendChild(zombieEl);
//
//
//         move();
//
//
//         zombieOb.on("killed", function () {
//
//             if(buttonService.isOn(generateBtn)) {
//
//                 createZombie();
//
//             } else {
//
//                 zombieOb = null;
//
//                 buttonService.disableElement(shotBtn, shot);
//             }
//         });
//     }
//
//
//
//
//
//     var zombieOb;
//
//
//     //#region button elements
//
//     var generateBtn = document.getElementById("generateBtn");
//
//     var shotBtn = document.getElementById("shotBtn");
//
//     //#endregion
//
//
//     //#region functions
//
//     var generate = function() {
//
//         if(buttonService.isOn(generateBtn)) { //is the button pressed?
//
//             generateBtn.classList.remove("pressed-button");
//
//         } else {
//
//             if(zombieOb == null) {
//
//                 createZombie();
//
//                 buttonService.enableElement(shotBtn, shot);
//             }
//
//             generateBtn.classList.add("pressed-button");
//         }
//     };
//     var shot = function () {
//
//         var damage = 40;
//
//
//         var healthElement = document.getElementsByClassName("health")[0];
//
//         var previousHealth = parseInt(getComputedStyle(healthElement).width);
//
//
//         var resHealth = previousHealth - damage / 2;
//
//         if(resHealth > 0) {
//
//             healthElement.style.width = resHealth + "px";
//         }
//
//         zombieOb.hit(damage);
//     }
//
//
//
//
//     //endregion
//
//
//     generateBtn.addEventListener("click", generate);
//
//
//
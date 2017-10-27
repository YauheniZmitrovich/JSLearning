window.addEventListener("load", function () {

    var startBtn = document.getElementById("startBtn");

    var heroes = {};

    var timerGeneratingId;


    var start = function () {

        if(buttonService.isOnPause() == true) {//if zombie is not generating

            buttonService.onPause();

            timerGeneratingId = setTimeout(function tick() {

                zombieService.createZombie();

                timerGeneratingId = setTimeout(tick, 2000);

            }, 2000);
        }
        else {

            buttonService.onStart();

            clearTimeout(timerGeneratingId);
        }
    };




    startBtn.addEventListener("click", start);



    var plantBtn =  document.getElementById("plantButton");

    plantBtn.addEventListener("click",function () {

        plantBtn.classList.add("pressed-button");
    });

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
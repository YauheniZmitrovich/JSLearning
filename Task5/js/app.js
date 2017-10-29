window.addEventListener("load", function () {

    fieldService.generate();


    var start = function () {

        if(buttonService.isOnPause() == true) {//if zombie is not generating

            buttonService.onPause();

            document.getElementById("zombieField").classList.remove("gameOver");

            document.getElementById("zombieField").classList.remove("victory");


            var count = 0;

            timerGeneratingId = setTimeout(function tick() {

                zombieService.createZombie();

                count++;

                timerGeneratingId = setTimeout(tick, 2000);

                if(count == zombieService.numZombiePerLevel) {

                    clearTimeout(timerGeneratingId);
                }

            }, 2000);
        }
        else {

            buttonService.onStart();

            clearTimeout(timerGeneratingId);
        }

        zombieService.on("gameOver", function () {

            resetGame("gameOver");
        });

        zombieService.on("victory", function () {

            resetGame("victory");
        });
    };

    var startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", start);


    var plantBtn =  document.getElementById("plantButton");

    plantBtn.addEventListener("click",function () {

        plantBtn.classList.add("pressed-button");
    });

    function resetGame(styleClassName) {

        clearTimeout(zombieService.timerMovingId);

        clearTimeout(timerGeneratingId);


        var zombieFieldEl = document.getElementById("zombieField");

        zombieFieldEl.innerHTML = "";

        zombieFieldEl.classList.add(styleClassName);


        zombieService.numZombiePerLevel += 5;

        buttonService.onStart();

        startBtn.addEventListener("click", fieldService.generate);
    }
});
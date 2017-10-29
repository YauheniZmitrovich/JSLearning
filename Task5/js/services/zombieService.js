var zombies = [];

var count = 0;


var zombieService = {

    timerMovingId : null,

    numZombiePerLevel : 6,

    events : {},

    wasKilled : 0,

    createZombie : function () {

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

        zombieEl.id = "zombie" + (count + zombieService.numZombiePerLevel - 6);

        randNum = random(0, 5);

        var lineEl = document.getElementById("zombieLine" + randNum);

        lineEl.appendChild(zombieEl);


        var zombieOb = zombies[count];

        var index = count;

        zombieOb.on("killed", function () {

            zombieService.wasKilled++;

            var zombieOb = zombies[index];

            var el = zombieOb.getElement();

            el.parentNode.removeChild(el);

            zombies[index] = null;

            if(zombieService.isAllZombieKilled()) {

                for (var i = 0; i < zombieService.events["victory"].length; i++)
                {
                    zombieService.events["victory"][i]();
                }
            }
        });


        zombieService.moveZombie(zombieOb);

        count++;
    },

    moveZombie : function(zombieOb) {

        var timerMovingId;

        zombieOb.on("killed", function () {

            var tempTimer = timerMovingId;

            clearTimeout(tempTimer);
        });

        zombieService.on("victory", function () {

            var tempTimer = timerMovingId;

            clearTimeout(tempTimer);
        });

        zombieService.on("gameOver", function () {

            var tempTimer = timerMovingId;

            clearTimeout(tempTimer);
        });

        timerMovingId = setTimeout(function tick() {

            var zombieEl = zombieOb.getElement();

            var previousOffset = getComputedStyle(zombieEl).left;

            var currentOffset = parseInt(previousOffset) - zombieOb.move();

            zombieEl.style.left = currentOffset + "px";


            if(currentOffset < 260) {

                clearTimeout(timerMovingId);

                for (var i = 0; i < zombieService.events["gameOver"].length; i++)
                {
                    zombieService.events["gameOver"][i]();
                }
            }
            else {

               timerMovingId = setTimeout(tick, 140);
            }

        }, 20);

    },

    shot : function (zombieEl) {

        var damage = 18;

        var index = parseInt(zombieEl.id.replace(/\D+/g,"") ) - zombieService.numZombiePerLevel + 6;

        var zombieOb = zombies[index];

        if(zombieOb != null) {

            zombieOb.hit(damage);
        }
    },

    isAllZombieKilled : function () {

        var num = document.getElementsByClassName("zombie").length;

        return num == 0 && zombieService.wasKilled == zombieService.numZombiePerLevel;
    },

    clearAll : function () {

        clearTimeout(zombieService.timerMovingId);

        zombies = [];

        count = 0;

        zombieService.wasKilled = 0;
    },

    on : function (eventName, eventCallback) {

        zombieService.events[eventName] = zombieService.events[eventName] || [];

        zombieService.events[eventName].push(eventCallback);
    }
}
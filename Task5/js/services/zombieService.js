var zombies = [];

var count = 0;

var deadCount = 0;


var zombieService = {

    timerMovingId : null,

    events : {},

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

        zombieEl.id = "zombie" + count;

        randNum = random(0, 5);

        var lineEl = document.getElementById("zombieLine" + randNum);

        lineEl.appendChild(zombieEl);


        var zombieOb = zombies[count];

        var index = count;

        zombieOb.on("killed", function () {

            var zombieOb = zombies[index];

            var el = zombieOb.getElement();

            el.parentNode.removeChild(el);

            zombies[index] = null;

            deadCount++;

            if(deadCount == count - 1) {

                clearTimeout(zombieService.timerMovingId);

                for (var i = 0; i < zombieService.events["victory"].length; i++)
                {
                    zombieService.events["victory"][i]();
                }
            }
        });


        zombieService.moveZombie(zombies[count]);

        count++;
    },

    moveZombie : function(zombieOb) {

        zombieService.timerMovingId = setTimeout(function tick() {

            var zombieEl = zombieOb.getElement();

            var previousOffset = getComputedStyle(zombieEl).left;

            var currentOffset = parseInt(previousOffset) - zombieOb.move();

            zombieEl.style.left = currentOffset + "px";


            if(currentOffset < 260) {

                clearTimeout(zombieService.timerMovingId);

                for (var i = 0; i < zombieService.events["gameOver"].length; i++)
                {
                    zombieService.events["gameOver"][i]();
                }

                zombieService.clearAll();

                heroService.clearAll();
            }
            else {

                zombieService.timerMovingId = setTimeout(tick, 140);
            }

        }, 20);
    },

    shot : function (zombieEl) {

        var damage = 18;


        var index = parseInt(zombieEl.id.replace(/\D+/g,""));

        var zombieOb = zombies[index];


        zombieOb.hit(damage);
    },

    clearAll : function () {

        zombies = [];

        count = 0;

        deadCount = 0;

        clearTimeout(zombieService.timerMovingId);
    },

    on : function (eventName, eventCallback) {

        zombieService.events[eventName] = zombieService.events[eventName] || [];

        zombieService.events[eventName].push(eventCallback);
    }
}
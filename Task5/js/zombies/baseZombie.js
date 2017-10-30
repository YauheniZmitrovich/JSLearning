Unit.baseZombie = function (zombieId, zombieClassName) {

    //#region fields

    this.id = zombieId;

    this.health =  105;

    this.speed = 3;

    //#endregion


    //#region events

    this.events = {};

    //#endregion


    //#region element creating

    var zombieElement = document.createElement("div");

    var healthElement = document.createElement("div");

    var gifElement = document.createElement("div");


    zombieElement.classList.add("zombie");

    healthElement.classList.add("health");

    gifElement.classList.add(zombieClassName);


    zombieElement.appendChild(healthElement);

    zombieElement.appendChild(gifElement);

    //#endregion


    //#region public methods

    this.on = function (eventName, eventCallback) {

        this.events[eventName] = this.events[eventName] || [];

        this.events[eventName].push(eventCallback);
    }

    this.move = function () {

        return this.speed;
    }

    this.hit = function (damage) {

        if (damage >= this.health) {

            var leftOffset = parseInt(getComputedStyle(zombieElement).left);

            var lineEl = zombieElement.parentNode;

            for (var i = 0; i < this.events["killed"].length; i++)
            {
                this.events["killed"][i]();
            }

            var diedElement = document.createElement("div");

            diedElement.classList.add("diedZombie");

            diedElement.classList.add(zombieClassName.concat("-die"));

            diedElement.style.left = leftOffset - 15 + "px";

            lineEl.appendChild(diedElement);


            var timerDieId = setTimeout( function tick () {

                diedElement.parentNode.removeChild(diedElement);

            }, 400);


        } else {

            var healthElement = zombieElement.firstElementChild;

            var previousHealth = parseInt(getComputedStyle(healthElement).width, 10);

            var resHealth = previousHealth - damage / 3;

            this.health = resHealth * 3;//cuz troubles with parsing

            if(resHealth > 0) {

                healthElement.style.width = resHealth + "px";
            }
        }
    }


    this.getElement = function () {

        return zombieElement;
    }

    //#endregion
}
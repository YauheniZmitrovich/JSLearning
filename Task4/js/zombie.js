function Zombie() {

    //#region element creating

        var zombieElement = document.createElement("div");

        var healthElement = document.createElement("div");

        var gifElement = document.createElement("div");


        zombieElement.classList.add("zombie");

        healthElement.classList.add("health");

        gifElement.classList.add("gif");


        zombieElement.appendChild(healthElement);

        zombieElement.appendChild(gifElement);

    //#endregion


    //#region fields

    var health = 100;//TODO: public access??

    var speed = 10;

    //#endregion


    //#region public methods

    this.on = function (eventName, eventCallback) {

        zombieElement.addEventListener(eventName, eventCallback);
    }

    this.move = function () {

        return speed;
    }

    this.hit = function (damage) {

        if (damage > health) {

            killed();

        } else {

            health -= damage;
        }
    }

    //#endregion


    //#region events

    var killed = new CustomEvent("killed");

    on("killed", function() {

        health = 0;
    });

    //#endregion
}
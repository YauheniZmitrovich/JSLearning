function Zombie() {

    //#region fields

    var health = 100;

    var speed = 10;

    //#endregion


    //#region events

    var events = {};

    //#endregion


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


    //#region public methods

    this.on = function (eventName, eventCallback) {

        events[eventName] = events[eventName] || [];

        events[eventName].push(eventCallback);
    }

    this.move = function () {

        return speed;
    }

    this.hit = function (damage) {

        if (damage >= health) {

            for (var i = 0; i < events["killed"].length; i++)
            {
                events["killed"][i]();
            }

        } else {

            health -= damage;
        }
    }


    this.getElement = function () {

        return zombieElement;
    }

    //#endregion
}
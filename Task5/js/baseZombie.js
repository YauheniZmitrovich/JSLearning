Unit.baseZombie = function (zombieId, zombieClassName) {

    //#region fields

    this.id = zombieId;

    this.health = 100;

    this.speed = 4;

    //#endregion


    //#region events

    var killed = new CustomEvent("killed");

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

        zombieElement.addEventListener(eventName, eventCallback);
    }

    this.move = function () {

        return this.speed;
    }

    this.hit = function (damage) {

        if (damage >= health) {

            zombieElement.dispatchEvent(killed);

        } else {

            health -= damage;
        }
    }


    this.getElement = function () {

        return zombieElement;
    }

    //#endregion
}
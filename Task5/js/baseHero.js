Unit.baseHero = function (heroId, heroClassName) {

    //#region fields

    this.id = heroId;

    //#endregion


    //#region events

    var events = {};

    //#endregion


    //#region element creating

    var heroElement = document.createElement("div");

    var gifElement = document.createElement("div");

    heroElement.classList.add("hero");

    gifElement.classList.add(heroClassName);


    heroElement.appendChild(gifElement);

    //#endregion


    //#region public methods

    this.on = function (eventName, eventCallback) {

        events[eventName] = events[eventName] || [];

        events[eventName].push(eventCallback);
    }

    this.getElement = function () {

        return heroElement;
    }

    //#endregion
}
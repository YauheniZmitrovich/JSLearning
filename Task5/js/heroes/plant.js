Unit.plant = function (id) {
    Unit.baseHero.call(this, id, "plant");
}

this.bulletSpeed = function () {

    return this.speed * 2;
}
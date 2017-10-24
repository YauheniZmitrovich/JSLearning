Unit.michaelZombie = function (id) {

    Unit.baseZombie.call(this, id, "michaelZombie");

    this.move = function () {

        return this.speed * 2;
    };
};
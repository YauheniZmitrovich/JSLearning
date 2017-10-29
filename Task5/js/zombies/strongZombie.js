Unit.strongZombie = function (id) {

    Unit.baseZombie.call(this, id, "strongZombie");

    var baseHit = this.hit;

    this.hit = function (damage) {

        baseHit.call(this, damage / 2);
    }
};
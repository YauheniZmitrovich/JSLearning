Unit.strongZombie = function (id) {

    Unit.baseZombie.call(this, id, "strongZombie");

    this.hit = function (damage) {

        if (damage / 2 >= health) {

            zombieElement.dispatchEvent(killed);

        } else {

            health -= damage / 2;
        }
    };
};
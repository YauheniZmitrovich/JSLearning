var heroService = {

    timerHeroAdditionId : null,

    addHero : function(grassId) {

        var grassIntId = grassId.replace(/\D+/g,"");

        var heroOb = new Unit.plant(grassIntId, "plant");

        var heroEl = heroOb.getElement();


        var lineEl = document.getElementById("zombieLine" + parseInt(grassIntId / 12));

        var leftBorder = lineEl.getBoundingClientRect().left

        var offset = leftBorder + grassIntId % 12 * 75 +"px";


        heroEl.style.left = offset;

        lineEl.appendChild(heroEl);


        heroService.timerHeroAdditionId = setTimeout(function tick() {

            heroService.addBullet(lineEl, offset);

            heroService.timerHeroAdditionId = setTimeout(tick, 1000);
        }, 10);
    },

    moveBullet : function(bulletEl) {

        zombieService.on("gameOver", function () {

            clearTimeout(timerMovingId);
        });

        zombieService.on("victory", function () {

            clearTimeout(timerMovingId);
        });

        var timerMovingId = setTimeout(function tick() {

            var offset = parseInt(bulletEl.style.left);

            bulletEl.style.left = offset + 10 + "px";


            var lineEl = bulletEl.parentNode;

            var zombieToShotEl = heroService.findFirstZombieInFrontOfBullet(lineEl, bulletEl);


            if(zombieToShotEl != null && heroService.isBulletReachZombie(zombieToShotEl,bulletEl)) {

                zombieService.shot(zombieToShotEl);

                clearTimeout(timerMovingId);

                bulletEl.parentNode.removeChild(bulletEl);
            }
            else if(offset > 1078) {

                clearTimeout(timerMovingId);

                bulletEl.parentNode.removeChild(bulletEl);
            }
            else {

                timerMovingId = setTimeout(tick, 40);
            }

        }, 40);
    },

    addBullet : function(lineEl, offset) {

        this.bulletEl =  document.createElement("div");

        this.bulletEl.classList.add("bullet");


        this.bulletEl.style.left = offset;

        lineEl.appendChild(this.bulletEl);


        heroService.moveBullet(this.bulletEl);
    },

    findFirstZombieInFrontOfBullet: function (lineEl, bulletEl) {

        var elems = lineEl.children;

        var zombies = [];

        for(var i = 0; i < elems.length; i++) {

            if(elems[i].classList.contains("zombie")) {

                zombies[zombies.length] = elems[i];
            }
        }

        bulletEl.leftOffset = bulletEl.getBoundingClientRect().left;

        var resZombie;

        var resOffset = 1200;

        for(var k = 0; k < zombies.length; k++ ) {

            var currZombieOffset = zombies[k].getBoundingClientRect().left;

            if(currZombieOffset < resOffset  &&  bulletEl.leftOffset - 40 <= currZombieOffset) {

                resZombie = zombies[k];

                resOffset = currZombieOffset;
            }
        }

        return resZombie;
    },

    isBulletReachZombie: function (zombieEl, bulletEl) {

        var zombieOffset = zombieEl.getBoundingClientRect().left;

        var bulletOffset = bulletEl.getBoundingClientRect().left

        return zombieOffset <= bulletOffset;
    },

    clearAll : function () {

        clearTimeout(heroService.timerHeroAdditionId);
    }
}
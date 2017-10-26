window.addEventListener("load", function () {

    var zombieField = document.getElementById("zombieField");

    var grassElements = [];


    for (var i = 0; i < 5; i++) {

        var zombieLine = document.createElement("div");

        zombieLine.classList.add("zombie-line");

        zombieLine.id = "zombieLine" + i;

        for (var j = 0; j < 12; j++) {

            var index = i * 12 + j;

            grassElements[index] = document.createElement("div");


            var styleIndex = (isEven(i) == isEven(j)) ? 1 : 2;

            grassElements[index].classList.add("grass" + styleIndex);


            grassElements[index].addEventListener("click", function () {

                addHero(this.id);
            });


            zombieLine.appendChild(grassElements[index]);

            grassElements[index].id = "grass" + index;
        }

        zombieField.appendChild(zombieLine);
    }

    function addHero (grassId) {

        var grassIntId = grassId.replace(/\D+/g,"");

        var lineEl = document.getElementById("zombieLine" + parseInt(grassIntId / 12));

        var leftBorder = lineEl.getBoundingClientRect().left


        var hero = new Unit.plant(grassIntId, "plant");

        var heroEl = hero.getElement();


        var blockOffset = grassIntId%12 * 75;

        heroEl.style.left = leftBorder + blockOffset + 15 + "px";

        lineEl.appendChild(heroEl);
    };

    function isEven(num) {

        return num % 2 == 0;
    }
});


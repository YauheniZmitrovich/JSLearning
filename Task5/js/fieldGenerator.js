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

                heroService.addHero(this.id);
            });


            zombieLine.appendChild(grassElements[index]);

            grassElements[index].id = "grass" + index;
        }

        zombieField.appendChild(zombieLine);
    }



    function isEven(num) {

        return num % 2 == 0;
    }
});


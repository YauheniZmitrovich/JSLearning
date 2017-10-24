window.addEventListener("load", function () {

    var generateBtn = document.getElementById("generateBtn");

    var setColorBtn = document.getElementById("setColorBtn");

    var resetBtn = document.getElementById("resetBtn");


    generateBtn.addEventListener("click", generate);


    function generate() {

        var blockAreaElement = document.getElementById("blockArea");


        for (var i = 0; i < 18; i++) {

          var innerElement = document.createElement("div");


          innerElement.id = i;

          innerElement.innerHTML = random(1, 100);

          innerElement.classList.add("inner-element");


          blockAreaElement.appendChild(innerElement);
        }

        buttonService.disableElement(generateBtn, generate);

        buttonService.enableElement(setColorBtn, setColor);

        buttonService.enableElement(resetBtn, reset);
    }

    function setColor() {

        var elem = document.getElementById("blockArea");

        var elems = elem.getElementsByClassName("inner-element");


        for (var i=0; i < elems.length; i++) {

            if(elems[i].innerHTML > 75) {
                elems[i].classList.add("red");
            }
            else if(elems[i].innerHTML > 50) {
                elems[i].classList.add("orange");
            }
            else if(elems[i].innerHTML > 25) {
                elems[i].classList.add("green");
            }
        };

        buttonService.disableElement(setColorBtn,setColor);
    }

    function reset() {

        var elem = document.getElementById("blockArea").innerHTML = "";


        buttonService.disableElement(setColorBtn, setColor);

        buttonService.enableElement(generateBtn, generate);

        buttonService.disableElement(resetBtn, reset);
    }


    var buttonService = {

        enableElement: function (element, eventFunction) {

            element.addEventListener("click", eventFunction);

            element.classList.remove("unavailable-button");
        },

        disableElement: function (element, eventFunction) {

            element.removeEventListener("click", eventFunction);

            element.classList.add("unavailable-button");
        }
    }


    function random(min, max) {

        return Math.floor((Math.random() * max) + min);
    }
});

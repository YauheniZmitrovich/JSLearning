window.addEventListener("load", function () {

    document.getElementById("generateBtn").addEventListener("click", generate);


    function generate() {

        var blockAreaElement = document.getElementById("blockArea");


        for (var i = 0; i < 18; i++) {

          var innerElement = document.createElement("div");


          innerElement.id = i;

          innerElement.innerHTML = random(1, 100);

          innerElement.classList.add("inner-element");


          blockAreaElement.appendChild(innerElement);
        }

        buttonService.disableElement(document.getElementById("generateBtn"),generate);

        buttonService.enableElement(document.getElementById("setColorBtn"),setColor);

        buttonService.enableElement(document.getElementById("resetBtn"),reset);
    }

    function setColor() {

        var elem = document.getElementById("blockArea");

        var elems = elem.getElementsByClassName("inner-element");


        for (var i=0; i < elems.length; i++) {

            if(elems[i].innerHTML > 75) {
                elems[i].style.backgroundColor = "#f44336";
            }
            else if(elems[i].innerHTML > 50) {
                elems[i].style.backgroundColor = "#ff9800";
            }
            else if(elems[i].innerHTML > 25) {
                elems[i].style.backgroundColor = "#4caf50";
            }
        };

        buttonService.disableElement(document.getElementById("setColorBtn"),setColor);
    }

    function reset() {

        var elem = document.getElementById("blockArea").innerHTML = "";


        buttonService.disableElement(document.getElementById("setColorBtn"),setColor);

        buttonService.enableElement(document.getElementById("generateBtn"),generate);

        buttonService.disableElement(document.getElementById("resetBtn"),reset);
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
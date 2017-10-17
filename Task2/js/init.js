var array = [];

for (var i = 0; i < 5; i++) {

    array[i] = {
        count: random(1, 10)
    }


    var typeNum = random(1,3);

    switch (typeNum) {
        case 1:
            array[i].getCount1 = getCount;
            break;
        case 2:
            array[i].getCount2 = getCount;
            break;
        case 3:
            array[i].getCount3 = getCount;
            break;
    }

    console.log("Element: type = %d, count = %d", typeNum, array[i].count);
}

function getCount() {
    return this.count;
}

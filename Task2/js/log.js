var sum = [0, 0, 0];

for (var i = 0; i < 5; i++) {

    if (array[i].getCount1 !== undefined) {
        sum[0] += array[i].getCount1();
    }
    else if (array[i].getCount2 !== undefined) {
        sum[1] += array[i].getCount2();
    }
    else if (array[i].getCount3 !== undefined) {
        sum[2] += array[i].getCount3();
    }

}

for (i = 0; i < 3; i++) {
    console.log("count%d = %d", i + 1, sum[i]);
}
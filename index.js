console.log("Hallo? Er det noen tær ute?");

// for(var i = 0; i < 10; i++)
//     console.log(i);

//ignorer dette

for (var i = 1; i <= 100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz!");

    } else if (i % 5 == 0) {
        console.log("Buzz");

    } else if (i % 3 == 0){
        console.log("Fizz");
        
    } else {
        console.log(i);
    }


}


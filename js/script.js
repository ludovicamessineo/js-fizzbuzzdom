// Stampare nella console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    // Per i multipli di 15 stampare fizzbuzz
    if (i % 15 === 0) {
    console.log("FizzBuzz");
    // Per i multipli di 3 stampare fizz
    } else if (i % 3 === 0) {
        console.log("Fizz");
    // Per i multipli di 5 stampare buzz
    } else if (i % 5 === 0) {
       console.log("Buzz");
    // Altrimenti visualizzo numero
    } else {
        console.log(i);
    }

}

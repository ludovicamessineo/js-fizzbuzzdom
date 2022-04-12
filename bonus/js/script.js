const rowContainer = document.querySelector(".row");
console.log(rowContainer);
// Stampare nella console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    let result;

    // Per i multipli di 15 stampare fizzbuzz
    if (i % 15 === 0) {
        result = "FizzBuzz";
    // Per i multipli di 3 stampare fizz
    } else if (i % 3 === 0) {
        result ="Fizz";
    // Per i multipli di 5 stampare buzz
    } else if (i % 5 === 0) {
        result ="Buzz";
    // Altrimenti visualizzo numero
    } else {
        result = i;
    }

    rowContainer.innerHTML += `<div class="box ${result}">${result}</div>`;
}

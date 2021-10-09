// Function declaration 


let count = 5;

function humanSayHi(user) {

    let count = 10;
    count++
 console.log(count);


    console.log('Hello ' + user + ' !');
}
humanSayHi("Hella");


// Function expression

let calc = function (a, b) {
    return a + b;
}
console.log(calc('4', 2));
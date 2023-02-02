//Q1
let age = 29;
const place = "seoul";

//Q3
var deposit = 60000;
var futureDeposit = 0;

if(deposit < 50000){
    futureDeposit = deposit * 1.15 * 1.15;
} else {
    futureDeposit = deposit * 1.2 * 1.2;
}

console.log(futureDeposit)

//Q4
var firstCoffee = 360;

function refill(){
    var firstRefill = firstCoffee * 2/3;
    var secondRefill = firstRefill * 2/3;
    console.log(firstCoffee + firstRefill + secondRefill)
}

refill();
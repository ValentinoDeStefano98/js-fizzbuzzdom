let numberThree = document.getElementById("show");
let backgroundFizz = document.getElementById("numberContainer");

for ( i = 1; i<= 1000; i++){
    document.getElementById("numberContainer").innerHTML += `<div id="fizz" class="p-5 number">${i}</div>`;
    if( i % 3 == 0){
        document.getElementById("fizz").innerHTML = "fizz";
    }
    if( i % 5 == 0){
        document.getElementById("fizz").innerHTML = "buzz";
    }
    if( i % 3 == 0 && i % 5 == 0){
        console.log("numero divisibile per 3 e per 5");
    }
}
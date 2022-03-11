let container = document.getElementById("containerNumber");

for (let i = 1; i<= 1000; i++){
    if ((i % 3 == 0) && (i % 5 == 0)){
        container.innerHTML += `<div class="squareFizzBuzz number p-5">FizzBuzz</div>`;
    } else if(i % 5 == 0){
        container.innerHTML += `<div class="squareBuzz number p-5">Buzz</div>`;
    } else if(i % 3 == 0){
        container.innerHTML += `<div class="squareFizz number p-5">Fizz</div>`;
    } else {
        container.innerHTML += `<div class="number p-5">${i}</div>`;
    }
}
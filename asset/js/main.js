let container = document.getElementById("containerNumber");

for (let i = 1; i<= 1000; i++){
    if(i % 3 == 0){
        container.innerHTML += `<div>Fizz</div>`;
    } else if(i % 5 == 0){
        container.innerHTML += `<div>Buzz</div>`;
    } else if (i % 3 == 0 && i % 5 == 0){
        container.innerHTML += `<div>FizzBuzz</div>`;
    } else {
        container.innerHTML += `<div>${i}</div>`;
    }
}
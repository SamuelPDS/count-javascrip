let value = document.getElementById('counter')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')
let increase = document.getElementById('increase')

let count = 0

increase.addEventListener("click", function () {
    count++
    value.textContent = count

    if(count>0){

        value.style.color ="green";
    } else{
        value.style.color="red"
    }
})

reset.addEventListener("click", function () {
    count = 0
    value.textContent = count
})

decrease.addEventListener("click", function () {
    count--
    value.textContent = count

    if(count<0){
        value.style.color="red"
    } else {
        value.style.color="green"
    }
})



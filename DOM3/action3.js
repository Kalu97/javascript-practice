let lineli=document.querySelector("ol")
let buttonTwo=document.querySelector("button")
let ip=document.querySelector("input")

console.log(lineli)
console.log(buttonTwo)
console.log(ip)


buttonTwo.addEventListener("click",function(){
    let fruit =ip.value
    let newFruit=document.createElement("li")
    newFruit.textContent=fruit
    lineli.appendChild(newFruit)
})          
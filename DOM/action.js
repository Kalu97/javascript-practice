
let headOne = document.querySelector('h1')
console.log(headOne)
headOne.addEventListener('click',()=>{
     headOne.style.color = "purple" 
 })

let r=document.querySelector("h1")
console.log(r)
let y = document.querySelector("#one")
console.log(y)


let z=document.querySelector(".two")
console.log(z)

let gg = document.querySelector('h1[name="nm"]')
console.log(gg)


let buttonOne=document.querySelector("button")
console.log(buttonOne)
let inputText=document.querySelector("input")
console.log(inputText)
// buttonOne.addEventListener('click',function(){
//     let colorc= inputText.value
//     headOne.style.color=colorc
// })
buttonOne.addEventListener('mouseover',function(){
    let colorc=inputText.value
    headOne.style.color=colorc
})
 

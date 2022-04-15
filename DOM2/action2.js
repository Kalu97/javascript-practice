let lineOne = document.querySelectorAll("li")
console.log(lineOne)
let buttonj=document.querySelector("button")
console.log(buttonj)

buttonj.addEventListener('click',()=>{
    for(let i=0;i<=lineOne.length;i++){
        if(i%2==0){
            lineOne[i].style.color="Yellow"
        }
        else{
            lineOne[i].style.color="blue"
        }
    }
})


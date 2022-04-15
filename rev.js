// //Function declaration

// function addition(x,y){
//     return x+y

// }
// let u=addition(12,13)
// console.log(u)


// //function expression

// let subtraaction=function (x,y){ 
//     return x-y
// }
// let b=subtraaction(13,2)
// console.log(b)


// //Arrorw funtion

// let mult=(x,y)=>{
//     return x*y
// }
// let a=mult(12,56)
// console.log(a)

// //String as parameter

// function Greet(greet,Name){
//     console.log(greet+Name)   
// }
// Greet("good Morning!","Kalu")

// function drive(above18){
//     if(above18)
//     {
//         console.log("you are Eligible")
//     }
//     else{
//         console.log("you are not Eligible")
//     }
// }
// drive(false)


// let names=["Kalu","Vishal","Mayur","Anushka","Rohan","Prachi"]

// function greetnames(arr){
//     arr.forEach(element => {  
//         console.log("Welecome"+" "+element+" "+"Have a nice Day!")
//     });
// }greetnames(names)


let PersonOne={
    fullName:"Kalu Mane",
    age:24,
    rollNo:56
}


function printog(obj){
    for(let key in obj)
    console.log(key,obj[key])
 
}
printog(PersonOne)




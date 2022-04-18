//how to empty array 

// let a=[10,2,25,20,23,25,24]
// let b=a.splice(0,a.length)
// console.log(a)


//How would you check if a number is an integer?

// function integer(x){
//     if(x%1===0){
//         console.log('it is an integer')
//     }
//     else{
//         console.log('it is not an integer')
//     }
// }
// integer(3.6)

//Write a function that would allow you to do this?

// function createBase(n){
//     return function(y){
//     return n+y
// }
// }
// var addSix = createBase(6);
// console.log(a=addSix(10))
// console.log(b=addSix(10))

//Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function palindrom(){
    let strng="madam"
    revstrng=strng.split('').reverse().join('')
    if(strng==revstrng){
       return true
    }else{
        return false
    }   
}
console.log(a=palindrom())


//find square root of number
let num=10
let result=Math.sqrt(num)
console.log('the square root of '+num+' is '+result)

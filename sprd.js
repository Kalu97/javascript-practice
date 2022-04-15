
// let numbers = [12, 13, 56, 26, 25]

// function add(a, b, c) {
//     console.log(a + b + c)

// }
// add(...numbers)


// function addtion2(...a) {

//     console.log(a)
//     let sum=a.reduce(function (acc, el) {
//         return acc + el
//     },0)
//     return sum
// }
// let sum=addtion2(12,25,23,26,25,24,52,65)
// console.log(sum)

// //let num=[15,25,58,12,5,6,7,89,56,58]
// function above(a,...arr){
//     let krm=arr.filter(function(el){
//         return el > a
//     })
//     return krm
// }

// let rrr= above(15,25,58,12,5,6,7,89,56,58)
// console.log(rrr)

let ages1=[25,26,58,29,56,54,78,52,53,6,5,10]
  function add3(a,b,c){
    console.log(a+b+c)
  }

  add3(ages1[0],ages1[1],ages1[2])
  function add3(a,b,c){
      console.log(a+b+c)
  }
add3(...ages1)


function priArr(arr,an){
let newarr=[]
for(let i=0;i<arr.length;i++){
newarr.push(an(arr[i]))
}
return newarr
}

let above18=function(el){
    return el>18
}
let addtwo=function(el){
    return el+2
}
let mulby3=function(el){
    return el*3
}

// let dg=priArr(ages1,above18)
// let sp=priArr(ages1,addtwo)
// let dp=priArr(ages1,mulby3)

console.log(priArr(ages1,above18))
console.log(priArr(ages1,addtwo))
console.log(priArr(ages1,mulby3))
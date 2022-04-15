// function add1(){
//     let x=10
//     let y=20
//     console.log(x+y)

//     function add2(){
//         let c=4
//         let b=7
//         console.log(c+b)

//         function add4(){
//             let u=25
//             let v=9
//             console.log(u+v)
//         }
//         add4()
//     }
//     add2()
// }
// add1()

function add9(x,y){
    
   return function adf(){
       console.log(x+y)
       return x+y
   }
   
}
let rr=add9(12,13)

console.log(rr)  
let x=10
// let y=13
 console.log(rr)
let jj=rr()
 console.log(jj)

// function add2 (arr){
//     for(let i = 0;i<=5;i++){
//         console.log(arr[i])
//     }
// }
// add2([2,5,3,6,9])


// for (let i=0;i<=10;i++){
//     function add(){
//         console.log("hello")
//     }
//     add()
// }



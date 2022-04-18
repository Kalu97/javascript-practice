
// function add(x, y) {
//     console.log(x + y)
// }
// function add2(x, y) {
//     console.log(x + y)
// }
// add2(11, 22)
// add(12, 15)


// //Asychronous

// function subtraction(x, y) {
//     setTimeout(function (x, y) {
//         console.log(x - y)
//     }, 2000, x, y)
// }


// function multiplicaton(x, y) {

//     console.log(x * y)

// }

// subtraction(12, 11)
// multiplicaton(4, 3)


// //call-back-hell

// function subt(x, y) {
//     setTimeout(function (x, y) {
//         console.log(x - y)
//         setTimeout(function (x, y) {
//             console.log(x + y)
//             setTimeout(function (x, y) {
//                 console.log(x * y)
//             }, 2000,x,y)


//         }, 4000,x,y)

//     },3000,x,y)
// }
// subt(12,4)


// let prom=new Promise(function(resolve,reject){
//     let x=10
//     let y=9


//     if(x==y){
//         console.log("hello there your in ")
//     }
//     else{
//         console.log("sorry you are out")
//     }
// })
// prom.then(function(msg){ 
//     console.log(msg)
// },function(msg){
//     console.log(msg)
// })


let promone = new Promise(function (resolve, reject) {

    if (15 == 15) {
        resolve("hello there welcome")
    }
    else {
        reject ("good night")
    }
})

promone.then(function (msg) {
    console.log(msg)
    return msg[4]
}).then(function (msg) {
    console.log(msg)
    return 5

}).then(function (msg) {
    console.log(msg)

}).catch(function (msg) {
        console.log(msg)
    })








 
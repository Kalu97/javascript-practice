let sentence = "Wherever there is a light there is always shadows to be found"
console.log(typeof sentence)
let arr = sentence.split(" ")
console.log(arr)

let bigword = arr.reduce(function (acc, el) {
    if (acc.length > el.length) {
        return acc
    }
    else {
        return el
    }
})
console.log(bigword)

function add(x, y) {
    return true
}

let a = add(12, 15)
console.log(a)

let detail = {
    name: 'Kalu Mane',
    age: 25,
    rolln: 22
}

for (let key in detail) {
    console.log(key, detail[key])
}

function printobj(objt) {
    console.log(objt)
    for (let key in objt) {
        console.log(key, objt[key])
    }
}
printobj(detail)

let ary=[22,23,26,25,56,65]
function printaray(a){
    a[1]=100
    console.log(a)
}
console.log(ary)
printaray(ary)
console.log(ary)


let update={
    fname:"Vishal Mane",
    age:21
}

function prntobj(objj){
    console.log(objj)
    objj.fname='Rohan Mane'
}
console.log(update)
prntobj(update)
console.log(update)


//palindrome logic problem

let stringg='madam'

for (let i=0;i<stringg.length;i++){
   
    if(stringg[i]!==stringg[[i]-1-i]){
        console.log('it s not palindrome')
    }
    else{
        console.log('it is palindrome')
    }
}
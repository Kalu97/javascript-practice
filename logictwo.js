//largest names

let names=['kalu','rohan','vishal','mayur','pooja']
let large=names.reduce(function(acc,el){
    if(el.length>acc.length){
        return el
    }
    else{
        return acc
    }
},'')
console.log(large)


//longest Number

let num=[122,25,26,355,2555,26,6666,96580]
let aa=num.reduce(function(acc,el){
    if(el>acc){
        return el
    }
    else{
        return acc
    }
})
console.log(aa)

//smalest number

let bb=num.reduce(function(acc,el){
    if(el<acc){
        return el
    }
    else{
        return acc
    }
})
console.log(bb)

function add(x,y){
    console.log(x+y)
}
add(30,50)


function add1(x=10,y=20){
    console.log(x+y)
}

add1()

function addition(x, y) {
    console.log(x + y) 
    return x + y
}
addition(2,5)

let state=['Maharashtra']
function greet(word){

    console.log('welcome' +" "+ word)
}
greet(state)    

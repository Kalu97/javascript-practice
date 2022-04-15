let sent="I am kalu mane and i can code easily now mane mAne MaNeMane  "
let reg=/mane/gi
let a= reg.exec(sent)
let b= reg.exec(sent)
let c= reg.exec(sent)
let d= reg.exec(sent)
let e= reg.exec(sent)
let f= reg.exec(sent)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)


let result=reg.exec(sent)
while(result){

    console.log(result)
    result=reg.exec(sent)   
    
}

//test()is for regression

let regs=/vishal/gi

let ab = regs.test(sent)
console.log(ab)

//search match replace methods for string

let quote="Life begins at the end of your comfart zone. LIFE is unpredictable"
let regress=/life/gi

let r=quote.search(regress)
console.log(r)

// match

let k=quote.match(regress)
console.log(k)

//replace

let l=quote.replace(regress,"zone")
console.log(l)






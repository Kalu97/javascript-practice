let sentence="I can code in javascript now javascript is easy language"
let reg=/Java/gi

let d=reg.exec(sentence)
console.log(d)

let r=reg.exec(sentence)
console.log(r)

let f=reg.exec(sentence)
console.log(f)


//test()

if(reg.test(sentence)){
    console.log('pass')
}
else{
    console.log('fail')
}

//string methods()

let regn=/javascriPt/gi

let rr=sentence.search(regn)
console.log(rr)

let rrr=sentence.match(regn)
console.log(rrr)

let rrrr=sentence.replace(regn,"java")
console.log(rrrr)

//metacharaters

let para='love fruits. fruits are healthy for our body'

let regnone=/^LoVe/gi   //match thebegining input

if(regnone.test(para)){
    console.log('pass')

}

else{
    console.log('fail')
}


let regntwo=/dy$/gi    //,atch the end of the input

if(regntwo.test(para)){
    console.log('pass')

}

else{
    console.log('fail')
}

let paraone='cat rat fat'
let regnthree=/.fat/gi

if(regnthree.test(paraone)){
    console.log('pass')

}

else{
    console.log('fail')
}

let regnfour=/at*/gi

if(regnfour.test(paraone)){
    console.log('pass')

}

else{
    console.log('fail')
}


let frut = "banzzzana"
let regnfive = /baz?n?a/

if(regnfive.test(frut)){
    console.log('pass')
}
else {
    console.log('fail')
}


let z='four'
let regnsix=/f[t][u]r/
console.log(regnsix.test(z))

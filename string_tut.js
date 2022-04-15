// let city = 'mumbai'

// for (let i = 0; i < city.length; i++) {
//     console.log(city[i])
// }


// //methods


// let a = city.toLowerCase()
// console.log(a)

// let b = city.toUpperCase()
// console.log(b)

// //chaining

// let dd = city.toLowerCase().toUpperCase().length
// console.log(dd)

// //include

// let bike = 'Bajaj'
// let y = bike.includes('B')
// console.log(y)

// //indexof()

// let car = "Tata"
// let z = car.indexOf("a")
// console.log(z)

// let quotes = "intellectuals solve problems geniuses prevent them"
// let userinp = "was"
// if (quotes.includes(userinp)) {
//     console.log('word is available')

// }
// else {
//     console.log("word is missing")
// }

// //trim()

// let country=" india"
// let c=country.trimStart()
// console.log(c)

// let country2="india    "
// let d=country2.trimEnd()
// console.log(d)

// let country3="   india    "
// let e=country2.trim()
// console.log(d)


// let tb="In dia"
// let bt=""
// for(let i=0;i<tb.length;i++){
//     if(tb[i]!==" "){
//     bt=bt+tb[i]
//     }
// }

// console.log(bt)

// //reverse string
// let reversetb=""
// for(let i=0;i<tb.length;i++){
//     if(tb[i]!==" "){
//     reversetb=tb[i]+reversetb
//     }
// }
// console.log(reversetb)

// let language="cpp javascript python ruby c#"
// let ll=language.split('y')
// console.log(ll)

// let kkk=ll.join("y")
// console.log(kkk)


// let quotes2 = "intellectuals solve problems geniuses prevent them".toLowerCase()
// let count=0
// for(let i=0;i<quotes2.length;i++){
//     if(quotes2[i]=="a"||quotes2[i]=="e"||quotes2[i]=="i"||quotes2[i]=="o"||quotes2[i]=="u"){
//         count=count+1
//     }
// }
// console.log(count)



let strng2 = "vishalrajumane"
let store = {}

for (let i = 0; i < strng2.length; i++) {

    if (strng2[i] == "a" || strng2[i] == "e" || strng2[i] == "i" || strng2[i] == "o" || strng2[i] == "u") {

        if (store[strng2[i]]) {

            store[strng2[i]] = Number(store[strng2[i]]) + 1
        }
        else {
            store[strng2[i]] = 1
        }
    }
}
console.log(store)

let vowelssort = 'aaeetyuuiionb'
let kkkk = vowelssort.split("").filter(function (el) {
    return el == 'a' || el == 'e' || el == 'i' || el == "o" || el == "u"
})
console.log(kkkk)

let numword = "5d6y3r9k"
let calcu = ""

for (let i = 0; i < numword.length; i++) {
    if (Number(numword[i])) {
        
        for (let j = 0; j < Number(numword[i]); j++) {
    
            calcu += numword[i+ 1]
        }
    }
}
console.log(calcu)

//using repeat

let numword2 = '2d2y2r2k'
let output=""
for (let i=0;i<numword2.length;i++){
    if(Number(numword2[i])){

        
        output=output+numword[i+1].repeat(Number(numword2[i]))
    }
}
console.log(output)


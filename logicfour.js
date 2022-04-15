// // let a="vishal"
// // let b=a.slice(0,4)//(start point,end point)
// // console.log(b)
// // let c= a.substr(0,4)//(start Point, length)
// // console.log(c)

// // let fullname = "Kalu"
// // fullname[0] = "v"
// // console.log(fullname)
// // fullname = "Vishal"
// // console.log(fullname)

// // //string is immutable

// // let t = fullname.charAt(3)
// // console.log(t)
// // let charcode = fullname.charCodeAt(2)
// // console.log(charcode)

// let words = 'I can Code Easily Now'
// count = 0
// // for (let i = 0; i < words.length; i++) {
// //     if (words[i] >= 'A' && words[i] <= 'Z') {
// //         count = count + 1
// //     }

// // }

// //console.log(count) 

// //logic 2

// for (let i = 0; i < words.length; i++) {
//     if (words.charCodeAt(i) >= 65 && words.charCodeAt(i) <= 90) {
//         count += 1
//     }
// }
// console.log(count)


// let concate1 = "hello there"
// let cancate2 = "to learn javascript"

// console.log("good morning! " + concate1 + " Iam here " + cancate2)
// console.log('good morning!  ${conate1} Iam here  ${cancate2}')

// console.log(`${9 + 9}`)


let sentence = 'my name is Kalu born in pune and pune is my favourite city'
// let y = sentence.replace('Code', "learn")
// console.log(y)

function replaceAll(sent,word,replval){
    let arr=sent.split(' ')
    console.log(arr)
    
    console.log(arr[0])
    let tt=arr.map(function(el){
        if(el==word){
            
            return el=replval
        }
        else{
            return el
        }
    })    
    console.log(tt.join(' '))
}
replaceAll(sentence,'pune',"banglore")
         012345  
let hhh="i am mayur "
console.log(hhh[9])
tt=hhh.search("myur")
console.log(tt)

let hay = "I am new to javascript"
let fay  = hay.substring(1,5)
console.log(fay)


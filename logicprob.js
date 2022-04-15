// let total = [11, 22, 33, 44, 55, 55, 66, 77, 88, 99, 99, 12, 99, 11, 88, 88]
// let count = 0
// for (let i = 0; i < total.length; i++) {
//     if (total[i] === 88) {
//         count = count + 1
//     }

// }
// console.log(count)

// let letter = ['f', 'o', 'o', 'd']
// let result = {}
// for (let i = 0; i < letter.length; i++) {
//     if (result[letter[i]]) {
//         result[letter[i]] = result[letter[i]] + 1
//     }
//     else {
//         result[letter[i]] = 1
//     }
// }
// console.log(result)


// let numbers = {
//     a: 5,
//     b: 9,
//     c: 0,
//     d: 12

// }
// for (let key in numbers) {
//     numbers[key] = numbers[key] * numbers[key]
// }
// console.log(numbers)

// let a = [22, 33, 44, 11, 22, 17, 88, 99, 11]
// let evencount = 0
// let oddcount = 0

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         evencount++
//     }
//     else {
//         oddcount++
//     }
// }
// console.log(evencount)
// console.log(oddcount)

// let r = ['red', 'red', 'green', 'red', 'blue', 'blue', 'red', 'red', 'red']
// let result2 = {}

// for (let i = 0; i < r.length; i++) {
//     if (result2[r[i]]) {
//         result2[r[i]] = result2[r[i]] + 1
//     }
//     else {
//         result2[r[i]] = 1
//     }
// }

// console.log(result2)

// for (let key in result2) {
//     result2[key] = Math.floor(result2[key] / 2)
// }

// console.log(result2)




// let fullname = 'vishal mane'
// rev = ""

// for (let i = 0; i < fullname.length; i++) {
//     rev = fullname[i] + rev
// }
// console.log(rev)

// let j = ['kalu', 'mayur', 'rohan', 'anushka', 'praful', 'kalu', 'kalu']

// let tt = j.map(function (el, index) {
//     if (el === 'kalu') {
//         return index
//     }
// })
// console.log(tt)

// for (let i = 0; i < j.length; i++) {
//     if (j[i] === 'kalu') {
//         console.log(i)
//     }

// }

// let k = j.forEach(function (el, index) {
//     if (el === 'kalu') {
//         console.log(index)
//     }
// })

// let names = ['vishal', 'kalu', 'mayur', 'ayush', 'rohan', 'pooja', 'purva']


// for (let i = 0; i < names.length; i++) {
//     if (names[i].length == 5) {
//         console.log(names[i])
//     }
// }
// let factorial = 4
// let fact = 1
// for (let i = 1; i <= factorial; i++) {
//     fact = fact * i

// }
// console.log('factorail of', factorial, 'is', fact)



let elements=[2,3,4]
let fact=1
for(let i=0;i<elements.length;i++){
    fact=1
    for(let j=1;j<=elements[i];j++){
    fact=fact*j
    }
    console.log("factorial of",elements[i],"is",fact)
}

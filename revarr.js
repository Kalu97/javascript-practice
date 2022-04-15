// every
let sum = [11,22,33,44,11,22,33,12]

let qwerty = sum.every(function(el,index,arr){
    return el > 10
})
console.log(qwerty)

// some 
let qwerty2 = sum.some(function(el,index,arr){
    return el > 10000
})
console.log(qwerty2)

// find()

let newArr = [44,55,66,22,33,44]

let ray = newArr.filter(el=> el > 30)
console.log(ray)

let ray2 = newArr.find(function(el){
    return el > 30
})
console.log(ray2)

let ray3 = newArr.findIndex(function(el){
    return el > 30
})
console.log(ray3)




// reverse()
let city = ["pune","nagpur","mumbai",'pa']
city.reverse()
console.log(city)

// sort()
let city2 = city.sort()
console.log(city2)

//splice()

let fruits = ['tomato','apple','mango','papaya','cherry']
             
//fruits.splice(index,noOfelementtoDeleted,rel,rel,rel)
// let gui = fruits.splice(1,3)
// console.log(gui)
// console.log(fruits)
// fruits.splice(2,2,"dragonFruit","pineapple")
// console.log(fruits)

let aaaa = fruits.splice(-3)
console.log('-----------')
console.log(aaaa)
console.log(fruits)

// concat

let hat = [22,33,44]
let bat = [55,66,77]
let qat = hat.concat(bat)
let qat2 = bat.concat(hat)
// console.log(qat)
// console.log([...hat,...bat])


// join()

let info = ['kalu','Vishal','mayur']
let wer = info.join('@')
console.log(wer)

// flat()


let arr = [[11,22,33],[55,66,77],[88,67,77]]
console.log(arr[2][2])
let iii = arr.flat()
console.log(iii)

// fill()

let marks = [50,60,77,88,99,100,110]

marks.fill('a',1,4)
console.log(marks)  
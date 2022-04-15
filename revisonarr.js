let fruits=['apple','banana','grapes']

let a=fruits.push('chickoo')
console.log(a)
console.log(fruits)

let b=fruits.unshift('fig')
console.log(b)
console.log(fruits)

let c=fruits.pop()
console.log(c)

let d=fruits.shift()
console.log(d)

let aa=fruits.indexOf('banana')
console.log(aa)

let bb=fruits.includes('apple')
console.log(bb)

let arrone=fruits.slice(1)
console.log(arrone)

let arrtwo=fruits.slice(0,2)
console.log(arrtwo)

let arrthree=fruits.slice(0,3)
console.log(arrthree)


console.log('--------------------------------------------------')

let birthage=[2000,1997,1998,1969]
let calAge=[]

//map method


let e=birthage.map(function(el,arr,){
    return 2022-el
})
console.log(e)

//filter method

let marks=[55,25,23,60,71,82]

let ee=marks.filter(function(el,arr,index){
    return el>35
})
console.log(ee)


//reduce method


let ccc=marks.reduce(function(acc,el,arr,index){
    return acc+el
},0)
console.log(ccc)

//forEach method


names=['kalu','vishal','mayur','praful']

names.forEach(function(el,index,arr){
    console.log('Hello!'+" "+ el)
})

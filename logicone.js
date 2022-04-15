let arr = [2,11,22,35,66,66,25,25,23,24]
let arr2=[]

let h=arr.filter(function(el,index){
    return arr.indexOf(el)==index
})
console.log(h)

let aar=[12,25,-1,-65,25,-6,58,-98]
let a=aar.filter(function(el,index,arr){
    return el>0
})
console.log(a)

let x=[11,22,-33,55,66,77,-44,66,-22]

let j=x.filter(function(el,index){
    return el>0
}).reduce(function(acc,el,index){
    return acc+el
},0)

console.log(j)

let k=x.filter(function(el,index){
    return el<0
}).reduce(function(acc,el,index){
    return acc+el
},0)

console.log(k)
// let birthyear = [2000,1997,2003,2004]
// let age=[]
// console.log(birthyear[0])
// for(let i=0; i<birthyear.length; i++){
//   let ag=2021-birthyear[i]
//   age.push[ag]
// }
// console.log(age)
// let num2=[1,2,5,6,9]

// let yy=num2.map(function(el,index,arr){
//     return el + 2
// })
// console.log(yy)

// let numb=[10,20,30,40,50,500,200,100]
// let nn=[]
// for(let i=0; i<numb.length;i++){
//     if(numb[i]>50){
//         nn.push(numb[i])
//     }
// }
// console.log(nn)

// let bb=numb.filter(function(el,index,arr){
//     return el>50
// })
// console.log(bb)
let num=[11,22,33]
let sum=0
// for(let i=0;i<num.length;i++){
//     sum=sum+num[i]
// }
// console.log(sum)
let cc=num.reduce(function(acc,el,index,arr){
    return acc+el

},5)
console.log(cc)
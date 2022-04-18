let vishal = {
    fullname: 'vishal mane',
    age: 25,
    rollno: 14
}

let People = function (fn, ag, rn) {
    this.fullname = fn
    this.age = ag
    this.rollno = rn
    this.display = function () {
        console.log(this.fullname)
    }
}

console.log(new People())
let Kalu = new People('Kalu Mane', 25, 48)
let Rohan = new People('rohan Mane', 18, 28)

console.log(Kalu)
console.log(Rohan)
Kalu.display()
Rohan.display()

console.log(Kalu instanceof People)
console.log(People.prototype === Rohan.__proto__)


People.prototype.language='hindi'
console.log(Kalu.language)
console.log(Rohan.language)


//Array prototype

let fruits=['apple','banana','grapes','apple','banana']
console.log(fruits)
console.log(fruits instanceof Array)

console.log(fruits.__proto__===Array.prototype)

Array.prototype.duplicate=function(arr){
    return Array.from(new Set(arr))
}
console.log(fruits.duplicate(fruits))


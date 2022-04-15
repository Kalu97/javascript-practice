let Vishal={
    firstName:'Vishal',
    age:25,
    rollNo:65
}
let rohan={
    firstName:'Rohan',
    age:18,
   rollNo:15
}

//retrive

console.log(Vishal.firstName)
console.log(rohan['age'])

//update

Vishal.firstName='Kalu'
rohan["age"]=26

//add

Vishal.skills=["javascript",'cypress']
rohan['skills']=["javascript",'cypress']
console.log(Vishal)
console.log(rohan)

//delete

delete Vishal.age
delete rohan['age']

class Person{
    firstName=undefined
    age=undefined
   rollNo=undefined
}

let mayur=new Person()
console.log(mayur)

mayur.firstName = "amol rao"
mayur.age = 34
mayur.skills = ["javscript", "cpp"]
mayur.age=24
mayur.language = "marathi"
mayur.rollNo=14
console.log(mayur)


//using Constructor

class People{

    constructor(fn,ag,rn){
        this.firstName=fn
        this.age=ag
        this.rollNo=rn
    }
}

let anushka=new People("Anushka",21,56)
anushka.skills=["CAD","excel"]
console.log(anushka)


//setting value outside class

class Human {
    setAge(ag) {
        this.age = ag
    }

    setRollNumber(rNo) {
        this.rollNo = rNo
    }

    setfirstname(fn){
        this.firstname = fn
    }

}

let satish=new Human()
console.log(satish)

satish.setfirstname="Satish"
satish.setAge=52
satish.setRollNumber=25

let manoj=new Human()
manoj.setfirstname="Satish"
manoj.setAge=52
manoj.setRollNumber=25

console.log(satish)
console.log(manoj)
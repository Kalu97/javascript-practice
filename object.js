// let Person = {
// Firstname:   "Kalu",
// Lastname: "Mane",
// roll: 42,
// Age: 24
// } 
// //Retrive
// console.log(Person)
// console.log(Person.roll)
// console.log(Person["Age"])
// //update
// Person.roll=52
// Person.empid=12
// Person['Salary'] = 50000
// console.log(Person)

// //Delete

// delete Person.Salary
// delete Person['empid']

// console.log(Person)

// for (let key in Person){
//     console.log(key,Person[key])
// }  

// let Vishal = {
//     Fullname: "Vishal Mane",
//     Roll_no : 52,
//      skills : ["Python","Js","java"]

// }
// let Kajol = {
    
//     fullName:"Kajol Verma",
//     rollNo:23,
//     skills:["python","js","jquery"]

// }

// //Update

// Vishal.Fullname="Vishal Raju Mane"
// Roll_no = 45

// //add

// Vishal.address="Pune"
// Kajol.address="Nagpur"

// //retrive

// console.log(Vishal.Fullname)
// console.log(Kajol.address)

// console.log(Vishal)
// console.log(Kajol)


// class Person{
//     fullname=undefined
//     rollno = undefined
//     age= undefined
// }

// let Kalu = new Person()
// console.log(Kalu)
// Kalu.fullname="Kalu Raju Mane"
// Kalu.rollno=49
// Kalu.age=24
// console.log(Kalu.fullname)
// console.log(Person)
// console.log(Kalu)

// class Person2{
//     constructor(fn,rn,ag){
//         this.Fullname=fn
//         this.rollNo=rn
//         this.age=ag
//     }
// }
// let Vishal=new Person2("Vishal Raju Mane",52,24)
// let Rohan=new Person2("Rohan Raju Mane",45,18)
// Rohan.language="marathi"
// Vishal.language="English"
// console.log(Vishal)
// console.log(Rohan)


// class Person3{
//     fullname=undefined
//     rollno=undefined
//     skills=undefined
// }
// let kalu=new Person3()
// console.log(kalu)
// kalu.fullname="Kalu Raju Mane"
// kalu.rollno=26
// kalu.skills=['javascript','python','java']
// console.log(kalu)
// kalu.language="English"
// console.log(kalu)

// for(let key in kalu){
//     console.log(key,kalu[key])
// }

// class Person{
//     constructor(fn,rn,ag){
//     this.age = ag
//     this.rollno=rn
//     this.fullname=fn
//   }
// }

// let Vishal=new Person("Vishal Mane",69,24)
// console.log(Vishal)

// let student=[
//     new Person("Mayur Kadam",89,23),
//     new Person("Manoj Lad",09,27),
//     new Person("Priya deshmukh",56,23),
//     new Person("Prachi Jadhav",12,24),
//     new Person("kunal Bhosale",68,20)

// console.log(student.length)
// student.forEach(function(el){
//     for(let key in el){
//         console.log(key,el[key])
//     }
// })


//  let nn=student.find(function(el){

//      return el.fullname="Manoj Lad"
//  })
// console.log(nn)

// let rrr=student.reduce(function(acc,el){
//       return acc + el.rollno
// },0)
// console.log(rrr)

// class Person{
//     constructor(fn,rn,ag){
//     this.age = ag
//     this.rollno = rn
//     this.fullname=fn
//   }

// SetAge(ag){
//     this.age=ag
// }
// setRoll(roll){
//     this.rollno=rn
// }
// setFullname(){
//     this.fullname
// }
// }
// let Kalu = new Person("Kalu Raju Mane",23,24)
// console.log(Kalu)
// Kalu.SetAge(26)
// console.log(Kalu)


// class Bank{
//     constructor(accName,accNo,bal){
//         this.accName = accName
//         this.accNo = accNo
//         this.bal = bal
//         this.trasanctions = [bal]
// }
//  deposite(amount){
//      this.trasanctions.push(amount)
//      this.bal=this.bal+this.amount
//      return this.bal
//  }
//  withdraw(amount){
//      if(this.bal>amount){
//      this.bal=this.bal-this.amount
//      this.trasanctions.push(-amount)
//      return this.bal
//  }
//  else{
//      console.log("insufficient Balance")
//  }
// }
// lastfivetrans(){
//     let sum = this.trasanctions.slice(-5).reduce(function(acc,el){
//         return acc + Math.abs(el)
//     },0)

//     return sum
// }
// }
// let abb = new Bank("Kalu",12,2500)
// console.log(abb)

// abb.deposite(5000)
// abb.withdraw(2000)

// console.log(abb.trasanctions)
// let ray = abb.lastfivetrans()
// console.log(ray)


// function addition(x,y){
//     return x+y

// }
// let u=addition(12,13)
// console.log(u)
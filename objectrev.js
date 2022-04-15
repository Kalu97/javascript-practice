let person={
    firstname:'Kalu',
    lastname: 'Mane',
    rollnumber: 15,
    age:25
}

//retrive
console.log(person.firstname)
console.log(person.age)

//update

person.age=24
person["firstname"]="Vishal"

console.log(person)

//add

person.empid=156
person['salary']=85000

console.log(person)

//delete

delete person.age
delete person['rollnumber']

console.log(person)


for(let key in person){
    console.log(key,person[key])
}

let students = {

    fullName:'Kalu Raju Mane',
    rollNumber:30,
    skills:["java","javscript","sql"],
    parent:{

        father:"Raju ",
        mother:"Savita"
    }

}
students.skills.push("Cypress")
console.log(students)

// prgogram 2 
let studentss = [

    {
        fullName:"Kalu Mane",
        age:25
    },
    {
        fullName:"mayur Kadam",
        age:24
    },

    {

        fullName:"Rohan Mane",
        age:18

    }


]

for (let i=0;i < studentss.length;i++){
    let obj=studentss.length[i]
    for(let key in obj){
        console.log(key,obj[key])
    }
}
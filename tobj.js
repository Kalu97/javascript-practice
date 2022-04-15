let person  = {

    fullName:"Vishal Mane",
    rollNo:23,
    age:34,
    display:function(){
        console.log(this)
        console.log(this.fullName) 

        function display2(){
        console.log(this.fullName)
        }

        display2()
    }
        
}

person.display()


let person2={
    fullnames:"Kalu Mane",
    roll2:26,
    age2:24,

    display4:function(){
        console.log(this.age2)

        let dispaly3=()=>{
            console.log(this.age2)
        }
        dispaly3()
    }

}
person2.display4()


let people={
    name:"Rohan Mane",
    age:26,
    display5:()=>{
            console.log(this.name)
            let dispkay6=()=>{
                console.log(this.name)
            }

            dispkay6()
    }
    
}

people.display5()

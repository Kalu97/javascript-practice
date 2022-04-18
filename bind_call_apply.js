let detail={
    names:'vishal Mane',
    age:25,
    roll_no:55,
    display:function(){
        console.log(this.age)

    }
}
detail.display()

let Detail2={
    names:'kalu Mane',
    age:25
}
Detail2.display=function(){
    console.log(this.names)
}
Detail2.display()

//-------------------------------------------------------------

let vishal={
    fname:'Vishal Mane',
    age:25
}

let rohan={
    fname:"rohan Mane",
    age:19
}

let display3=function(){
    console.log(this.age)
}

let a=display3.bind(rohan)
a()
display3.bind(rohan)()

let vishal2={
    fname:'Vishal Mane',
    age:25
}

let rohan3={
    fname:"rohan Mane",
    age:19
}
let Kalu={
    fname:'kalu Mane',
    age:25
}
let display4=function(){
    console.log(this.fname,this.age)
}

display4.call(rohan)
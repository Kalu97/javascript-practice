let employee = [
    {
        fullName: "kalu mane"
    }
    ,
    {
        fullName: "rohan mane"

    },

    {
        fullName: "pooj jadhav"

    },
    {
        fullName: "rohit mohite"

    },
    {
        fullName: "komal more"

    },

    {
        fullName: "kunal mohan"

    }
]

employee.forEach(function (el) {
    let us = el.fullName.split(" ").reduce(function (acc, el) {
        return acc + el[0]
    }, "")

    us = isUnique(us)
    el.username = us
})

console.log(employee)
function isUnique(username){
    for(let i=0;i<employee.length;i++){
        if(employee[i].username){
            if (employee[i]['username']===username){
                let updated=username+username
                return isUnique(updated)
            }
        }
        else{
            return username
        }
    }
}


//rest 


function sumation(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc+el
    },0)

}
let b=sumation(11,22,56,52,68,98,52,222,26,54,23,663,35,12,5)
console.log(b)


function above20(a,...arr){
    return arr.filter(function(el){
        return el>a
    })
}

let bb=above20(20,25,26,23,22,20,14,02,05,25,36,39,1,5,6,9,8,9)
console.log(bb)

//spread



let amount=[100,250,300,160,155,256,652,100,100,100,100,100]

function lastamount(a,b,c,d,e){


   
   console.log(a+b+c+d+e)

}
lastamount(...amount)  

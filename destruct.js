let arr = [12, 13, 15, 16]
let [a, b, c] = arr

console.log(a)
console.log(b)
console.log(c)



let group = [['Kalu', 'raju', 'mane'], ['mayur', 'deepak', 'kadam'], ['pooja', 'santosh', 'jadhav']]
let aaa = group.flat()
console.log(aaa)

//without using flat method


let bbb = group.reduce(function (acc, el) {
    return acc.concat(el)
}, [])
console.log(bbb)


let [d, e, f] = group
let [[d1, d2, d3], [e1, e2, e3], [f1, f2, f3]] = group
console.log(d)
console.log(e)
console.log(f)
console.log(d2)
console.log(f1)

//ObJECT


let student={
    fname:'kalu',
    lname:'Mane',
    rollno:26,
    age:25

}

let {fname:fn,lname:ln,rollno:rn,age:ag}=student

console.log(fn)
console.log(rn)
console.log(ag)
console.log(ln)

let person = {

    fullName:"Kalu Mane",
    age:24,
    skills:["javascript","Cypress"]


}

let{fullName:fna,age:agg,skills:[ii,hh]}=person

console.log(ii)
console.log(hh)


let data = {
    Name:"Vishal",
    skills:["js","css"],
    parent:{
        father:"raju",
        mother:"savita"
    }

}


let{Name:n,skills:[gg,hhh],parent:{father:ff,mother:mm}}=data

console.log(ff)
console.log(mm)




let details = [


    {   
        rollNo:12,
        msg:"hello"

    },
    {
        rollNo:14,
        msg:"hell2"


    },
    {
        rollNo:15,
        msg:"hell0"

    }

]

let[{rollNo:rr,msg:mmm},{rollNo:rr1,msg:mmm1},{rollNo:rr2,msg:mmm2}]=details

console.log(mmm)
console.log(mmm2)




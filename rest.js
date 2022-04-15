let names=["Kalu","Vishal","Mayur","Rohan"]
let [a,b,c,d]=names
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let person={
    fullname:"vishal Mane",
    id:12,
    book:"physics"
}

let {fullname:fn,id:id,book:bk}=person
console.log(fn)
console.log(id)
console.log(bk)

let person1={
    fullname:"vishal Mane",
    id:12,
    book:"physics",
    skills:["js","python","java"]
}
let{fullname:fname,id:idd,book:bkk,skills:[aa,bb,cc]}=person1
console.log(fname)
console.log(idd)
console.log(bkk)
console.log(aa)
console.log(bb)
console.log(cc)


let students = {

    fullName:"chinmay deshpande",
    age:34,
    rollNumber:14,
    skills:["python","javascript"],
    parents:{

        father:"shirish",
        mother:"kanchan"

    }


}



let {fullname:fnames,age:aggg,rollNumber:rn,skills:[aaa,bbb],parents:{father:f,mother:m}}=students

console.log(fnames)
console.log(aggg)
console.log(aaa)
console.log(bbb)
console.log(f)
console.log(m)

function addition(...t){
    console.log(t)
    let sum=t.reduce(function(acc,el){
        return acc+el
    },0)
    return sum

}
let total=addition(22,26,35,19,58,65,64,61)
console.log(total)
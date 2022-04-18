class Student {
    fName = 'Kalu Mane'
    adhar = 0201532
    adrress = 'Pune'
}

class Employee extends Student {
    salary = 25000
}

class Manager extends Employee{

    field='Information Technology'

}
let Vishal=new Manager()
console.log(Vishal.field)
console.log(Vishal.salary)
console.log(Vishal)

//constructor

class Student2{
    constructor(fn,ad,addr){
        this.fullname=fn
        this.adhar=ad
        this.address=addr
    }

}
class Employee2 extends Student2   {
    constructor(fn,ad,addr,sl){
        super(fn,ad,addr)
        this.salary=sl
    }

}
class Manager2 extends Employee2{
    constructor(fn,ad,addr,sl,fld){
        super(fn,ad,addr,sl)
        this.field=fld
    }
}

let Kalu=new Manager2('Kalu Mane',25365215,"pune",30000,'I.T')
console.log(Kalu)
console.log(Kalu.salary)
console.log(Kalu.adhar)
console.log(Kalu.address)

class Student3 {
    constructor(fn, ad, addr) {
        this.fullname = fn
        this.adhar = ad
        this.address = addr
    }
    display() {
        console.log(this.fullname, this.address, this.adhar)
    }

}
class Employee3 extends Student3 {
    constructor(fn, ad, addr, sl) {
        super(fn, ad, addr)
        this.salary = sl
    }
    display() {
        console.log(this.fullname, this.salary)
        super.display()
    }

}
class Manager3 extends Employee3 {
    constructor(fn, ad, addr, sl, fld) {
        super(fn, ad, addr, sl)
        this.field = fld
    }
    display() {
        console.log(this.field)
        super.display()
    }

}
let rohan = new Manager3('rohan mane', 2562542, 'pune', 60000, "electronic")
console.log(rohan)
rohan.display()





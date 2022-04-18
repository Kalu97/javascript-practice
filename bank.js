// class Bank {
//     constructor(accname, accnum, bal) {
//         this.fullname = accname
//         this.accnum = accnum
//         this.bal = bal
//         this.trans = []
//     }
//     depoist(amount) {
//         this.bal = amount + this.bal

//         return this.bal
//     }
//     withdraw(amount) {
//         if (amount < this.bal) {
//             this.bal = this.bal - amount
//             this.trans.push(-amount)
//             return this.bal
//         }
//         else {
//             console.log('insufficient balance')
//         }
//     }
//     createusername() {
//         this.username = this.fullname.split(" ").reduce(function (acc, el) {
//             return acc + el[0]
//         }, "")
//     }
//     transcation() {
//         return this.trans.slice(-5)
//     }

// }
// let vishal = new Bank('Kalu Mane', 125, 500000)
// let transaction = [3322, 2522, -56999, 25696, 5555, -2525, 253, -2569]
// for (let i = 0; i < transaction.length; i++) {
//     if (transaction[i] < 0) {
//         vishal.withdraw(transaction[i])
//     }
//     else {
//         vishal.depoist(transaction[i])
//     }
// }
// vishal.createusername()
// console.log(`the last five transaction of username ${vishal.username}: ${vishal.transcation()}`)


//polymorphisam

//same class same method name, different signature====>Overloading

class mult {
    // mul(a, b) {
    //     console.log(a * b)
    // }
    // mul(a, b, c) {
    //     console.log(a * b * c)
    // }
//overoloading example
    mul(a,b,c){
        if(a!= undefined&& b!=undefined&& c!=undefined){
            console.log(a*b*c)
        }
        else if(a!=undefined && b!= undefined){
            console.log(a*b)
        }
        else{
            console.log('incorrect number entered')
        }
    }
}
let multy=new mult
multy.mul(10,5)
multy.mul(10,25,2)
multy.mul(10)



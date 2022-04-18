let createUser = function () {
    setTimeout(function () {
        console.log('User created')

    }, 2000)

}
let createId = function () {
    setTimeout(function () {
        console.log('Id created')

    }, 1000)

}

let getSubjects = function () {
    setTimeout(function () {
        console.log('subject retrive')
    }, 3000)    

}


let promise4 = new Promise(function (resolve, reject) {
    createUser()
    resolve()
    

})
promise4.
    //then(function () {
        //reateUser()
       //resolve()
   // }).
    then(function () {
        createId()
    }).then(function () {
        getSubjects()

    // }) .catch(function (msg) {
    //     createUser()
    })

let ullist = document.querySelector("ul")
let inputText = document.querySelector("input")
let addbutton = document.querySelector("#one")

console.log(ullist)
console.log(inputText)
console.log(addbutton)

let lilist = document.querySelector("ul")
for (let i = 0; i < lilist.length; i++) {
    createbutton(lilist[i])
}
addbutton.addEventListener('click', function () {
    let a = inputText.value
    let li = document.createElement("li")
    li.textContent = a
    createbutton(li)
    ullist.appendChild(li)
    inputText.value = ""
})
ullist.addEventListener('click', function (event) {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.classList == 'remove') {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        if (event.target.classList == "up") {
            let li = event.target.parentElement
            let prevLi = li.previousElementSibling
            let ul = prevLi.parentElement

            if (prevLi) {
                ul.insertBefore(li, prevLi)
            }
        }
        if (event.target.classList == "down") {
            let li = event.target.parentElement
            let nextLi = li.nextElementSibling
            let ul = nextLi.parentElement
            if (nextLi) {
                ul.insertBefore(nextLi, li)
            }

        }
    }
}

)
function createbutton(li) {
    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.classList = "remove"
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList = "up"
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList = "down"
    li.appendChild(down)

}
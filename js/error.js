const button = document.querySelector("button")
button.addEventListener("click", () => {
    let num = button.innerText
    num++
    button.innerText = num
})
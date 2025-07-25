const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
    fetch('https://randomfox.ca/floof/')
})

const dogButton = document.querySelector("#dog-button")
dogButton.addEventListener("click", () => {
    fetch('https://random.dog/woof.json')
})

// NEXT IS THEN WE DISPLAY
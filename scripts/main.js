const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
    fetch('https://randomfox.ca/floof/').then((response) => {
        // this code runs when the Promise is fulfilled
        console.log('Response received!')
        return response.json()
    }).then((foxData) => {
        const foxImage = document.querySelector("#fox")
        foxImage.src = foxData.image
    })
    console.log('This code runs immediately!');
})

const dogButton = document.querySelector("#dog-button")


const displayDogImage = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogData = await response.json()
    const dogImage = document.querySelector('#dog')
    dogImage.src = dogData.url
}
dogButton.addEventListener("click", displayDogImage) 
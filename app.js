const input = document.getElementById("input");
const buton = document.getElementById("buton");
const message = document.querySelector(".message");

console.log(input)
console.log(buton)
console.log(message)

const vowel = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

buton.addEventListener("click", () => {
    let count = 0;
    if(!input.value) {
        message.innerText = `There are 0 vowels in .`
    } else {
        for (let i = 0; i < input.value.length; i++) {
            console.log(input.value[i])
            if (vowel.includes(input.value[i])) {
                count++
            }
        }
    }
    message.innerText = `There are ${count} vowels in ${input.value}.`
})
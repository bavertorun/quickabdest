/**
 *
 * Coded by Baver Torun 
 * github.com/bavertorun
 * 
 **/

const body = document.querySelector('body');
const checkbox = document.getElementById("checkbox")
const img = document.querySelector('img');
const audio = document.querySelector("#audio");
const abdestlendin = document.querySelector("#abdestlendin");



if (localStorage.getItem("isDarkMode") === "true") {
    checkbox.checked = true;
    body.classList.add("dark");
}
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        body.classList.add("dark");
        localStorage.setItem("isDarkMode", true);
    } else {
        body.classList.remove("dark");
        localStorage.setItem("isDarkMode", false);
    }
});


img.addEventListener("click", () => {
    img.src = "assets/img/feels.png"
    audio.play()
    abdestlendin.innerHTML = "A B D E S T L E N D İ N"
})
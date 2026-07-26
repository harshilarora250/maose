const { animate, hover, scroll } = Motion;

const savedUser = localStorage.getItem("username");
const accountPref = document.getElementById("account")
const languageScreen = document.querySelector(".letsgo")

if (savedUser) {
document.getElementById("welcome-user").textContent = `Hello, ${savedUser}`
} else {
    document.getElementById("welcome-user").textContent=`Hello, Guest`
}

languageScreen.addEventListener("click", (e) => {
    localStorage.setItem("account", accountPref.value);
    window.location.href = "language.html";
    console.log("Understood", accountPref.value)
});

console.log(savedUser);
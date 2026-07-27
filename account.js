const { animate, hover, scroll } = Motion;

const savedUser = localStorage.getItem("username") //Get username form localStorage
const letsGo = document.getElementById("letsgo") // Get letsGo button from HTML
const email = document.getElementById("email") // Get email input from HTML
const password = document.getElementById("password") // Get password element from HTMl

//Show username
if (savedUser) {
    document.getElementById("welcome-user").textContent = `${savedUser}`
} else {
    document.getElementById("welcome-user").textContent = `guest`
}

// Detect continue button click for email
letsGo.addEventListener("click", (e) => {
    if (email.value === "") {
        console.log("no email detected")
        alert("Please enter an email")
    } else {
        console.log("email detected, asking user to set a password")
        password.removeAttribute("hidden");
    } 
});

// Detect continue button click for password
letsGo.addEventListener("click", (e) => {
    if (password.value === "") {
        console.log("no password detected")
        alert("Please enter a password")
    } else {
        console.log("email and pasword detected, saving....")
        localStorage.setItem("email-value", email.value);
        console.log("email saved, saving password...")
        localStorage.setItem("password-value", password.value);
        console.log("password saved, redirecting....")
        window.location.href = "language.html"
    }
});


//Aniimations below:
hover(".letsgo", (element) => {
    console.log("hovering", element);
    animate(
        element,
        { scale: 1.1 },
        { duration: 0.3 }
    );
    return () => {
        animate(
            element,
            { scale: 1 },
            { duration: 0.3 }
        )
    };
});
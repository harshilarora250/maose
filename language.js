//Variables Begin
const { animate, hover, scroll } = Motion;
const savedUser = localStorage.getItem("username") // Get username from localStorage
const letsGo = document.getElementById("letsGo") // Get letsGo element from HTML
const email = localStorage.getItem("email-value")// Get email value from HTML (if nothing is stored, there won't be data)
//Variables End

//Show username begin
if (savedUser) {
    document.getElementById("welcome-user").textContent(`Logged in as - ${savedUser}`)
    console.log("User detected!", savedUser.value)
} else {
    document.getElementById("welcome-user").textContent(`Logged in as guest`)
    console.log("Hacker detected! continuining...")
    window.location.href = "hacker.html";
}
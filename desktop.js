//Variables
const { animate, hover, scroll } = Motion; // Animation Var
const acc = document.getElementById("acc") // Account button
const accmenu = document.getElementById("acc-menu") // Account menu
const user = document.getElementById("user") // User text - acc menu
const closemenu = document.getElementById("close") // Close button - acc menu
const logout = document.getElementById("logout") // Logout button - acc menu
const savedUser = localStorage.getItem("username") // Username for - acc menu
const closeNotes = document.getElementById("close-notes") // Close notes button
const notesMenu = document.getElementById("notes-menu") // Actual notes menu
const notesBtn = document.getElementById("notes-btn")
const notes = document.querySelector(".file") // Actual notes
const saveNotes = document.getElementById("save-notes") // Save notes button

// Account Menu
if (savedUser) {
    document.getElementById("user").textContent = `Logged in as ${savedUser}`
} else {
    document.getElementById("user").textContent = `Interesting... I've got a hacker to deal with`
 }

acc.addEventListener("click", (e) => {
    accmenu.hidden = false;
});

logout.addEventListener("click", (e) => {
    console.log("We're sorry to see you go, logged out.")
       window.location.href = "index.html"
    localStorage.setItem("email-value", "")
    localStorage.setItem("username", "")
});

closemenu.addEventListener("click", (e) => {
    accmenu.hidden = true;
});

//Notes menu
notesBtn.addEventListener("click", (e) => {
    notesMenu.hidden = false;
})

closeNotes.addEventListener("click", (e) => {
    notesMenu.hidden = true;
})

//Animations below
hover(".logout", (element) => {
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
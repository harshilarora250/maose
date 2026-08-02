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
const notes = document.getElementById("file") // Actual notes
const saveNotes = document.getElementById("save-notes") // Save notes button
const notebtn = document.getElementById("curnt-notes")
const clipboard = document.getElementById("copied")

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

// Notes menu
notesBtn.addEventListener("click", (e) => {
    notesMenu.hidden = false;
})

closeNotes.addEventListener("click", (e) => {
    notesMenu.hidden = true;
})

saveNotes.addEventListener("click", (e) => {
    if (notes.value.trim() === "") {
        alert("There are no notes-write to have more")
    } else {
        document.getElementById("nomore").textContent = `It saves to clipboard (ahawhen you click the button in top-left) and local storage, if you save again, you lose it.`

        localStorage.setItem("notes", notes.value);
        console.log(localStorage.getItem("notes"))
    }
});

notebtn.addEventListener("click", (e) => {
    const savednotes = localStorage.getItem("notes");

    if (!savednotes) {
        alert("No notes saved.");
        return;
    }

    navigator.clipboard.writeText(savednotes);
    notebtn.hidden = true;
    clipboard.hidden = false;

    setTimeout(() => {
        notebtn.hidden = false;
        clipboard.hidden = true;
    }, 3000);
    console.log("Saved to clipboard!")
})

// Animations below
hover(".logout", (element) => {
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
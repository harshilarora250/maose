const { animate, hover, scroll } = Motion;
const acc = document.getElementById("acc")
const accmenu = document.getElementById("acc-menu")
const user = document.getElementById("user")
const closemenu = document.getElementById("close")

acc.addEventListener("click", (e) => {
    accmenu.hidden = false;
    window.location.href = "index.html"
    localStorage.setItem("email-value", "")
});

closemenu.addEventListener("click", (e) => {
    accmenu.hidden = true;
});

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
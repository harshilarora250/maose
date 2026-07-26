const { animate, hover, scroll } = Motion;

//Main functions
const USERNAME = document.getElementById("username-input");
const letsGo = document.querySelector(".letsgo");
const NAME = document.getElementById("name-input")

letsGo.addEventListener("click", (e) => {
    if (USERNAME.value.trim()  === "") {
    e.preventDefault(); // Stop the page changing immediately
    alert("Please enter a username");
    return;
}
 localStorage.setItem("username", USERNAME.value);
    window.location.href = "welcome.html"; // or whatever page you want
    console.log("Welcome", USERNAME.value)});



//Animations Below:
hover(".letsgo", (element) => {
    console.log("hover started on", element);
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
        );
    };
});
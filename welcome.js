const { animate, hover, scroll } = Motion;

const savedUser = localStorage.getItem("username");
const accountPref = document.getElementById("account")
const letsGo = document.querySelector(".letsgo")

if (savedUser) {
document.getElementById("welcome-user").textContent = `Hello, ${savedUser}`
} else {
    document.getElementById("welcome-user").textContent=`Hello, Guest`
}

letsGo.addEventListener("click", (e) => {
if (accountPref.value === "yes") {
    console.log("create-account, redirecting.....")
    window.location.href = "account.html"
} else {
    console.log("user doesn't want to create account, redirecting....")
    window.location.href = "language.html"
}});

console.log(savedUser);

//Animation Below:
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
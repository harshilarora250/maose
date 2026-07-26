const { animate, hover, scroll } = Motion;


const count = document.getElementById("count")

animate (0,100, {
    duration: 5,
    ease: "circOut",
    onUpdate: (latest) => (count.innerHTML = Math.round(latest)),
})
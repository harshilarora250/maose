const video = document.getElementById("intro");

// Ensure playback starts (helps some browsers)
video.play().catch(() => {});

// When finished, go to the app
video.addEventListener("ended", () => {
    window.location.href = "desktop.html";
});
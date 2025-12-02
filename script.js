const startBtn = document.getElementById("startBtn");
const landing = document.getElementById("landing");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

// Create soft glowing brown particles
function createParticles() {
    const container = document.getElementById("particles");

    for (let i = 0; i < 40; i++) {  // number of particles
        const p = document.createElement("div");
        p.classList.add("particle");

        const size = Math.random() * 6 + 4;
        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";

        p.style.animationDuration = Math.random() * 10 + 8 + "s";
        p.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(p);
    }
}

createParticles();

startBtn.addEventListener("click", () => {
    // Fade out landing
    landing.classList.add("fade-out");

    // Fade-in main after transition
    setTimeout(() => {
        main.classList.add("show");
    }, 800);

    // Play music
    music.volume = 0.7;
    music.play().catch(() => {
        console.log("Music play blocked, but click enabled it.");
    });

    startScrolling();
});

function startScrolling() {
    const message = document.getElementById("message");
    const box = document.getElementById("messageBox");

    let pos = box.offsetHeight;

    function scroll() {
        pos -= 0.5; // speed
        message.style.top = pos + "px";

        if (pos < -message.offsetHeight) {
            pos = box.offsetHeight;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}

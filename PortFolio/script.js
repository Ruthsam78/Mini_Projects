const typed = new Typed(".auto-type", {
  strings: ["Developer", "Designer", "Freelancer", "Content Creator"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
  cursorChar: ">",
  smartBackspace: true,
});

const End = new Typed(".nomore", {
  strings: ["Infinite!"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
  cursorChar: "",
  smartBackspace: true,
});

document.getElementById("blackhole").onclick = function () {
  window.open("Stellar_CV.pdf", "_blank");
  alert("You Discovered a Secret Resume!");
};

const form = document.getElementById("Contact-form");
const rocket = document.getElementById("rocket");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  rocket.classList.add("launching");

  setTimeout(() => {
    confirmation.style.display = "block";
    rocket.classList.remove("launching");
    form.reset();
  }, 2000);
});


const planetData = {
  planet1: {
    title: "🎨 Creative & Editing Skills",
    text: `
<b>Photo Editing:</b> Canva, Photoshop (or alternatives), background removal, thumbnails, color correction, text overlays<br>
<b>Video Editing:</b> CapCut, VN, Adobe Rush, transitions, subtitles, music sync, reels & content creation
    `,
  },
  planet2: {
    title: "🖥 UI/UX Design",
    text: `
Minimalist design principles, user flow planning, wireframing, responsive layouts<br>
<b>Tools:</b> Figma (if used), CSS animations, parallax effects, 3D design using Spline
    `,
  },
  planet3: {
    title: "💻 Programming Skills",
    text: `
<b>Languages:</b><br>
C (Basic Logic & Programs)<br>
Python (Learning / Intermediate)<br>
JavaScript (DOM, effects, interactivity)<br><br>
<b>Full Stack:</b> MERN Stack – MongoDB, Express.js, React.js, Node.js<br>
Frontend effects, responsive design, backend APIs
    `,
  },
  planet4: {
    title: "🤖 AI Tools & Prompt Engineering",
    text: `
Mastery in using GPT tools (ChatGPT, Gemini, Claude)<br>
Building concepts (Lyra assistant, NOVA app)<br>
Prompt engineering for productivity, learning, and creativity
    `,
  },
  planet5: {
    title: "🌟 Soft Skills",
    text: `
Curiosity, Visionary Thinking, Leadership, Problem Solving, Self-Driven Learning, Public Speaking, Adaptable`,
  }
};

const modal = document.getElementById("planetModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close-btn");

let tooltip = document.createElement("div");
tooltip.className = "planet-tooltip";
document.body.appendChild(tooltip);

["planet1", "planet2", "planet3", "planet4", "planet5"].forEach((pid) => {
  const planet = document.querySelector("." + pid);
  if (planet) {
    planet.addEventListener("mouseenter", (e) => {
      tooltip.innerHTML = planetData[pid].text;
      tooltip.style.opacity = 1;
    });
    planet.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 20 + "px";
      tooltip.style.top = e.pageY - 10 + "px";
    });
    planet.addEventListener("mouseleave", (e) => {
      tooltip.style.opacity = 0;
    });
 }  
});


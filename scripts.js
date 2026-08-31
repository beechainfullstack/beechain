const roles = [
  "creative architect",  
  "product strategist",
  "experience director",
  "growth operator",
  "community weaver"
];

const role = document.getElementById("role");
let roleIndex = 0;

window.setInterval(() => {
  role.classList.add("is-changing");
  window.setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    role.textContent = roles[roleIndex];
    role.classList.remove("is-changing");
  }, 180);
}, 2600);

const thanks = document.getElementById("thanks");
const startedAt = Date.now();

function updateTimeThankYou() {
  const seconds = Math.floor((Date.now() - startedAt) / 1000);
  const label = seconds === 1 ? "second" : "seconds";
  thanks.textContent = `You've been here for ${seconds} curious ${label}. Thank you for every one.`;
}

updateTimeThankYou();
window.setInterval(updateTimeThankYou, 1000);
document.getElementById("year").textContent = new Date().getFullYear();

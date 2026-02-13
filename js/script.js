const roles = [
    "Full Stack Developer",
    "VPS Infrastructure Specialist",
    "Web Application Engineer",
    "MrEnder"
];

let i = 0;
let j = 0;
let current = "";
let deleting = false;

function typeEffect() {
    if (i >= roles.length) i = 0;

    if (!deleting && j <= roles[i].length) {
        current = roles[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        current = roles[i].substring(0, j--);
    }

    document.getElementById("typing").innerText = current;

    if (j === roles[i].length) deleting = true;
    if (j === 0) {
        deleting = false;
        i++;
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

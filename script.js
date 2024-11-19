let slider = document.querySelector(".slider");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = () => {
    slider.append(slider.querySelector("*:first-child"));
}
prevBtn.onclick = () => {
    slider.prepend(slider.querySelector("*:last-child"));
}

function calculate() {
    let tenge = document.getElementById("tenge").value;
    let dollars = (tenge / 498.7).toFixed(2);
    document.getElementById("result").textContent = `$${dollars} USD`;
}


document.getElementById("scrollBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.getElementById("calculator");
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const duration = 5000;
    let startTime = null;

    function smoothScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(smoothScroll);
});
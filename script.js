let slider = document.querySelector(".slider");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = () => {
    slider.append(slider.querySelector("*:first-child"));
}
prevBtn.onclick = () => {
    slider.prepend(slider.querySelector("*:last-child"));
}

document.getElementById('scrollBtn').addEventListener('click', function () {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
});


function calculate() {
    let tenge = document.getElementById("tenge").value;
    let dollars = (tenge / 498.7).toFixed(2);
    document.getElementById("result").textContent = `$${dollars} USD`;
}
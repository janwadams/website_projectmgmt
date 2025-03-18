document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const eventDate = new Date("April 5, 2025 14:00:00 EST").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference < 0) {
            document.querySelector(".countdown").innerHTML = "<h3>Event Started!</h3>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});



function togglePassword(fieldId) {
    let field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}

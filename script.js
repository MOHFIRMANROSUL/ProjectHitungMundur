// Set the date we're counting down to
let countdownDate = new Date("Nov 15, 2024 00:00:00").getTime();

function startCountdown() {
    let countdownFunction = setInterval(function () {
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        let distance = countdownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        
    }, 1000)
};// Get the current date and time
        
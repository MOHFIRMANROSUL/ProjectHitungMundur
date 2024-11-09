// Set the date we're counting down to
let countdownDate = new Date("Nov 15, 2024 00:00:00").getTime();

// Function to update the countdown every 1 second
function startCountdown() {
    let countdownFunction = setInterval(function() {
        // Get the current date and time
        let now = new Date().getTime();

        // Find the distance between now and the countdown date
        let distance = countdownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Start countdown when button is clicked
document.getElementById("startBtn").addEventListener("click", function() {
    startCountdown();
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to update the countdown timer
    function startCountdown() {
        const birthdayDate = new Date("March 7, 2025 00:00:00");
        const timerElement = document.getElementById("timer");

        setInterval(function () {
            const now = new Date();
            const timeLeft = birthdayDate - now;
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    // Function to allow user to customize name and message
    function generateBirthdayWish() {
        const name = prompt("Enter your name for the birthday wish:");
        const nameElement = document.getElementById("name");
        nameElement.textContent = name;

        // Allow image upload and text input for memories
        const imageInput = document.createElement("input");
        imageInput.type = "file";
        imageInput.addEventListener("change", function () {
            const imageContainer = document.getElementById("imageContainer");
            const file = imageInput.files[0];
            const reader = new FileReader();

            reader.onloadend = function () {
                const img = document.createElement("img");
                img.src = reader.result;
                img.alt = "Birthday Memory Image";
                img.width = 200;
                imageContainer.innerHTML = '';  // Clear previous images
                imageContainer.appendChild(img);
            }

            if (file) {
                reader.readAsDataURL(file);
            }
        });

        document.body.appendChild(imageInput);

        // Capture memory text
        const memoryText = document.getElementById("memoryText").value;
        alert(`Happy Birthday ${name}! Your memory: ${memoryText}`);
    }

    // Add event listeners to tasks
    document.getElementById("blowCandle").addEventListener("click", function () {
        alert("Candles Blown Out! Make a wish!");
    });
    document.getElementById("cutCake").addEventListener("click", function () {
        alert("Cake Cut! Enjoy your cake!");
    });
    document.getElementById("blastBalloon").addEventListener("click", function () {
        alert("Balloons Blown! Let’s celebrate!");
    });

    // Start countdown
    startCountdown();
});

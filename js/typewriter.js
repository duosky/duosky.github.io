document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello! I'm DuoSky, a self-taught artist who loves creating digital art. Welcome to my portfolio!";
    let index = 0;
    const speed = 50; // Speed of typing in milliseconds
    const punctuationPause = 500; // Pause after punctuation in milliseconds

    function typeWriter() {
        if (index < text.length) {
            const char = text.charAt(index);
            document.getElementById("typewriter-text").innerHTML += char;
            index++;
            let delay = speed;

            if (char === "!" || char === "." || char === ",") {
                delay = punctuationPause;
            }

            setTimeout(typeWriter, delay);
        }
    }

    typeWriter();
});


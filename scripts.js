document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0); // Initialize the first slide

    // Auto slide every 3 seconds
    setInterval(() => {
        changeSlide(1);
    }, 3000);
});

(function(){
    emailjs.init("TyGP7Pv_5UANq5fsx");
})();

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_mo2phto', 'template_yte9kgy', templateParams)
        .then(function(response) {
            alert('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('FAILED...', error);
        });
}


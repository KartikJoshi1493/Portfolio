var typed = new Typed(".text", {
    strings: ["Web Designer", "Frontend Developer", "Fitness Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "8319403723"; 

    let whatsappMessage = `Hello, I am *${name}* (%0AEmail: ${email})%0A%0A*Subject:* ${subject}%0A%0A*Message:* ${message}`;

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");  
});


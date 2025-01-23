let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host: "smtp.mailendo.com",
        Username: "atefhandoura0@gmail.com",
        Password: "8B2EEF65688B217D3424E795C69F6628FA50",
        To: 'atefhandoura0@gmail.com',
        From: "atefhandoura0@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}








window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }

    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
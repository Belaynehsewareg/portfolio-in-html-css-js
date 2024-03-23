/**  Menu icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/**Scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

  /**   dark light mode */

  let darkModeIcon = document.querySelector('#darkMode-icon');

  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };

// my service part desplay the description
const serviceBoxes = document.querySelectorAll('.services-box');

serviceBoxes.forEach(box => {

    const readMoreBtn = box.querySelector('.btn');
    const moreContent = box.querySelector('.more-content');

    readMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); 

        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
        }
    });
});

  let fname = document.getElementById("txt").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("num").value;
  let message = document.getElementById("message").value;


  document.getElementById("bttn").onclick = () => {
    if(fname==null || fname==""){
        document.getElementById("txt").innerHTML = ("Name can't be Blank");
    }
    else if(email==null || email==""){
        document.getElementById("email").innerHTML = ("Email can't be blank")
    }
  }

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById("txt").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("num").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  });
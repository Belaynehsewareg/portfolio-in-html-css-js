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
const navToggle = document.getElementById('nav_toggle');
const navLinks = document.getElementById('nav_links');
const links = document.getElementsByClassName('link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    main.classList.toggle('blur');
})



var mq = window.matchMedia( "(max-width: 768px)" );
if (mq.matches) {
    Array.from(links).forEach(function(link){
        link.addEventListener('click', (e) => {
            e.preventDefault();
            var navLink = link.textContent;
            
            switch (navLink) {
                case 'Home':
                    document.getElementById('hero').scrollIntoView({
                    behavior:  'smooth'
                    });
                    break;
                case 'About':
                    document.getElementById('about').scrollIntoView({
                    behavior:  'smooth'
                    });
                    break;
                
                case 'Contact':
                    document.getElementById('contact').scrollIntoView({
                    behavior:  'smooth'
                    });
                default:
                    break;
            }
    
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        })
    })
}
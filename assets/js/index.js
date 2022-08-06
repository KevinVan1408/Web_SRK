const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

const header = $$('#header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(0,0,0,0.6)';
        header.style.animation = 'fadeInDown 800ms';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.animation = 'none';
    }
});

const headerNav = $$$('.header-item__navigation-item');
headerNav.forEach(function(item) {
    item.onclick = function() { 
        $$('.header-item__navigation-item.active').classList.remove('active');
        this.classList.add('active');
    };
});

const contentImageBtn = $$$('.content-image__btn');
contentImageBtn.forEach(function(item) {
    item.onclick = function() {
        this.style.color = 'red';
    }
});

$(document).ready(function() {
    $('.content-item__image10-information-counter__number').counterUp({
        delay: 10,
        time: 1200
    });
    $('.content-item__teams').owlCarousel({
        // nav: true,
        // navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        // items: 4,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            740: {
                items: 3
            },
            1024: {
                items: 4
            }
        },
    });
    $('.content-item__comment').owlCarousel({
        // nav: true,
        // navText: ['<i class="content-item__teams-icon fas fa-angle-left"></i>', '<i class="content-item__teams-icon fas fa-angle-right"></i>'],
        // items: 3,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            740: {
                items: 2
            },
            1024: {
                items: 3
            }
        },
    });
});

const subNavHome = $$$('.header-item__navigation-home-item');
var contentImg = $$('.content-image__img');
$$('#particles-js').style.display = 'none';
subNavHome.forEach(function(item) {
    item.onclick = function() {
        if (item === $$('.header-item__navigation-home-item:first-child')) {
            $$('.video').style.display = 'none';
            contentImg.style.background = 'none';
            contentImg.style.background = 'url("https://bestwpware.com/themes-wp/srk/wp-content/uploads/2018/08/video-bg.jpg") no-repeat center / cover fixed';
            $$('#particles-js').style.display = 'block';
        } else if (item === $$('.header-item__navigation-home-item:nth-child(2)')) {
            $$('.video').style.display = 'none';
            contentImg.style.background = 'none';
            contentImg.style.background = 'url("https://bestwpware.com/themes-wp/srk/wp-content/uploads/2018/08/about-bg.jpg") no-repeat center / cover fixed';
            $$('#particles-js').style.display = 'none';
            $('.content-image__img').ripples({
                resolution: 512,
                dropRadius: 15,
                perturbance: 0.02,
            });
        } else {
            contentImg.style.background = '#000';
            $$('.video').style.display = 'block';
            $$('#particles-js').style.display = 'none';
        }
    };
});

// Tablet and mobile header
const menuIcon = $$('.header-item__navigation-menu-icon');
const navIcon = $$('.header-item__navigation');
menuIcon.addEventListener('click', () => {
    const visibility = navIcon.getAttribute("data-visible");
    if (visibility === "false") {
        navIcon.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        navIcon.setAttribute("data-visible", false);
    }
    const navItems = $$$('.header-item__navigation-item-link');
    navItems.forEach(function(item) {
        item.onclick = () => {
            navIcon.setAttribute("data-visible", false);
        }
    });
});
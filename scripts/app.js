const lottie_burger = document.querySelector('#lottie-burger');
// const scroll_lottie = document.querySelector('#lottie-scroll');
const menu_box = document.querySelector('#menuBox');

var s = skrollr.init(
    [
        smoothScrolling = true,
    ]
);

/**
 * SVG DU BURGER 
 */
let menu_burger_animation = lottie.loadAnimation({
    container: lottie_burger, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './../images/menu-animation.json' // the path to the animation json
});


// menu animation
lottie_burger.addEventListener('click', function(e) {
    if (lottie_burger.classList.contains("closed-burger")) {
        menu_box.classList.toggle('open-menu')
        lottie_burger.classList.toggle("closed-burger")
        menu_burger_animation.playSegments([0, 90], true)
        lottie_burger.classList.add("opened-burger")

    } else {
        lottie_burger.classList.add("closed-burger")
        menu_burger_animation.playSegments([90, 180], true)
        lottie_burger.classList.toggle("opened-burger")
        menu_box.classList.remove('open-menu')
    }
});
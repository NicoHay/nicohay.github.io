
const lottie_burger = document.querySelector('#lottie-burger');
const menu_box = document.querySelector('#menuBox');
var s = skrollr.init([
    smoothScrolling = true,
]);

// list of options
let options = {
    root: null,
    rootMargin: '100%',
    threshold: 0.1
};
// instantiate a new Intersection Observer
let observer = new IntersectionObserver(onEntry, options);


// the callback function that will be fired
// when the element apears in the viewport
function onEntry(entry) {
    entry.forEach((change, index) => {
        console.log(index)
        if (index === 0) {

            change.target.classList.add('visible');
        }


    });
}

// list of paragraphs
let elements = document.querySelectorAll('p');
// loop through all elements
// pass each element to observe method
// ES2015 for-of loop can traverse through DOM Elements
for (let elm of elements) {
    observer.observe(elm);
}




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
lottie_burger.addEventListener('click', function (e) {
    if (lottie_burger.classList.contains("closed-burger")) {
        menu_box.style.opacity = 1
        lottie_burger.classList.toggle("closed-burger")
        menu_burger_animation.playSegments([0, 90], true)
        lottie_burger.classList.add("opened-burger")
    } else {
        lottie_burger.classList.add("closed-burger")
        menu_burger_animation.playSegments([90, 180], true)
        lottie_burger.classList.toggle("opened-burger")
        menu_box.style.opacity = 0

    }
});
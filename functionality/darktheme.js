
const body = document.querySelector('body');
const switchToggle = document.getElementById('black');
const heroSection = document.getElementById('herosec-5');
const nav = document.getElementById('navdt');

switchToggle.addEventListener('click', function () {
    if (body.style.backgroundColor === 'rgb(33, 33, 33)') {
        body.style.backgroundColor = 'white';
        body.style.color = '#212121';
        switchToggle.innerHTML = '<img  src="/assets/pics/lightmode.png" alt="light-theme-logo">'
    } else {
        body.style.backgroundColor = '#212121';
        body.style.color = 'white';
        heroSection.style.backgroundColor = '#ffff';
        nav.style.backgroundColor = 'white';
        switchToggle.innerHTML = '<img  src="/assets/pics/darkmode.png" alt="light-theme-logo">'
    }
});

                                             // JS CODE FOR SMALL DEVICES
const forSM = document.getElementById('darkthemeforSm');
const textChanger = document.getElementById('text-change');
// const navonSM = document.getElementById('mobile-menu')

forSM.addEventListener('click', function() {
    if (body.style.backgroundColor === 'rgb(33, 33, 33)' || body.style.backgroundColor === '#212121') {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        body.style.color = '#212121';
        heroSection.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        textChanger.textContent = 'Switch To Dark Mode';
        textChanger.style.color = '#212121';
        forSM.innerHTML = '<img src="/assets/pics/Darkmode.png" alt="darktheme-logo" class="w-8"><p id="text-change" class="font-tt-hoves-pro text-gray-700">Switch To Dark Mode</p>';
    } else {
        // Switch to dark mode
        body.style.backgroundColor = '#212121';
        // navonSM.style.backgroundColor = '' 
        body.style.color = 'white';
        heroSection.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        textChanger.textContent = 'Switch To Light Mode';
        textChanger.style.color = 'white';
        forSM.innerHTML = '<img src="/assets/pics/lightmode.png" alt="light-theme-logo" class="w-8"><p id="text-change" class="ml-2 font-tt-hoves-pro text-gray-700">Switch To Light Mode</p>';
    }
});
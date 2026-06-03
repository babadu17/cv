const body = document.querySelector('body');
const nav = document.querySelector('nav');
const curseur = document.querySelector('.curseur');
const curseur2 = document.querySelector('.curseur2');

function updateNav() {
    if (window.innerWidth < 660) {
        nav.style.visibility = 'hidden';
    } else {   
        nav.style.visibility = 'visible';
    }
}

function blinkCurseur(cache) {
    if (cache) {
        curseur.style.visibility = 'hidden';
        curseur2.style.visibility = 'hidden';
        cache = false;
    } else {
        curseur.style.visibility = 'visible';
        curseur2.style.visibility = 'visible';
        cache = true;
    }
    setTimeout(() => blinkCurseur(cache), 500);
}

window.addEventListener('resize', updateNav);
window.addEventListener('load', updateNav);
blinkCurseur(true);
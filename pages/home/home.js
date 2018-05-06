// jshint esversion:6



window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');

window.onload = () => {
    iziToast.show({
        title: 'Hello!',
        message: 'Would you mind taking a type form <a href="#" target="_blank"> survey? <a>   ',
        position: 'topRight',
        theme: 'dark'
    });
}






/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "40%";


}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
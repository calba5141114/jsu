//jshint esversion:6

const backHome = document.getElementById('backHome');
const yarden = document.getElementById('Yarden');
const amit = document.getElementById('Amit');

window.sr = ScrollReveal();
sr.reveal('.foo');

backHome.onclick = () => {
    window.location = "../home/home.html";
};

const emailWarning = email =>{
    this.email =email;
    iziToast.show({
        title: 'Email Info',
        message:   `If the link is not working you can contact the officer at ${this.email}`,
        position: 'topRight',
        theme: 'dark'
    });
};



yarden.onclick = ()=>{
emailWarning('Yzinger@example.com');
// window.location= "mailto:mail@example.org";
};

amit.onclick = () =>{
emailWarning('AKlein@example.com');
// window.location= "mailto:mail@example.org";
};




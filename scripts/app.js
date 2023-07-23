/* const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const observerHeader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            document.getElementById('header').classList.add('toshow');
        } else {
            document.getElementById('header').classList.remove('toshow');
        }
    });
});



const hiddenHeader = document.querySelectorAll('.check');
hiddenHeader.forEach((e2) => observerHeader.observe(e2)); */


// -------------------- PROJETS -------------------- //

const buttons = document.querySelectorAll('.projet');
const all = document.querySelectorAll('.case');
const java = document.querySelectorAll('.java');
const web = document.querySelectorAll('.web');
const sql = document.querySelectorAll('.sql');
const python = document.querySelectorAll('.python');
const scolaire = document.querySelectorAll('.scolaire');
const personnel = document.querySelectorAll('.personnel');
const termine = document.querySelectorAll('.termine');
const encours = document.querySelectorAll('.encours');

function ClickProjet(element){
    buttons.forEach((but) => {
        console.log(but)
        but.classList.remove('clicked');
    })
    element.classList.add('clicked');
    img = element.getElementsByTagName('img');
        if(img.length == 1){
            all.forEach((but) => {
                but.classList.add('disable');
            })
            if(img[0].src.match('resources/javaBlanc.png')){
                java.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/pythonBlanc.png')){
                python.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/sqlBlanc.png')){
                sql.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/webBlanc.png')){
                web.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/scolaireBlanc.png')){
                scolaire.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/personnelBlanc.png')){
                personnel.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/termine.png')){
                termine.forEach((but) => {
                    but.classList.remove('disable');
                })
            } else if(img[0].src.match('resources/encours.png')){
                encours.forEach((but) => {
                    but.classList.remove('disable');
                })
            }
        } else {
            all.forEach((but) => {
                but.classList.remove('disable');
            })
        }
};   

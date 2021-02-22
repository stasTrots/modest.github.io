

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click",function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu")
    }
})

//  modal 


let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let features = document.querySelector(".section-features")
let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
let documentHeight = document.body.scrollHeight / 2;



// window.onscroll = () => {
//     if(window.pageYOffset > document.body.scrollHeight / 2) {
//         openModal();
//         window.removeEventListener("scroll",onscroll());     
//     }
// }
// window.addEventListener("scroll",function() {
//     if (window.pageYOffset > document.body.scrollHeight / 2) {
//         openModal()    
//     }
// })

function openModal () {
    modal.classList.add("show");
    modal.classList.remove("hide")
}

function closeModal () {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
function showModalByScroll() {
    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal()
        window.removeEventListener("scroll",showModalByScroll);
    }
}
modal.addEventListener("click",function(e) {
    if(e.target===modal) {
        closeModal()
    }
})
closeBtn.addEventListener("click", closeModal);

window.addEventListener("scroll", showModalByScroll)
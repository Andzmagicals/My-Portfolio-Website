// const hamMenu = document.querySelector(".ham-menu");
// // const nav = document.querySelector(".links 2");

// const offScreenMenu = document.querySelector ('.offscreen-menu');

// hamMenu.addEventListener ('click', () => {
//     hamMenu.classList.toggle ('active');
//     offScreenMenu.classList.toggle ('active');
// })


// // menu.onclick = () => {
// //     menu.classList.toggle('bx-x');
// //     nav.classList.toggle('active');
// // }

// // function showlinks () {
// //     const links = document.querySelector(".links 2");
// //     links.style.display = 'flex'
// // }

var sidemenu = document.getElementById("links");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}



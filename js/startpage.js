const btn = document.querySelector('.navbar_btn');
const menu = document.querySelector('.navbar_menu');
const sidemenu = document.querySelector('.navbar_sidemenu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    sidemenu.classList.toggle('active');
}); // 지정하고 있는 함수 호출

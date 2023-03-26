const btn = document.querySelector('.navbar_btn');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
}); // 지정하고 있는 함수 호출
// click toggle btn
const btn = document.querySelector('.navbar_btn');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
}); 

// Mark out current page
// tag의 class를 active로 변경하더라도 새로운 html file 파싱시 초기화됨 -> file 다운로드시 selector 변화
var currentUrl = window.location.href; // const 선언시 재할당 불가
if (currentUrl.includes("about")){
    currentUrl = "./about.html";
}
if (currentUrl.includes("program")){
    currentUrl = "./program.html";
}
if (currentUrl.includes("apply")){
    currentUrl = "./apply.html";
}
if (currentUrl.includes("information")){
    currentUrl = "./information.html";
}
const currentLink = document.querySelector(`.navbar_menu a[href='${currentUrl}']`);

if (currentLink){
    currentLink.classList.add('active');
}


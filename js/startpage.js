// click toggle btn
const btn = document.querySelector('.navbar_btn');
const navbar = document.querySelector('.navbar');

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
}); 

// Mark out current page
// 초기 방안: a tag가 click 될 때마다 모든 a tag class remove -> active
// -> 이동 후 html file을 파싱할 때 초기화 되는 문제 발생
// :처음 html file 다운로드시 selector를 처리해주어야 함

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


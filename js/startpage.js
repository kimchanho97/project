// 1. click toggle btn
const navbar_btn = document.querySelector('.navbar_btn');
const navbar = document.querySelector('.navbar');

navbar_btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
}); 

// 2. Mark out current page
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


// 3. program 선택 button 활성화
const muscle_btn = document.querySelector('#muscle_btn');
const strength_btn = document.querySelector('#strength_btn');
const muscle_cont = document.querySelector('.track_content_m');
const strength_cont = document.querySelector('.track_content_s');

// 초기 상태
muscle_btn.classList.add('active');
strength_cont.style.display = "none";

muscle_btn.addEventListener('click', function(event){
    // btn
    strength_btn.classList.remove('active');
    muscle_btn.classList.add('active');
    
    // content
    strength_cont.style.display = "none";
    muscle_cont.style.display = "flex";
});

strength_btn.addEventListener('click', function(event){
    // btn
    muscle_btn.classList.remove('active');
    strength_btn.classList.add('active');
    
    // content
    muscle_cont.style.display = "none";
    strength_cont.style.display = "flex";
});
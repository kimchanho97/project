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
if (muscle_btn) {muscle_btn.classList.add('active');}
if (strength_btn) {strength_cont.style.display = "none";}

if (muscle_btn){
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
}


const pages = document.querySelectorAll(".content .page");
const footer = document.querySelector(".footerbar");
let currentPage = 0;
let lastScrollTime = 0;

if (pages.length > 0){
    window.addEventListener("wheel", (event) => {
        const now = Date.now();
        if (now - lastScrollTime < 1000) {
            return; // 스크롤 움직임 간격이 1s보다 작으면 무시
        }
        lastScrollTime = now;

        if (event.deltaY > 0 && currentPage < pages.length - 1) {
          currentPage++;
        } else if (event.deltaY < 0 && currentPage > 0) {
          currentPage--;
        }
               
        pages.forEach((page) => {
            page.style.transform = `translateY(-${currentPage * 100}%)`;
        });
        console.log(currentPage * 100);
        console.log(event.deltaY);

        // 현재 페이지가 마지막 페이지인 경우에만 footer를 보여줌
        // if (currentPage == pages.length - 1) {
        //   footer.style.position = "relative";
        // } else {
        //   footer.style.position = "fixed";
        // }
      });
}


/* ============== Menu show Y hidden =============== */ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ============== Menu show hidden Off=============== */ 
/* 상수가 존재하는지 확인 */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ============== Menu show hidden On=============== */ 
/* 상수가 존재하는지 확인 */
if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    })
}







/* ============== Menu show hidden On Mobile =============== */ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))









/* ============== Skills list open =============== */ 
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    // 노드 간의 관계를 이용하여 접근하는 방법
    // parentNode 부모노드
    // step 2. 클릭한 녀석의 부모는 누구?? skills__content skills__close일수도 있고 skills__content skills__open일수도 있다.
    // 만일 skills__content skills__open이면 다시 닫는 역할이 되는 셈
    let itemClass = this.parentNode.className

    // step 3.우선 모두 닫아 놓는다. (이 효과는 클릭된 녀석만 열리고 전에 열린 녀석은 자동으로 닫힌다.)
    // skillsContent.length는 총 3개 (프론트엔드, 백엔드, 디자이너)
    for(let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    // step 4. 클릭된 녀석의 부모를 추적하여 그 요소의 클래스만 오픈 상태로 열어 놓는다.
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

// step 1. 화살표를 클릭하면 이제 그 요소를 중점으로 스킬 리스트가 관리 된다.
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})







/* ============== QUALIFICATION TABS =============== */ 
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // dataset 객체를 통해 data 속성을 가져오기 위해서는 속성 이름의 data- 뒷 부분을 사용
        const target = document.querySelector(tab.dataset.target)
        console.log(tab)

        tabContents.forEach(tabContent => {
            // step 1. 우선 모든 dataset ID 제거
            tabContent.classList.remove('qualification__active')
        })
        // step 2. 클릭한 주체의 엘리먼트만 ID 다시 추가
        target.classList.add('qualification__active')

    })
})
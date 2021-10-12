 https://californialuv.github.io/Personal-Portfolio/index.html


# 9.11 List menu, Skill bar point, Qualification point

  - List menu
  
    ![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/78064720/132952465-33c549af-59af-45e1-93da-2942f675eb67.gif)
    
    * addEventListener 클릭할 경우 List meun add and remove (Hiddne event)
    * 조건문을 통해 상수문 유무 판별 후 addEventListener 이벤트 실행
  
   
   <br></br>
   <br></br>
   
  - Skill bar point

    ![skill](https://user-images.githubusercontent.com/78064720/132952995-d18000bd-3a29-48a9-8b3c-480b9e9b7918.gif)
  
    * getElementsByClassName dom 메서드 응용하여 해당 엘리먼트 클래스명 탈취 (배열 상태)
    * 탈취한 변수를 forEach 메서드를 통해 각각 요소의 부모 엘리먼트 체크
    * 부모 엘리트먼스를 제외한 skill bar point 단락
   
   
    <br></br>
    <br></br>
   
  - Qualification point
    
    ![qualification](https://user-images.githubusercontent.com/78064720/132953136-da7ee45c-b2c0-4c7d-bfdc-a52a6a97b3d4.gif)

    * querySelectorAll dom 메서드 응용하여 해당 엘리먼트 클래스명 탈취
    * toggle swich 개념으로 접근
  
    <br></br>
    <br></br>

# 9.18 Service point

  - Service point
    
    ![service](https://user-images.githubusercontent.com/78064720/133095089-3179d230-2f83-481d-8111-a3002f549d4d.gif)

    * forEach 메서드 내부 함수 호출로 해당 오소 모달창 실행
    * x버튼 클릭시 모달창 종료 

    <br></br>
    <br></br>
    
    
# 9.24 Testimonial point
    
  - Testimonial point
 
    ![Testmonial](https://user-images.githubusercontent.com/78064720/134775095-1513fa85-b8e5-4677-88c4-007bcc4ac120.gif)
    
    * Swiper 엔진을 통한 UI 구현
     
     ```js
     
      let swiperTestimodial = new Swiper(".testimonial__container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints:{
         568:{
          slidesPerView:2,
        }
      }
      });
     
     ```
     
       
    <br></br>
    <br></br>

# 10.11 Scroll Up, Dark-Light Mod

  - Scroll Up
  
    ![scroll](https://user-images.githubusercontent.com/78064720/136957856-fb6519b9-eac4-4434-99a3-b4996b402b5e.gif)
  
    * scrollY 560 이상 좌표가 내려갔을 경우 Scroll Up 기능 렌더링되며 DOM 방식으로 add
    * 만일 클릭할 경우 다시 최상단 위치로 이동하며 DOM 방식으로 Remove

  - Dark-Light Mod
  
    ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/78064720/136959326-bff21f89-a21c-4c6d-bcfb-1023aed20fe7.gif)
    
    * 클릭 On, Off에 따라 아이콘 자동 변경
    * Dark Mod, Nomal Mod에 대한 CSS 기능 실현을 DOM으로 

    
  
    

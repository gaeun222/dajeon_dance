// 탑바 사이드바
function MobileTopBar__init() {
  $('.mobile-top-bar__btn').click(function() {
    MobileSideBar__show();
  });
}
function MobilesideBar__init() {
  $('.mobile-side-bar, .mobile-side-bar__btn-close').click(function() {
    MobileSideBar__hide();
  });
  
  $('.mobile-side-bar-box').click(function(){
    return false;
  });
}

function MobileSideBar__show() {
  $('.mobile-side-bar').addClass('active');
  $('html').addClass('mobile-side-bar-actived');
}

function MobileSideBar__hide() {
  $('.mobile-side-bar').removeClass('active');
  $('html').removeClass('mobile-side-bar-actived');
}

MobileTopBar__init();
MobilesideBar__init();

// 배너 스와이퍼
var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  }
});

// 캘린더
const calendarDays = document.querySelector(".calendar-days");

// 2025년 2월의 날짜 데이터
const daysInMonth = 28; // 윤년이 아니라 28일까지
const firstDayIndex = new Date(2025, 1, 1).getDay(); // 2월 1일의 요일

const events = {
  3: ["red"], 6: ["yellow"], 8: ["yellow", "blue"],
  11: ["red"], 20: ["yellow", "blue"], 24: ["yellow"], 27: ["red"]
};

for (let i = 0; i < firstDayIndex; i++) {
  const emptyCell = document.createElement("div");
  calendarDays.appendChild(emptyCell);
}

for (let day = 1; day <= daysInMonth; day++) {
  const dayCell = document.createElement("div");
  dayCell.textContent = day;

  if (events[day]) {
    events[day].forEach(color => {
      const eventDot = document.createElement("span");
      eventDot.classList.add("event", color);
      dayCell.appendChild(eventDot);
    });
  }

  calendarDays.appendChild(dayCell);
}


// 아코디언 메뉴
$(".que").click(function() {
  $(this).next(".anw").stop().slideToggle(300);
 $(this).toggleClass('on').siblings().removeClass('on');
 $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});

// 티켓 스와이퍼
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  centeredSlides: true,
  slidesPerGroupSkip: 0,
  grabCursor: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    360: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// aos 호출
AOS.init();


// notice 탭
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // a 
    
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});
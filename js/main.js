console.log(document.documentElement.scrollHeight);


const lnbTime = document.querySelector('.time li')

/* setInterval(() => {
  const time = new Date();
  lnbTime.innerHTML = time.toLocaleString();
}, 1000)
  */

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
});

setInterval(() => {
  const time = new Date();

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

  const dateTimeString = time.toLocaleString('ko-KR', options);

  lnbTime.innerHTML = dateTimeString;
  lnbTime.style.fontWeight = 'bold'
}, 1000);


const header = document.querySelector('.header');
const introPage = document.querySelector('.intro_Page');

const intro = document.querySelector('.intro');
const profile = document.querySelector('.profile');
const skill = document.querySelector('.skill');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');




/* myAnimation.scrollTrigger.kill(); */

/* $('.intro').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 900);
  return false;
}) */

$('.intro').on('click', function () {
  let scrollPosition = window.scrollY;
  let targetPosition = 4000;
  
  let duration = 800;
  if (scrollPosition >= targetPosition) {
    duration = 2800;
  }
  
  console.log('스크롤의 속도는?', duration);

  $('html, body').animate({
    scrollTop: 0
  }, duration);
  
  return false;
});

$('.profile').on('click', function () {
  let scrollPosition = window.scrollY;
  let targetPosition = 4000;
  
  let duration = 800;
  if (scrollPosition >= targetPosition) {
    duration = 2500;
  }
  $('html, body').animate({
    scrollTop: 1060
  }, duration);
  return false;
})

$('.skill').on('click', function () {
  let scrollPosition = window.scrollY;
  let targetPosition = 4000;
  
  let duration = 800;
  if (scrollPosition >= targetPosition) {
    duration = 2500;
  }

  $('html, body').animate({
    scrollTop: 2800
  }, duration);
  console.log('스크롤의 속도는?', duration);

  return false;
})


$('.project').on('click', function () {
  let newsPageBottom = $('.news_page_bottom');
  let targetScrollTop;
  let duration = 800;

  if (newsPageBottom.css('display') === 'none') {
      targetScrollTop = 6480;

      let scrollPosition = window.scrollY;
      let targetPosition = 6470;
      
      if (scrollPosition <= targetPosition) {
        duration = 2500;
      }

  } else {
      targetScrollTop = 3900;
  }


  $('html, body').animate({
      scrollTop: targetScrollTop
  }, duration);

  console.log('스크롤의 속도는?', duration);

  return false;

});

$('.contact').on('click', function () {
  let newsPageBottom = $('.news_page_bottom');
  let targetScrollTop;
  let duration = 800;
  if (newsPageBottom.css('display') === 'none') {
      targetScrollTop = 7880;
      let scrollPosition = window.scrollY;
      let targetPosition = 6470;
      
      if (scrollPosition <= targetPosition) {
        duration = 2800;
      }

  } else {
      targetScrollTop = 3900;
  }
  $('html, body').animate({
    scrollTop: targetScrollTop
},duration)
console.log('스크롤의 속도는?', duration);

return false;
});

const LanguageText = document.querySelector('.Language_box h3')
const LanguageText2 = document.querySelectorAll('.Language_box .num')
const FrameWorkText = document.querySelector('.FrameWork_h3')
const FrameWorkText2 = document.querySelector('.FrameWork_num')
const LibraryText = document.querySelector('.Library h3')
const LibraryText2 = document.querySelectorAll('.Library .num')
const etcText = document.querySelector('.etc_h3')
const etcText2 = document.querySelectorAll('.Etc_p')


window.addEventListener('scroll', () => {
  if (window.scrollY) {
    /* header.classList.add('fixed'); */
    header.style.top = '0px'
    /* intro.style.marginTop = '100px' */
    intro.style.color = 'red'

  } else {
    /* header.classList.remove('fixed'); */
    header.style.top = '20px'
    /* intro.style.marginTop = '120px' */
    intro.style.color = ''
  }

  if (window.scrollY >= 1060) {
    profile.style.color = 'red'
    intro.style.color = 'black'
    /* newsPage.classList.remove('zoom') */
  } else {
    profile.style.color = ''
    intro.style.color = ''

  }

  if (window.scrollY >= 2800) {
    profile.style.color = ''
    skill.style.color = 'red'

  } else {
    skill.style.color = ''
    LanguageText.style.color = ''
    FrameWorkText.style.color = ''
    LibraryText.style.color = ''
    etcText.style.color = ''
    FrameWorkText2.style.color = ''

    LanguageText2.forEach(Language2 => {
      Language2.style.color = ''
    });

    LibraryText2.forEach(Library2 => {
      Library2.style.color = ''
    })

    etcText2.forEach(etc2 => {
      etc2.style.color = ''
    })
  }


  if (window.scrollY >= 3800) {
    header.style.top = '-90px'
    skill.style.color = ''
  }
  

     if (window.scrollY >= 6400) {
      header.style.top = '0px'
      skill.style.color = ''
      project.style.color = 'red'
    }else {
      project.style.color = ''
  
    }

    if (window.scrollY >= 7750) {
      contact.style.color = 'red'
      project.style.color = ''
    } else {
      contact.style.color = ''
    }

});


const gitImg = document.querySelector('.gitImg')
const gitHubImg = document.querySelector('.gitHubImg')
const jqueryImg = document.querySelector('.jqueryImg')

const skillPageH2 = document.querySelector('.skill_page_h2')

const profileImg = document.querySelector('.profile_img')

const htmlImg = document.querySelector('.htmlImg')
const cssImg = document.querySelector('.cssImg')
const jsImg = document.querySelector('.jsImg')


profileImg.addEventListener('mouseover', () => {
  profileImg.src = "./img/본인/profile_Page_mouseover.png"
})

profileImg.addEventListener('mouseout', () => {
  profileImg.src = "./img/본인/profile_Page.png"
})

window.addEventListener('scroll', function () {
  // Get the current scroll position
  let scrollPosition = window.scrollY;
  // Set the desired scroll position
  let targetPosition = 2740; // Change this value to the desired scroll position
  // Check if the current scroll position is greater than or equal to the target position
  if (scrollPosition >= targetPosition) {
    // Animate the progress bars
    document.querySelector('.progress1').style.width = '85%';
    document.querySelector('.progress2').style.width = '85%';
    document.querySelector('.progress3').style.width = '65%';
    /* document.querySelector('.progress4').style.width = '40%'; */
    document.querySelector('.progress5').style.width = '60%';
    document.querySelector('.progress6').style.width = '70%';

    LanguageText.style.color = 'white'
    FrameWorkText.style.color = 'white'
    LibraryText.style.color = 'white'
    etcText.style.color = 'white'
    FrameWorkText2.style.color = 'white'
    skillPageH2.style.backgroundColor = 'rgba(255, 255, 255, 20%)'
    /* skillPageH2.style.color = 'black' */


    gitImg.style.filter = 'invert(100%)'
    gitHubImg.style.filter = 'invert(100%)'

    htmlImg.src = './img/icon/html-white.png';
    cssImg.src = './img/icon/css-white.png';
    jsImg.src = './img/icon/js-white.png';
    jqueryImg.src = './img/icon/jquery-white.png'

    LanguageText2.forEach(Language2 => {
      Language2.style.color = 'white'
    });

    LibraryText2.forEach(Library2 => {
      Library2.style.color = 'white'
    })

    etcText2.forEach(etc2 => {
      etc2.style.color = 'white'
    })




  } else {
    // Reset the progress bars to 0%
    document.querySelector('.progress1').style.width = '0%';
    document.querySelector('.progress2').style.width = '0%';
    document.querySelector('.progress3').style.width = '0%';
    /* document.querySelector('.progress4').style.width = '0%'; */
    document.querySelector('.progress5').style.width = '0%';
    document.querySelector('.progress6').style.width = '0%';


    LanguageText.style.color = ''
    FrameWorkText.style.color = ''
    LibraryText.style.color = ''
    etcText.style.color = ''
    FrameWorkText2.style.color = ''

    LanguageText2.forEach(Language2 => {
      Language2.style.color = ''
    });

    LibraryText2.forEach(Library2 => {
      Library2.style.color = ''
    })

    etcText2.forEach(etc2 => {
      etc2.style.color = ''
    })

    skillPageH2.style.backgroundColor = ''
    /* skillPageH2.style.color = '' */

    htmlImg.src = './img/icon/html.png';
    cssImg.src = './img/icon/css.png';
    jsImg.src = './img/icon/js.png';
    jqueryImg.src = './img/icon/jquery.png';


    gitImg.style.filter = ''
    gitHubImg.style.filter = ''

  }

});




gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".profile_right2",
      pin: false,
      start: "bottom +=70px",
      end: "100px",
      scrub: 1,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    document.body, {
      delay: 0.3,
      backgroundColor: "#000",
    },
    "start"
  )

  let tl =  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".news_page",
      pin: true,
      start: "top+=0px",
      end: "+=280%",
      scrub: 1,
    },
    defaults: {
      ease: "none",
    },
  })

  .to(
    ".news_page_top", {
      scale: 3,
      onUpdate: function() { // 스케일이 변경될 때마다 실행되는 콜백 함수
        let scale = gsap.getProperty(".news_page_top", "scale"); // 현재 스케일 값 가져오기
        if (scale > 1) { // 스케일이 1보다 크면 .news_page_bottom 페이드아웃
          $(".news_page_bottom").fadeOut(function (){
            $('.project_Page').fadeIn(1000, 'swing');
          });


        }
      }
    },
    "start"
  )
  .to(
    ".news_page_top", {
      opacity: 0,
    },
    "start"
  )

/*   .to(
    ".news_page_bottom", {
      delay: 0.1,
      scale: 1.5,
    },
    "start"
  )
  .to(
    ".news_page_bottom", {
      delay: 0,
      opacity: 1,
    },
    "start"
  )
 */
  .to(
    ".project_Page", {
      delay: 0,
      scale: 1,
    },
    "start"
  )
  .to(
    ".project_Page", {
      delay: 0,
      opacity: 1,
    },
    "start"
  )



$(".small_news_box")
  .on('mousemove', magnify)
  .prepend("<div class='magnifier'></div>")
  .children('.magnifier').css({
    "background": "url('" + $(".small_news").attr("src") + "') no-repeat"
  });

var target = $('.small_news');
var magnifier = $('.magnifier');


function magnify(e) {

  // 1
  var mouseX = e.pageX - $(this).offset().left;
  var mouseY = e.pageY - $(this).offset().top;

  // 2
  if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
    magnifier.fadeIn(100);
  } else {
    magnifier.fadeOut(100);
  }

  // 3
  if (magnifier.is(":visible")) {

    // 4    
    var rx = -(mouseX / target.width() * target[0].naturalWidth - magnifier.width() / 2);
    var ry = -(mouseY / target.height() * target[0].naturalHeight - magnifier.height() / 2);

    // 5
    var px = mouseX - magnifier.width() / 2;
    var py = mouseY - magnifier.height() / 2;

    // 6
    magnifier.css({
      left: px,
      top: py,
      backgroundPosition: rx + "px " + ry + "px"
    });
  }
}


const hiddenBtn = document.querySelector('.hidden_btn');


let targetScale = 1.5;
gsap.to(".news_page_bottom", {

  scale: targetScale,
  onUpdate: function () {
    let currentScale = gsap.getProperty(".news_page_bottom", "scale");
    if (currentScale >= targetScale) {
      gsap.to(".news_page_bottom", {
        opacity: 0
      });
      console.log("스케일의 크키가 1.5라면 오퍼시티 0을 부여합니다")
    }
  }
});

/* window.addEventListener('scroll', function () {
  // 스크롤 위치 감지
  let scrollPosition = window.scrollY;
  let targetPosition = 6300; // 원하는 위치
  let maxPosition = 6350; // 최대 위치
  let newsPageBottom = document.getElementById('news_page_bottom');
  let isNewsPageBottomVisible = getComputedStyle(newsPageBottom).opacity === '1';
  let isNewsPageBottomVisibles = getComputedStyle(newsPageBottom).display === 'none';

  if (scrollPosition >= targetPosition || scrollPosition <= maxPosition && isNewsPageBottomVisible) {
    // 스크롤 막기
    document.body.style.overflow = 'hidden';
  }

  if (isNewsPageBottomVisibles) {
    document.body.style.overflow = '';
  }

});
 */


/* let newsPageBottom = document.getElementById('news_page_bottom');

$(document).ready(function () {
  $('.hidden_btn').click(function () {
    $('.news_page_bottom').fadeOut(function () {
      $('.project_Page').fadeIn(1000, 'swing');
    });
    // 스크롤 활성화
    document.body.style.overflow = '';
  });
});
hiddenBtn.addEventListener('mouseover', () => {
  hiddenBtn.src = "./img/페이지꾸미기/on랜턴.png"
})


hiddenBtn.addEventListener('mouseout', () => {
  hiddenBtn.src = "./img/페이지꾸미기/off랜턴.png"
})


hiddenBtn.addEventListener('click', () => {

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 6400) {
      header.style.top = '0'
      project.style.color = 'red'
    } else {
      project.style.color = ''
    }

    if (window.scrollY >= 7400) {
      contact.style.color = 'red'
      project.style.color = ''
    } else {
      contact.style.color = ''
    }
  })




}) */


/* const hiddenDiv = document.querySelector(".hidden");
const starCount = 100;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  hiddenDiv.appendChild(star);
} */


const introVideo = document.querySelector('.intro_video')
const introVideoElement = document.querySelector(".intro_video_element");
const videoSkip = document.querySelector('.video_skip')


let videoTimer;

/* introVideoElement.addEventListener("loadeddata", () => {
  console.log("인트로비디오 로딩완료우, 스킵을 하지 않는다면 7.7초 뒤에 영상 종료");
  //document.body.style.overflow = 'hidden';
  videoTimer = setTimeout(() => {
    introVideo.classList.add("fade-out");
    console.log("7초 지남으로 인한 페이드 아웃");
  }, 7700);
}); */


videoSkip.addEventListener('click', () => {
  console.log("이건 스킵으로 인한 페이드 아웃");
  clearTimeout(videoTimer);
  introVideo.classList.add("fade-out");

})

introVideo.addEventListener("transitionend", (event) => {
  // transitionend 이벤트가 introVideo 요소에 의해 트리거되었는지 확인합니다.
  if (event.target === introVideo) {
    // introVideo 요소가 확대되었는지 확인합니다.
    const transform = window.getComputedStyle(introVideo).getPropertyValue("transform");
    if (transform === "matrix(2, 0, 0, 2, 0, 0)") {
      console.log("introVideo가 확대됨을 인식하고 인트로비디오 디스플레이 블럭해제 및 오버플로우 초기화 ");
      introVideo.style.display = "none";
      document.body.style.overflow = "";
    }
  }
});

const soloProject = document.querySelector('.solo_project1_box')
const reactProject = document.querySelector('.react_project1_box')
const timProject = document.querySelector('.tim_project1_box')
const loginProject = document.querySelector('.login_project1_box')

const soloReadMore = document.querySelector('.solo_project1-1 .read_more')
const reactReadMore = document.querySelector('.react_project1-1 .read_more')
const timReadMore = document.querySelector('.tim_project1-1 .read_more')
const loginReadMore = document.querySelector('.login_project1-1 .read_more')

const detailProject = document.querySelector('.detail_project')
const solodetailProject = document.querySelector('.solo_detail_project')
const timdetailProject = document.querySelector('.tim_detail_project')
const logindetailProject = document.querySelector('.login_detail_project')
const reactdetailProject = document.querySelector('.react_detail_project')

const projectPage = document.querySelector('.project_Page')
const projectPageBox = document.querySelector('.project_page_box')

const soloExit = document.querySelector('.solo_exit')
const timExit = document.querySelector('.tim_exit')
const loginExit = document.querySelector('.login_exit')

let reactReadMoreClick = false;
detailProject.style.visibility = 'hidden'
solodetailProject.style.visibility = 'hidden'
timdetailProject.style.visibility = 'hidden'
logindetailProject.style.visibility = 'hidden'
reactdetailProject.style.visibility = 'hidden'


soloReadMore.addEventListener('click', (event) => {
  event.preventDefault();
  solodetailProject.style.visibility = 'visible'
  soloProject.style.visibility = 'visible'
  soloProject1BoxLeft.style.visibility = 'visible'
  soloProject1BoxRight.style.visibility = 'visible'
  document.body.style.overflow = 'hidden'
})

timReadMore.addEventListener('click', (event) => {
  event.preventDefault();
  timdetailProject.style.visibility = 'visible'
  timProject.style.visibility = 'visible'
  timProject1BoxLeft.style.visibility = 'visible'
  timProject1BoxRight.style.visibility = 'visible'
  document.body.style.overflow = 'hidden'
})

loginReadMore.addEventListener('click', (event) => {
  event.preventDefault();
  logindetailProject.style.visibility = 'visible'
  loginProject.style.visibility = 'visible'
  loginProject1BoxLeft.style.visibility = 'visible'
  loginProject1BoxRight.style.visibility = 'visible'
  document.body.style.overflow = 'hidden'
})


function SwiperSolo1() {

  const swiper = new Swiper('.solo_project1_swiper', {

    loop: true,
    /* loopedSlides: 1, */

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    // If we need pagination
    pagination: {
      el: '.solo_project1_swiper .swiper-pagination',
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  });
}

SwiperSolo1();

function SwiperTim1() {

  const swiper = new Swiper('.tim_project1_swiper', {

    loop: true,
    /* loopedSlides: 1, */

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    // If we need pagination
    pagination: {
      el: '.tim_project1_swiper .swiper-pagination',
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  });
}

SwiperTim1();

function Swiperlogin() {

  const swiper = new Swiper('.login_project1_swiper', {

    loop: true,
    /* loopedSlides: 1, */

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    // If we need pagination
    pagination: {
      el: '.tim_project1_swiper .swiper-pagination',
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  });
}

Swiperlogin();

$('.moment_h2').html(function (i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

function profile_swiper() {


  const swiper = new Swiper(".profile_swiper", {
    direction: "horizontal",
    loop: true,

    effect: 'cards',
    grabCursor: true,

  });

}
profile_swiper();



const introVideoReplayImg = document.querySelector('.intro_video_replay_img')
const replayIco = document.querySelector('.replay_ico')


introVideoReplayImg.addEventListener('mouseover', () => {
  introVideoReplayImg.src = './img/본인/인트로영상다시보기호버.gif'
})

introVideoReplayImg.addEventListener('mouseout', () => {
  introVideoReplayImg.src = "./img/본인/인트로영상다시보기2.png"
})


introVideoReplayImg.addEventListener('click', () => {
  console.log('이미지를 통해 영상을 다시 클릭')
  introVideo.classList.remove("fade-out");
  introVideo.style.display = "block";
  introVideoElement.currentTime = 0;
  document.body.style.overflow = 'hidden';

  videoTimer = setTimeout(() => {
    introVideo.classList.add("fade-out");
    console.log('이미지를 통해 클릭된 영상 마무리')

  }, 7700);

});

replayIco.addEventListener('click', () => {
  console.log('아이콘을 통해 영상을 다시 클릭')
  introVideo.classList.remove("fade-out");
  introVideo.style.display = "block";
  introVideoElement.currentTime = 0;
  document.body.style.overflow = 'hidden';

  videoTimer = setTimeout(() => {
    introVideo.classList.add("fade-out");
    console.log('아이콘을 통해 클릭된 영상 마무리')
 
  }, 7700);
});




const soloProject1BoxLeft = document.querySelector('.solo_project1_box_left')
const soloProject1BoxRight = document.querySelector('.solo_project1_box_right')
const soloCodeView = document.querySelectorAll('.solo_code_view')

const timProject1BoxLeft = document.querySelector('.tim_project1_box_left')
const timProject1BoxRight = document.querySelector('.tim_project1_box_right')
const timCodeView = document.querySelectorAll('.tim_code_view')

const loginProject1BoxLeft = document.querySelector('.login_project1_box_left')
const loginProject1BoxRight = document.querySelector('.login_project1_box_right')
const loginCodeView = document.querySelectorAll('.login_code_view')


const soloProject1CodeContainer = document.querySelector('.solo_project1_code_container')
const timProject1CodeContainer = document.querySelector('.tim_project1_code_container')
const loginProject1CodeContainer = document.querySelector('.login_project1_code_container')

const soloProject1CodeReturn = document.querySelector('.solo_project1_code_return')
const timProject1CodeReturn = document.querySelector('.tim_project1_code_return')
const loginProject1CodeReturn = document.querySelector('.login_project1_code_return')

soloProject1CodeContainer.style.display = 'none'
timProject1CodeContainer.style.display = 'none'
loginProject1CodeContainer.style.display = 'none'

soloCodeView.forEach(soloCodeViewAll => {

  soloCodeViewAll.addEventListener('click', () => {
    console.log("코드리뷰 버튼을 클릭합니다")
    soloProject1BoxLeft.style.visibility = 'hidden'
    soloProject1BoxRight.style.visibility = 'hidden'
    soloProject1CodeContainer.style.display = 'block'
    console.log("정상작동시,개인프로젝트 박스 왼쪽 오른쪽을 히든처리, 코드 컨테이너의 디스플레이가 블럭처리됩니다 ")

  })
})

timCodeView.forEach(timCodeViewAll => {

  timCodeViewAll.addEventListener('click', () => {
    console.log("코드리뷰 버튼을 클릭합니다")
    timProject1BoxLeft.style.visibility = 'hidden'
    timProject1BoxRight.style.visibility = 'hidden'
    timProject1CodeContainer.style.display = 'block'
    console.log("정상작동시,개인프로젝트 박스 왼쪽 오른쪽을 히든처리, 코드 컨테이너의 디스플레이가 블럭처리됩니다 ")

  })
})


soloProject1CodeReturn.addEventListener('click', () => {
  soloProject1CodeContainer.style.display = 'none'
  soloProject1BoxLeft.style.visibility = 'visible'
  soloProject1BoxRight.style.visibility = 'visible'

})

timProject1CodeReturn.addEventListener('click', () => {
  timProject1CodeContainer.style.display = 'none'
  timProject1BoxLeft.style.visibility = 'visible'
  timProject1BoxRight.style.visibility = 'visible'

})


soloExit.addEventListener('click', () => {
  solodetailProject.style.visibility = 'hidden'
  soloProject.style.visibility = 'hidden'
  soloProject1BoxLeft.style.visibility = 'hidden'
  soloProject1BoxRight.style.visibility = 'hidden'
  soloProject1CodeContainer.style.display = 'none'
  document.body.style.overflow = ''
})

timExit.addEventListener('click', () => {
  timdetailProject.style.visibility = 'hidden'
  timProject.style.visibility = 'hidden'
  timProject1BoxLeft.style.visibility = 'hidden'
  timProject1BoxRight.style.visibility = 'hidden'
  timProject1CodeContainer.style.display = 'none'
  document.body.style.overflow = ''
})

loginExit.addEventListener('click', () => {
  logindetailProject.style.visibility = 'hidden'
  loginProject.style.visibility = 'hidden'
  loginProject1BoxLeft.style.visibility = 'hidden'
  loginProject1BoxRight.style.visibility = 'hidden'
  loginProject1CodeContainer.style.display = 'none'
  document.body.style.overflow = ''
})


const tabList = document.querySelectorAll('.solo_project1_tab_menu .list li');

for (let i = 0; i < tabList.length; i++) {
  let btn = tabList[i].querySelector('.btn')
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
      console.log("탭메뉴 실행")
    }
    this.parentNode.classList.add('is_on');
  })

}


function solo1CodeSwiper() {

  const swiper = new Swiper('.solo1_code_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.solo1_code_swiper .swiper-button-next',
      prevEl: '.solo1_code_swiper .swiper-button-prev',
    },

    pagination: {
      el: ".solo1_code_swiper .swiper-pagination",
      type: "progressbar",
    },
  });

}

solo1CodeSwiper();


const timtabList = document.querySelectorAll('.tim_project1_tab_menu .list li');

for (let i = 0; i < timtabList.length; i++) {
  let btn = timtabList[i].querySelector('.btn')
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (let j = 0; j < timtabList.length; j++) {
      timtabList[j].classList.remove('is_on');
      console.log("탭메뉴 실행")
    }
    this.parentNode.classList.add('is_on');
  })

}

function timCodeSwiper() {

  const swiper = new Swiper('.tim_code_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.tim_code_swiper .swiper-button-next',
      prevEl: '.tim_code_swiper .swiper-button-prev',
    },

    pagination: {
      el: ".tim_code_swiper .swiper-pagination",
      type: "progressbar",
    },
  });

}

timCodeSwiper();


AOS.init();
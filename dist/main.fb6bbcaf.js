// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
console.log(document.documentElement.scrollHeight);
var lnbTime = document.querySelector('.time li');

/* setInterval(() => {
  const time = new Date();
  lnbTime.innerHTML = time.toLocaleString();
}, 1000)
  */

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
});
setInterval(function () {
  var time = new Date();
  var options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };
  var dateTimeString = time.toLocaleString('ko-KR', options);
  lnbTime.innerHTML = dateTimeString;
  lnbTime.style.fontWeight = 'bold';
}, 1000);
var header = document.querySelector('.header');
var introPage = document.querySelector('.intro_Page');
var intro = document.querySelector('.intro');
var profile = document.querySelector('.profile');
var skill = document.querySelector('.skill');
var project = document.querySelector('.project');
var contact = document.querySelector('.contact');

/* myAnimation.scrollTrigger.kill(); */

/* $('.intro').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 900);
  return false;
}) */

$('.intro').on('click', function () {
  var scrollPosition = window.scrollY;
  var targetPosition = 4000;
  var duration = 800;
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
  var scrollPosition = window.scrollY;
  var targetPosition = 4000;
  var duration = 800;
  if (scrollPosition >= targetPosition) {
    duration = 2500;
  }
  $('html, body').animate({
    scrollTop: 1060
  }, duration);
  return false;
});
$('.skill').on('click', function () {
  var scrollPosition = window.scrollY;
  var targetPosition = 4000;
  var duration = 800;
  if (scrollPosition >= targetPosition) {
    duration = 2500;
  }
  $('html, body').animate({
    scrollTop: 2800
  }, duration);
  console.log('스크롤의 속도는?', duration);
  return false;
});
$('.project').on('click', function () {
  var newsPageBottom = $('.news_page_bottom');
  var targetScrollTop;
  var duration = 800;
  if (newsPageBottom.css('display') === 'none') {
    targetScrollTop = 6480;
    var scrollPosition = window.scrollY;
    var targetPosition = 6470;
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
  var newsPageBottom = $('.news_page_bottom');
  var targetScrollTop;
  var duration = 800;
  if (newsPageBottom.css('display') === 'none') {
    targetScrollTop = 7880;
    var scrollPosition = window.scrollY;
    var targetPosition = 6470;
    if (scrollPosition <= targetPosition) {
      duration = 2800;
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
var LanguageText = document.querySelector('.Language_box h3');
var LanguageText2 = document.querySelectorAll('.Language_box .num');
var FrameWorkText = document.querySelector('.FrameWork_h3');
var FrameWorkText2 = document.querySelector('.FrameWork_num');
var LibraryText = document.querySelector('.Library h3');
var LibraryText2 = document.querySelectorAll('.Library .num');
var etcText = document.querySelector('.etc_h3');
var etcText2 = document.querySelectorAll('.Etc_p');
window.addEventListener('scroll', function () {
  if (window.scrollY) {
    /* header.classList.add('fixed'); */
    header.style.top = '0px';
    /* intro.style.marginTop = '100px' */
    intro.style.color = 'red';
  } else {
    /* header.classList.remove('fixed'); */
    header.style.top = '20px';
    /* intro.style.marginTop = '120px' */
    intro.style.color = '';
  }
  if (window.scrollY >= 1060) {
    profile.style.color = 'red';
    intro.style.color = 'black';
    /* newsPage.classList.remove('zoom') */
  } else {
    profile.style.color = '';
    intro.style.color = '';
  }
  if (window.scrollY >= 2800) {
    profile.style.color = '';
    skill.style.color = 'red';
  } else {
    skill.style.color = '';
    LanguageText.style.color = '';
    FrameWorkText.style.color = '';
    LibraryText.style.color = '';
    etcText.style.color = '';
    FrameWorkText2.style.color = '';
    LanguageText2.forEach(function (Language2) {
      Language2.style.color = '';
    });
    LibraryText2.forEach(function (Library2) {
      Library2.style.color = '';
    });
    etcText2.forEach(function (etc2) {
      etc2.style.color = '';
    });
  }
  if (window.scrollY >= 3800) {
    header.style.top = '-90px';
    skill.style.color = '';
  }
  /* else {
     header.style.top = ''
   } */
});

var gitImg = document.querySelector('.gitImg');
var gitHubImg = document.querySelector('.gitHubImg');
var jqueryImg = document.querySelector('.jqueryImg');
var skillPageH2 = document.querySelector('.skill_page_h2');
var profileImg = document.querySelector('.profile_img');
var htmlImg = document.querySelector('.htmlImg');
var cssImg = document.querySelector('.cssImg');
var jsImg = document.querySelector('.jsImg');
profileImg.addEventListener('mouseover', function () {
  profileImg.src = "./img/본인/profile_Page_mouseover.png";
});
profileImg.addEventListener('mouseout', function () {
  profileImg.src = "./img/본인/profile_Page.png";
});
window.addEventListener('scroll', function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY;
  // Set the desired scroll position
  var targetPosition = 2740; // Change this value to the desired scroll position
  // Check if the current scroll position is greater than or equal to the target position
  if (scrollPosition >= targetPosition) {
    // Animate the progress bars
    document.querySelector('.progress1').style.width = '85%';
    document.querySelector('.progress2').style.width = '85%';
    document.querySelector('.progress3').style.width = '65%';
    document.querySelector('.progress4').style.width = '40%';
    document.querySelector('.progress5').style.width = '60%';
    document.querySelector('.progress6').style.width = '70%';
    LanguageText.style.color = 'white';
    FrameWorkText.style.color = 'white';
    LibraryText.style.color = 'white';
    etcText.style.color = 'white';
    FrameWorkText2.style.color = 'white';
    skillPageH2.style.backgroundColor = 'rgba(255, 255, 255, 20%)';
    /* skillPageH2.style.color = 'black' */

    gitImg.style.filter = 'invert(100%)';
    gitHubImg.style.filter = 'invert(100%)';
    htmlImg.src = './img/icon/html-white.png';
    cssImg.src = './img/icon/css-white.png';
    jsImg.src = './img/icon/js-white.png';
    jqueryImg.src = './img/icon/jquery-white.png';
    LanguageText2.forEach(function (Language2) {
      Language2.style.color = 'white';
    });
    LibraryText2.forEach(function (Library2) {
      Library2.style.color = 'white';
    });
    etcText2.forEach(function (etc2) {
      etc2.style.color = 'white';
    });
  } else {
    // Reset the progress bars to 0%
    document.querySelector('.progress1').style.width = '0%';
    document.querySelector('.progress2').style.width = '0%';
    document.querySelector('.progress3').style.width = '0%';
    document.querySelector('.progress4').style.width = '0%';
    document.querySelector('.progress5').style.width = '0%';
    document.querySelector('.progress6').style.width = '0%';
    LanguageText.style.color = '';
    FrameWorkText.style.color = '';
    LibraryText.style.color = '';
    etcText.style.color = '';
    FrameWorkText2.style.color = '';
    LanguageText2.forEach(function (Language2) {
      Language2.style.color = '';
    });
    LibraryText2.forEach(function (Library2) {
      Library2.style.color = '';
    });
    etcText2.forEach(function (etc2) {
      etc2.style.color = '';
    });
    skillPageH2.style.backgroundColor = '';
    /* skillPageH2.style.color = '' */

    htmlImg.src = './img/icon/html.png';
    cssImg.src = './img/icon/css.png';
    jsImg.src = './img/icon/js.png';
    jqueryImg.src = './img/icon/jquery.png';
    gitImg.style.filter = '';
    gitHubImg.style.filter = '';
  }
});
gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
  scrollTrigger: {
    trigger: ".profile_right2",
    pin: false,
    start: "bottom +=70px",
    end: "100px",
    scrub: 1
  },
  defaults: {
    ease: "none"
  }
}).to(document.body, {
  delay: 0.3,
  backgroundColor: "#000"
}, "start");
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".news_page",
    pin: true,
    start: "top+=0px",
    end: "+=280%",
    scrub: 1
  },
  defaults: {
    ease: "none"
  }
}).to(".news_page_top", {
  scale: 3,
  onUpdate: function onUpdate() {
    // 스케일이 변경될 때마다 실행되는 콜백 함수
    var scale = gsap.getProperty(".news_page_top", "scale"); // 현재 스케일 값 가져오기
    if (scale > 1) {
      // 스케일이 1보다 크면 .news_page_bottom 페이드아웃
      $(".news_page_bottom").fadeOut(function () {
        $('.project_Page').fadeIn(1000, 'swing');
      });
    }
  }
}, "start").to(".news_page_top", {
  opacity: 0
}, "start")

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
 */.to(".project_Page", {
  delay: 0,
  scale: 1
}, "start").to(".project_Page", {
  delay: 0,
  opacity: 1
}, "start");
$(".small_news_box").on('mousemove', magnify).prepend("<div class='magnifier'></div>").children('.magnifier').css({
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
var hiddenBtn = document.querySelector('.hidden_btn');
var targetScale = 1.5;
gsap.to(".news_page_bottom", {
  scale: targetScale,
  onUpdate: function onUpdate() {
    var currentScale = gsap.getProperty(".news_page_bottom", "scale");
    if (currentScale >= targetScale) {
      gsap.to(".news_page_bottom", {
        opacity: 0
      });
      console.log("스케일의 크키가 1.5라면 오퍼시티 0을 부여합니다");
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

var introVideo = document.querySelector('.intro_video');
var introVideoElement = document.querySelector(".intro_video_element");
var videoSkip = document.querySelector('.video_skip');
var videoTimer;

/* introVideoElement.addEventListener("loadeddata", () => {
  console.log("인트로비디오 로딩완료우, 스킵을 하지 않는다면 7.7초 뒤에 영상 종료");
  //document.body.style.overflow = 'hidden';
  videoTimer = setTimeout(() => {
    introVideo.classList.add("fade-out");
    console.log("7초 지남으로 인한 페이드 아웃");
  }, 7700);
}); */

videoSkip.addEventListener('click', function () {
  console.log("이건 스킵으로 인한 페이드 아웃");
  clearTimeout(videoTimer);
  introVideo.classList.add("fade-out");
});
introVideo.addEventListener("transitionend", function (event) {
  // transitionend 이벤트가 introVideo 요소에 의해 트리거되었는지 확인합니다.
  if (event.target === introVideo) {
    // introVideo 요소가 확대되었는지 확인합니다.
    var transform = window.getComputedStyle(introVideo).getPropertyValue("transform");
    if (transform === "matrix(2, 0, 0, 2, 0, 0)") {
      console.log("introVideo가 확대됨을 인식하고 인트로비디오 디스플레이 블럭해제 및 오버플로우 초기화 ");
      introVideo.style.display = "none";
      document.body.style.overflow = "";
    }
  }
});
var soloProject = document.querySelector('.solo_project1_box');
var reactProject = document.querySelector('.react_project1_box');
var timProject = document.querySelector('.tim_project1_box');
var loginProject = document.querySelector('.login_project1_box');
var soloReadMore = document.querySelector('.solo_project1-1 .read_more');
var reactReadMore = document.querySelector('.react_project1-1 .read_more');
var timReadMore = document.querySelector('.tim_project1-1 .read_more');
var loginReadMore = document.querySelector('.login_project1-1 .read_more');
var detailProject = document.querySelector('.detail_project');
var projectPage = document.querySelector('.project_Page');
var projectPageBox = document.querySelector('.project_page_box');
var soloExit = document.querySelector('.solo_exit');
var reactReadMoreClick = false;
detailProject.style.visibility = 'hidden';
soloReadMore.addEventListener('click', function (event) {
  event.preventDefault();
  detailProject.style.visibility = 'visible';
  soloProject.style.visibility = 'visible';
  soloProject1BoxLeft.style.visibility = 'visible';
  soloProject1BoxRight.style.visibility = 'visible';
  document.body.style.overflow = 'hidden';
});
function SwiperSolo1() {
  var swiper = new Swiper('.solo_project1_swiper', {
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
      slideShadows: true
    },
    // If we need pagination
    pagination: {
      el: '.solo_project1_swiper .swiper-pagination'
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    }
  });
}
SwiperSolo1();
$('.moment_h2').html(function (i, html) {
  var chars = $.trim(html).split("");
  return '<span>' + chars.join('</span><span>') + '</span>';
});
function profile_swiper() {
  var swiper = new Swiper(".profile_swiper", {
    direction: "horizontal",
    loop: true,
    effect: 'cards',
    grabCursor: true
  });
}
profile_swiper();
var introVideoReplayImg = document.querySelector('.intro_video_replay_img');
var replayIco = document.querySelector('.replay_ico');
introVideoReplayImg.addEventListener('mouseover', function () {
  introVideoReplayImg.src = './img/본인/인트로영상다시보기호버.gif';
});
introVideoReplayImg.addEventListener('mouseout', function () {
  introVideoReplayImg.src = "./img/본인/인트로영상다시보기2.png";
});
introVideoReplayImg.addEventListener('click', function () {
  console.log('이미지를 통해 영상을 다시 클릭');
  introVideo.classList.remove("fade-out");
  introVideo.style.display = "block";
  introVideoElement.currentTime = 0;
  document.body.style.overflow = 'hidden';
  videoTimer = setTimeout(function () {
    introVideo.classList.add("fade-out");
    console.log('이미지를 통해 클릭된 영상 마무리');
  }, 7700);
});
replayIco.addEventListener('click', function () {
  console.log('아이콘을 통해 영상을 다시 클릭');
  introVideo.classList.remove("fade-out");
  introVideo.style.display = "block";
  introVideoElement.currentTime = 0;
  document.body.style.overflow = 'hidden';
  videoTimer = setTimeout(function () {
    introVideo.classList.add("fade-out");
    console.log('아이콘을 통해 클릭된 영상 마무리');
  }, 7700);
});
var soloProject1BoxLeft = document.querySelector('.solo_project1_box_left');
var soloProject1BoxRight = document.querySelector('.solo_project1_box_right');
var soloCodeView = document.querySelectorAll('.solo_code_view');
var soloProject1CodeContainer = document.querySelector('.solo_project1_code_container');
var soloProject1CodeReturn = document.querySelector('.solo_project1_code_return');
soloProject1CodeContainer.style.display = 'none';
soloCodeView.forEach(function (soloCodeViewAll) {
  soloCodeViewAll.addEventListener('click', function () {
    console.log("코드리뷰 버튼을 클릭합니다");
    soloProject1BoxLeft.style.visibility = 'hidden';
    soloProject1BoxRight.style.visibility = 'hidden';
    soloProject1CodeContainer.style.display = 'block';
    console.log("정상작동시,개인프로젝트 박스 왼쪽 오른쪽을 히든처리, 코드 컨테이너의 디스플레이가 블럭처리됩니다 ");
  });
});
soloProject1CodeReturn.addEventListener('click', function () {
  soloProject1CodeContainer.style.display = 'none';
  soloProject1BoxLeft.style.visibility = 'visible';
  soloProject1BoxRight.style.visibility = 'visible';
});
soloExit.addEventListener('click', function () {
  detailProject.style.visibility = 'hidden';
  soloProject.style.visibility = 'hidden';
  soloProject1BoxLeft.style.visibility = 'hidden';
  soloProject1BoxRight.style.visibility = 'hidden';
  soloProject1CodeContainer.style.display = 'none';
  document.body.style.overflow = '';
});
var tabList = document.querySelectorAll('.solo_project1_tab_menu .list li');
for (var i = 0; i < tabList.length; i++) {
  var btn = tabList[i].querySelector('.btn');
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
      console.log("탭메뉴 실행");
    }
    this.parentNode.classList.add('is_on');
  });
}
function solo1CodeSwiper() {
  var swiper = new Swiper('.solo1_code_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.solo1_code_swiper .swiper-button-next',
      prevEl: '.solo1_code_swiper .swiper-button-prev'
    },
    pagination: {
      el: ".solo1_code_swiper .swiper-pagination",
      type: "progressbar"
    }
  });
}
solo1CodeSwiper();
AOS.init();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55127" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map

//Navbar
const btnOpen = document.querySelector(".btn-open");
btnOpen.addEventListener("click", () => {
  const element = document.querySelector(".responsive-nav");
  element.classList.toggle("active");
});
//Arc section photos
const btnGroup = document.querySelectorAll(".btns");
const img = document.getElementById("imgs");
const img2 = document.getElementById("imgs2");
btnGroup.forEach((e, i) => {
  btnGroup[2].style.color = "red";
  e.addEventListener("click", () => {
    img.src = `img/${i + 1}.jpg`;
    if (i < 1) {
      $(img2).attr('src', )
      img2.src = `img/3.jpg`;
    } else {
      img2.src = `img/${i}.jpg`;
    }

    e.style.color = "red";
    btnGroup.forEach((elem) => {
      if (e !== elem) {
        $(elem).css('transition', 'all 400ms linear');
        elem.style.color = "white";
        elem.style.transition = "all 400ms linear";
      }
    });
  });
});

/* Color Change */
const target = document.querySelector(".change");
const callback = (entries) => {
  if (entries[0].isIntersecting) {
    siyah();
  } else {
    beyaz();
  }
  console.log(entries[0]);
};
const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(target);

const siyah = () => {
  document.querySelector("body").classList.add("changed-body");
};
const beyaz = () => {
  document.querySelector("body").classList.remove("changed-body");

};




var video = $('#my-video')[0];
var video_wrapper = $('#my-video-boundary');
$(document.body).on('touchmove', VideoChanger); // for mobile
$(window).on('scroll', VideoChanger);





video.ontimeupdate = function(){
  // var current_time = video.currentTime;
  // var duration = video.duration;

  // var distance = (duration/ current_time);
  // $(window).scrollTop( video_wrapper.height() / distance);
}

function VideoChanger(){
  var scrool_pos = $(window).scrollTop();
  var video_duration = video.duration;

  var video_wrapper_height = video_wrapper.height();

  if(scrool_pos > 0 &&  scrool_pos < video_wrapper_height){

    var distance = (video_wrapper_height / scrool_pos);
    var current = (video_duration / distance);
    console.log(current);

    video.currentTime = current;
  }

  // (10 - 100 ) / 100

  // console.log(video.currentTime);
  // console.log(video_wrapper_height);
}




// // Scrolly Frame
// const video = document.getElementById("my-video");
// const videoBoundary = document.getElementById("my-video-boundary");
// let intersecting = false;
// let lastScrollPos = window.scrollY;

// const scrollVideo = () => {
// if (!intersecting) return;

// if (video.duration && lastScrollPos !== window.scrollY) {
//   lastScrollPos = window.scrollY;
//   const distanceFromTop =
//     window.scrollY + videoBoundary.getBoundingClientRect().top;
//   const rawPercentScrolled =
//     (window.scrollY - distanceFromTop) /
//     (videoBoundary.scrollHeight - window.innerHeight);
//   const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

//   video.currentTime = video.duration * percentScrolled;

//   console.log('---------------------------------------');
//   console.log('---------------------------------------');
//   console.log('distanceFromTop' ,distanceFromTop);
//   console.log('rawPercentScrolled', rawPercentScrolled);
//   console.log('window.scrollY', window.scrollY);
//   console.log('videoBoundary.scrollHeight', videoBoundary.scrollHeight);
//   console.log('window.innerHeight', window.innerHeight);
//   console.log('percentScrolled', percentScrolled);
  
//   console.log('---------------------------------------');
//   console.log('---------------------------------------');
// }

// requestAnimationFrame(scrollVideo);
// };


// document.addEventListener("DOMContentLoaded", (_) => {
// const options = {
//   root: null, //relative to viewport
//   rootMargin: "0px",
//   threshold: 0,
// };

// const observer = new IntersectionObserver((entries) => {
//   intersecting = entries[0].isIntersecting;
//   scrollVideo();
// }, options);
// observer.observe(video);
// });














$(window).scroll(function () {
  var video_height = $('#my-video-boundary').height();
  var duration = $('#my-video')[0].duration;

  var min_scrool_pos = (video_height / duration) * 6.5;

  var scrool_pos = $(window).scrollTop();
  var header_obj = $('header.header');
  var header_objj = $('.down-btn');

  if(scrool_pos >= min_scrool_pos && scrool_pos <= video_height){
    
    header_obj.css('transform', 'translateY(-500px)');
  }
  else {
    
  header_obj.css('transform', 'translateY(0)');
  }

  if (scrool_pos >= video_height){
  header_obj.css('background-color', 'rgba(255, 255, 255, .732)');
  }
  else {
  header_obj.css('background-color', 'transparent');
  }

  if(scrool_pos >= min_scrool_pos){
    header_objj.css('display', 'none');
  }
  else {
    header_objj.css('display', 'block');
  }

});

var amountScrolled = 500;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('.top-btn').addClass('show');
  } else {
    $('.top-btn').removeClass('show');
  }
});
$('.top-btn').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

$(document).ready(function () {
  $(".reg").click(function () {
      $(".pop").fadeIn(500);
      positionPopup();
  });

  $(".pop > span, .pop").click(function () {
      $(".pop").fadeOut(500);
  });
});

document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");
function n(t) {
  e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

var swiper = new Swiper(".post-slider", {
  slidesPerView: 1,
  clickable: true,
  navigation: {
    nextEl: ".post-arrows .swiper-button-next",
    prevEl: ".post-arrows .swiper-button-prev",
  },
});
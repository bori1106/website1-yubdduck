// nav
$(function () {

    $("#nav-container > ul.nav-menu > li").hover(function () {
        $(this).children("ul.sub").stop().slideDown();
    }, function () {
        $(this).children("ul.sub").stop().slideUp();
    });

});

// 토글메뉴
    function toggle_btn() {
        var e = document.getElementsByClassName('nav-menu')[0];
        e.style.display = ((e.style.display == 'none') ? 'block' : 'none');
    }

//BX슬라이더 실행을 위한 코드
$(document).ready(function () {
     $('.mainslide').bxSlider({
            auto: true, //자동실행
            touchEnabled: false, //링크 걸리게 설정
            slideWidth: 1500, //슬라이드 가로크기
        });
    });
$(document).ready(function() {
    $(".arrow a i").hide(); // 초기화: display: none;
  
    $(window).scroll(function(){
      if ($(this).scrollTop() > 600) { // 600 넘으면 보임
        $(".arrow a i").fadeIn(600);   // 0.8초
      } else {
        $(".arrow a i").fadeOut("slow"); // 600 이하이면 안보임, slow=느리게
      }
    });
  });
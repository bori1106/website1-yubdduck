$(function () {

    $("ul.que").click(function () {
        $(this).next().slideToggle().siblings("ul.ans").hide();

        var srcVal = $(this).find("i").attr("class");
        console.log(srcVal);

        if (srcVal == "fa-solid fa-plus") {
            $(this).find("i").attr({ "class": srcVal.replace("plus", "minus") })
        } else {
            $(this).find("i").attr({ "class": srcVal.replace("minus", "plus") })
        }

        $(this).siblings().find("i").attr({ "class": srcVal.replace("minus", "plus") })

    });

});

// $(function () {
//   $("ul.que").click(function () {
//     // 클릭한 질문의 바로 다음 답변을 토글하고, 나머지 답변은 숨김
//     $(this).next("ul.ans").slideToggle()
//       .siblings("ul.ans").hide();

//     // 클릭한 질문의 아이콘 토글
//     var $icon = $(this).find("i");
//     var iconClass = $icon.attr("class");
//     console.log(iconClass);

//     if (iconClass.indexOf("fa-plus") !== -1) {
//       $icon.attr("class", iconClass.replace("plus", "minus"));
//     } else {
//       $icon.attr("class", iconClass.replace("minus", "plus"));
//     }

//     // 다른 질문 항목들의 아이콘을 기본(+로) 초기화
//     $(this).siblings("ul.que").find("i")
//       .attr("class", "fa-solid fa-plus");
//   });
// });
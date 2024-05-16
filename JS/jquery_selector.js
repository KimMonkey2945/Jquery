$(function () {
  $("button").click(function () {
    // $("*").css("background-color", "red")
    // $(this).css("background-color", "red") // * -> universal selector , this는 호출한 대상
    // $("p.intro").css("background-color", "red")
    // $("p. intro").css("background-color", "red") //  띄어쓰기는 p의 후손을 찾는 것(후손 선택자)
    // $("p:first").css("background-color", "red")
    // $("p:last").css("background-color", "red") // :(콜론)을 사용할 수도 있음.

    // $("ul li:last").css("background-color", "red")
    // $("ul li:last-child").css("background-color", "red") // 위는 한줄만 색이 변함.

    // $("[href]").css("background-color", "red") // 속성은 [] 사용
    // $("a[href='ab']").css("background-color", "green")
    // $("a[href !='ab']").css("background-color", "green")

    // $("tr:even").css("background-color", "green")
    $("tr:odd").css("background-color", "green")
  })
})
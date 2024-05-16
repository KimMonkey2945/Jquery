$(function () {
  $(".outer").mouseover(function () {
    console.log("마우스오버 이벤트발생!!")
  })
  $(".outer").hover(function () {
    console.log("호버 이벤트발생!!")
  })
})
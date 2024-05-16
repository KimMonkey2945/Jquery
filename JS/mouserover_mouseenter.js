$(function () {
  $('.outer').mouseover(function () {
    console.log('마우스 오버 이벤트발생!!')
  })
  $('.outer').mouseenter(function () {
    console.log('마우스 엔터 이벤트발생!!')
  })

  // 가려져있을 때는 오버이벤트만 발생.
  // 이벤트 버블은 오버에만 발생.

  $('.inner').mouseover(function () {
    console.log('inner 마우스 오버 이벤트발생!!')
  })
  $('.inner').mouseenter(function () {
    console.log('inner 마우스 엔터 이벤트발생!!')
  })
})
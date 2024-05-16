$(function () {
  // $('img').on("click", function () {
  //   $(this).hide('slow') // 속도조절까지 가능 ex)3000ms 3초 후에 사라짐.
  // })
  $('img').on("click", function () {
    $(this).hide('slow', function () {
      alert('이미지 사라짐.')
    }) // 콜백함수도 넣을 수 있음.
  })
  $('#btn_show').on("click", function () {
    $('img').show();
  })
})
$(function () {
  $('#btn_set').on('click', function () {
    // $('#set1').text("변경된 값")
    // $('#set1').html("<b>변경된 값2</b>")
    // $('#email').val("aaa@naver.com")
    // $('.set1').text(function (i, origText) {
    //   return '현대건설힐스테이트배구단 ' + origText + ' 입니다. (' + i + ')'
    // })
    // $('a').attr('href', '현대건설힐스테이트배구단')
    $('a').attr('href', function (i, origText) {
      return origText + '현대건설힐스테이트 배구단 ( ' + i + ' )'
    })

  })

  // $('#btn_get').on('click', function () {
  //   alert($('#email').val())
  // })


})
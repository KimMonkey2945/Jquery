$(function () {
  $('#btn_fade_in').on('click', function () {
    $('div#a').fadeIn()
    $('div#b').fadeIn('slow', function () {
      alert('다 끝나지 않았습니다.')
    })
    $('div#c').fadeIn(5000)
  })

  $('#btn_fade_out').on('click', function () {
    $('div#a').fadeOut()
    $('div#b').fadeOut('slow', function () {
      alert('다 끝나지 않았습니다.')
    })
    $('div#c').fadeOut(5000)
  })

  $('#btn_fade_toggle').on('click', function () {
    $('div#a').fadeToggle()
    $('div#b').fadeToggle('slow', function () {
      alert('다 끝나지 않았습니다.')
    })
    $('div#c').fadeToggle(5000)
  })

  $('#btn_fade_to').on('click', function () {
    $('div#a').fadeTo("slow", 0.5)
  })

})
$(function () {
  $('#btn').on('click', function () {
    const img = $('<img></img>').attr('src', '/img/황연주.gif')
    const img2 = $('<img></img>').attr('src', '/img/김주하5.png')
    // $('#img1').before('<img src="/img/김주하5.png">').after('<img src="/img/황연주.gif">')
    $('#img1').before(img).after(img2)
  })
})
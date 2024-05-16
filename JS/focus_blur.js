$(function () {
  // $("input").focus(function () {
  //   $(this).css("background-color", "yellow")
  // })
  // $("input").blur(function () {
  //   $(this).css("background-color", "pink")
  // })

  $("[type='text']").focus(function () {
    $(this).css("background-color", "yellow")
  })
  $("[type='text']").blur(function () {
    $(this).css("background-color", "pink")
  })

})
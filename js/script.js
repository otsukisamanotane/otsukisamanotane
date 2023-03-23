// ページトップ表示
// ある程度スクロールしたら、フェードイン

$(window).scroll(function () {
  var sc = $(window).scrollTop();
  // console.log(sc);
  if (sc > 500) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

$(".hmenu").click(function () {
  // モバイルメニューA
  //   $("nav").slideToggle(500);
  $(this).toggleClass("close");
  return false;
});

// モバイルメニューB
$(".container").click(function () {
  $(".hmenu").removeClass("close");
});

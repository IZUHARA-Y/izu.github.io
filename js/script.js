$(function () {

  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      1000,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  // タイプライター風文字表示
  var $allMsg = $('.js-split');
  var $lineList = $allMsg.html().split('<br>');
  var $wordList = $lineList[0].split('');
  for (var i = 1, len = $lineList.length; i < len; i++) {
    $wordList.push('<br>');
    Array.prototype.push.apply($wordList, $lineList[i].split(''));
  }
  $('.js-split').html("");
  $.each($wordList, function (idx, elem) {
    var newEL = $("<span/>").html(elem).css({
      opacity: 0
    });
    newEL.appendTo($allMsg);
    newEL.delay(idx * 200);
    newEL.animate({
      opacity: 1
    }, 1100);
  });

  // ハンバーガーメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
    $('.js-toggle-sp-menu-content').toggleClass('active');
    $('.js-toggle-sp-menu-button').toggleClass('active');
  });

  // ハンバーガーメニュー閉じる
  $('.js-toggle-sp-menu-content').on('click', function () {
    $('.js-toggle-sp-menu').removeClass('active');
    $('.js-toggle-sp-menu-content').removeClass('active');
    $('.js-toggle-sp-menu-target').removeClass('active');
    $('.js-toggle-sp-menu-button').removeClass('active');
  });

});

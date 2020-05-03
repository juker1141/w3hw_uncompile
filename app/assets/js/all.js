// layout的mobile的header收合
$('.ham-icon').click(function(e) {
  e.preventDefault();
  $('.menu').toggleClass('active')
})

// Q&A頁面問答收合
// 隱藏所有的 li 內文
$('.card_item_body').hide();
// 預設讓第一個 li 加上 active
$('.card_item').eq(0).addClass('active');
// 預設讓第一個 li 內文 顯示
$('.card_item_body').eq(0).show();

// 點擊 li
$('.card_item').click(function (e) {
  // 取消預設 event 事件
  e.preventDefault(); 
  // 加上 active 屬性，並把其他有 active 的移除
  $(this).toggleClass('active').siblings().removeClass('active');
  // 讓自己的 li body 切換收合
  $(this).children().next().slideToggle();
  // 讓其他 li body 收合
  $(this).siblings().children().next().slideUp();
})

// product頁面切換品項
// 先將預設以外的隱藏
$('.product_series').eq(1).hide()
// 點擊顯示optical並關閉其他品項
$('.product_button_1').click(function (e) { 
  e.preventDefault();
  $('.product_series').eq(0).show().siblings().hide()
});
// 點擊顯示sunglasses並關閉其他品項
$('.product_button_2').click(function (e) { 
  e.preventDefault();
  $('.product_series').eq(1).show().siblings().hide()
});
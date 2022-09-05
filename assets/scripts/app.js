$(function() {
  $(".js-button-mobile-search").on("click", function(e) {
    e.preventDefault();
    $(this).stop().toggleClass("is-active");
    $(".js-container-search").stop().toggleClass("is-active");
  });
});

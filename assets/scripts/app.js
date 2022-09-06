$(function() {
  $("#button-mobile-search").on("click", function(e) {
    e.preventDefault();
    $(this).stop().toggleClass("is-active");
    $("#search-container").stop().toggleClass("is-active");
  });
});

$(document).ready(function() {
  $(".click").click(function() {
    $(".clicked").show();
    $(".click").hide();
    $("#clickable").click(function() {
    $(".click").show();
    $(".clicked").hide();
});
});
});
$(document).ready(function() {
  $(".bad").click(function() {
    $(".worst").show();
    $(".bad").hide();
    $("#worse").click(function() {
    $(".bad").show();
    $(".worst").hide();
});
});
});
$(document).ready(function() {
  $(".good").click(function() {
    $(".best").show();
    $(".good").hide();
    $("#better").click(function() {
    $(".good").show();
    $(".best").hide();
});
});
});
// $(document).ready(function(){
// $(".image").hover(function(){
//   $(".text-block").toggle();
//   })
// });

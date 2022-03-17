$(document).ready(function() {
  $(".click").click(function() {
    $(".clicked").show();
    $(".click").hide();
    $("#clickable").click(function() {
    $(".click").show();
    $(".clicked").hide();
  });
});
$(".good").click(function() {
  $(".best").show();
  $(".good").hide();
  $("#better").click(function() {
  $(".good").show();
  $(".best").hide();
});
});
$(".bad").click(function() {
  $(".worst").show();
  $(".bad").hide();
  $("#worse").click(function() {
  $(".bad").show();
  $(".worst").hide();
});
});
$("#one").hover(function(){
  $(".text-block1").toggle();
  });
$("#two").hover(function(){
  $(".text-block2").toggle();
  });
$("#three").hover(function(){
  $(".text-block3").toggle();
  });
$("#four").hover(function(){
  $(".text-block4").toggle();
  });
$("#five").hover(function(){
  $(".text-block5").toggle();
  });
$("#six").hover(function(){
  $(".text-block6").toggle();
  });
$("#seven").hover(function(){
  $(".text-block7").toggle();
  });
$("#eight").hover(function(){
  $(".text-block8").toggle();
  });
  
});




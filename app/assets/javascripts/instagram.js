
$("h1").on("click", function(){
  var hashTag = $(".hashTag").val();


var url = "https://api.instagram.com/v1/tags/" + hashTag + "/media/recent?access_token=1921140498.8ebd9c2.010909445d2f45d68c973aa625f72138";
$.ajax({
  url     : url,
  type    : "GET",
  dataType: "json"

}).done(function(response){
  console.log(response);
  $("body").append("<img id='Instagram_Image' src=" + response.data.images.standard_resolution.url + " />");
}).fail(function(){
  console.log("you messed up...good job!");
}).always(function(){
  console.log("are we there yet?");
});
});

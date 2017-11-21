document.addEventListener("DOMContentLoaded", function() {
  widthCheck();
  myFunction();
});


var x=0;


function myFunction(){
//$.getJSONP("http://api.forismatic.com/api/1.0/method=getQuote&format=json&lang=en&origin=*", function(val){


$.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random",function(val){
  
  $("#quote").html("<h3>"+val.quote+"</h3>");
  $("#author").html("<p>"+val.author+"</p>");
  $("#tweet").attr("href", "https://twitter.com/intent/tweet?text="+'"'+val.quote+'"'+"  -"+val.author);
  });
  $(".fa-quote-left").toggleClass("spin");


}


window.onresize = function(){
  widthCheck();
}

function widthCheck(){
if($( document ).width()<800){
    $("#main").css("flex-flow", "column");
    $("#main").css("max-width", "100%");
  $("#main").css("min-height", "55%");
    $("#right").css("order", "0");
     $("#left").css("order", "1");
     $("#left").css("min-width", "100%");
    $("#quote").css("min-height", "200px");
    $("#left").css("min-height", "20%");
  $("#right").css("min-height", "80%");
} else {
    $("#main").css("flex-flow", "row");
    $("#right").css("min-height", "100%");
     $("#right").css("order", "1");
     $("#left").css("order", "0");
    $("#left").css("min-width", "20%");
    $("#quote").css("min-height", "250px");
    $("#left").css("min-height", "100%");
  $("#right").css("min-height", "100%");
}
}

var $ = require( "jquery" );

$(function(){
    $("#main").load("../html/home.html");
  });

function goto(page) {
    $(function(){
        $("#main").load("../html/"+page+".html");
      });
}

console.log(__dirname)
$(document).ready(function(){
  $.get("https://opentdb.com/api.php?amount=3&category=18", function(res){
    console.log(res);
    $('#col_1').html("<h2>" + res.results[0].category + "</h2>");
    for(var i = 0; i < res.results.length; i ++){
      $('#col_1').append("<div class='question'><p>" + res.results[i].question + "</p><p>" + res.results[i].correct_answer + "</p></div>");
    }
  }, 'json');
  $.get("https://opentdb.com/api.php?amount=3&category=11", function(res){
    console.log(res);
    $('#col_2').html("<h2>" + res.results[0].category + "</h2>");
    for(var i = 0; i < res.results.length; i ++){
      $('#col_2').append("<div class='question'><p>" + res.results[i].question + "</p><p>" + res.results[i].correct_answer + "</p></div>");
    }
  }, 'json')
  $.get("https://opentdb.com/api.php?amount=3&category=12", function(res){
    console.log(res);
    $('#col_3').html("<h2>" + res.results[0].category + "</h2>");
    for(var i = 0; i < res.results.length; i ++){
      $('#col_3').append("<div class='question'><p>" + res.results[i].question + "</p><p>" + res.results[i].correct_answer + "</p></div>");
    }

  }, 'json')
});

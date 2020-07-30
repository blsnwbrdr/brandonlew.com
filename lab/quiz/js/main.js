$(document).ready(function() {
  'use strict';
  // GET QUIZ.JSON
  $.ajax({
    url: "quiz.json",
    dataType: "text",
    success: function(quizData) {
      // PARSE JSON FILE
      var quiz = $.parseJSON(quizData);
      // POPULATE QUIZ TEXT
      $('h1').text(quiz[0].header);
      $('#question1').html(quiz[1].question);
      $('#question2').html(quiz[2].question);
      $('#question3').html(quiz[3].question);
      $('#question4').html(quiz[4].question);
      $('#question5').html(quiz[5].question);
      $('#question6').html(quiz[6].question);
      $('#question7').html(quiz[7].question);
      $('#question8').html(quiz[8].question);
      $('#question9').html(quiz[9].question);
      $('#question10').html(quiz[10].question);
      $('#name').html(quiz[11].name);
      // QUIZ SUBMIT FUNCTION
      $('#submit').click(function() {
        // SCORE COUNTER
        var score = 0;
        // USER ANSWER INPUTS
        var input1 = $('#input1').val().toLowerCase();
        var input2 = $('#input2').val().toLowerCase();
        var input3 = $('#input3').val().toLowerCase();
        var input4 = $('#input4').val().toLowerCase();
        var input5 = $('#input5').val().toLowerCase();
        var input6 = $('#input6').val().toLowerCase();
        var input7 = $('#input7').val().toLowerCase();
        var input8 = $('#input8').val().toLowerCase();
        var input9 = $('#input9').val().toLowerCase();
        var input10 = $('#input10').val().toLowerCase();
        // NAME INPUT
        var inputName = $('#inputName').val();
        // CHECK FOR BLANK INPUTS
        if(input1.length === 0 || input2.length === 0 || input3.length === 0 || input4.length === 0 || input5.length === 0 || input6.length === 0 || input7.length === 0 || input8.length === 0 || input9.length === 0 || input10.length === 0 || inputName.length === 0) {
          $('input').css('border-color','red');
          return;
        }
        // CHECK ANSWERS
        if(quiz[1].answer.search(input1) >= 0) {
          score = (score + 1);
          $('#input1').css('border-color','green');
        } else {
          $('#input1').css('border-color','red');
        }
        if(quiz[2].answer.search(input2) >= 0) {
          score = (score + 1);
          $('#input2').css('border-color','green');
        } else {
          $('#input2').css('border-color','red');
        }
        if(quiz[3].answer.search(input3) >= 0) {
          score = (score + 1);
          $('#input3').css('border-color','green');
        } else {
          $('#input3').css('border-color','red');
        }
        if(quiz[4].answer.search(input4) >= 0) {
          score = (score + 1);
          $('#input4').css('border-color','green');
        } else {
          $('#input4').css('border-color','red');
        }
        if(quiz[5].answer.search(input5) >= 0) {
          score = (score + 1);
          $('#input5').css('border-color','green');
        } else {
          $('#input5').css('border-color','red');
        }
        if(quiz[6].answer.search(input6) >= 0) {
          score = (score + 1);
          $('#input6').css('border-color','green');
        } else {
          $('#input6').css('border-color','red');
        }
        if(quiz[7].answer.search(input7) >= 0) {
          score = (score + 1);
          $('#input7').css('border-color','green');
        } else {
          $('#input7').css('border-color','red');
        }
        if(quiz[8].answer.search(input8) >= 0) {
          score = (score + 1);
          $('#input8').css('border-color','green');
        } else {
          $('#input8').css('border-color','red');
        }
        if(quiz[9].answer.search(input9) >= 0) {
          score = (score + 1);
          $('#input9').css('border-color','green');
        } else {
          $('#input9').css('border-color','red');
        }
        if(quiz[10].answer.search(input10) >= 0) {
          score = (score + 1);
          $('#input10').css('border-color','green');
        } else {
          $('#input10').css('border-color','red');
        }
        // SCORE STATUS
        if(score <= 5) {
          $('#score').append('<h4>' + score + '<br>Youngling status</h4>');
        } else if(score <= 7 && score > 5) {
          $('#score').append('<h4>' + score + '<br>Padawan status</h4>');
        } else if(score <= 9 && score > 7) {
          $('#score').append('<h4>' + score + '<br>Jedi Knight status</h4>');
        } else {
          $('#score').append('<h4>' + score + '<br>Jedi Master status</h4>');
        }
        // CREATE A SCORE OBJECT FOR THE NAME AND SCORE
        var scoreObj = { 'name': inputName, 'score': score };
        // SAVE THE SCORE OBJECT TO SAVEJSON.PHP
        $.ajax({
          type: "GET",
          dataType : 'json',
          url: 'savejson.php',
          data: { data: JSON.stringify(scoreObj) },          
        });
        // HIDE SUBMIT BUTTON TO PREVENT MULTIPLE SUBMISSIONS
        $('#submit').hide();
      }); // END ON SUBMIT FUNCTION
    } // END SUCCESS GETTING JSON
  }); // END GET QUIZ.JSON
  
  $('#scoresbtn').click(function() {
    // NEW ARRAY OF HIGH SCORES
    var newArray = [];
    // GET SCORES.JSON
    $.ajax({
      url: "scores.json",
      dataType: "text",
      success: function(scoresData) {
        var scores = $.parseJSON(scoresData);
          // SORT IN DESCENDING ORDER BY SCORE
          scores.sort(function(a,b) {
            return b.score-a.score;
          });
        for(var x = 0; x < scores.length; x++) {
          // GET SCORES GREATER THAN 5
          if(scores[x].score >= 7) {
            // PUSH THE HIGH SCORES TO NEW ARRAY
            newArray.push('<div class="highName">' + scores[x].name + '</div><div class="highScore">' + scores[x].score + '</div>');
            $('#listScores').html(newArray);
          }
        }
      }
    }); // END GET SCORES.JSON
  }); // END HIGH SCORES
}); // END JQUERY
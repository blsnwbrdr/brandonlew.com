$(document).ready(function() {
  'use strict';
  
  var responses = [
    {
      key: 'default',
      answer: ['I&#39;m just a bot, I don&#39;t know everything...', 'Hmmm... They didn&#39;t train me on that...', 'What? Is that a real question?']
    },
    {
      key: 'hour time',
      answer: 'Our hours are M-F 10am - 8pm'
    },
    {
      key: 'time it',
      answer: 'I&#39m a bot, not a watch.'
    },
    {
      key: 'address',
      answer: '888 Dagobah Far Far Away, Endor 00000'
    },
    {
      key: 'asf',
      answer: 'sfasd dsf'
    }
  ];
  
  // CREATE MODULE BUTTON
  $('body').append('<div id="module_btn"></div>');
  
  // CREATE MODULE
  $('body').append('<div id="module"><div id="header"><div class="close">&times;</div></i></div><div id="chat"><ul id="responses"></ul></div><form id="moduleForm"><input id="userInput" type="text" placeholder="ask a question"><button type="submit">submit</button></form></div>');
  
  // HIDE MODULE
  $('#module').hide();

  // ON CLICK HIDE THE MODULE BUTTON AND SHOW THE MODULE
  $('#module_btn').click(function() {
    $('#module').show(); 
    $('#module_btn').hide();
  // MODULE CLOSE BUTTON
    $('.close').click(function() {
      $('#module').hide();
      $('#module_btn').show();
    });
  });
  
  // INITIAL RESPONSE
  $('#responses').append('<li class="botContainer"><div class="bot">I&#39;m your friendly neighborhood bot! How can I help you today?</div></li>');
  
  // DELAY BUBBLE
  function delay() {
    $('#responses').delay(3000).append('<li class="botContainer"><div class="bot loading"><span></span><span></span><span></span></div></li>'); 
  }
  
  // MOVE SCROLL BAR WITH NEW RESPONSES TO STAY AT THE BOTTOM
  function scroll() {
    $('#chat')[0].scrollTop = $('#chat')[0].scrollHeight;
  }
  
  // CHAT AND RESPONSE SECTION
  $('#moduleForm').on('submit',function(e) {
    // USER INPUT
    var userInput = $('#userInput').val();
    if(userInput === '') {
      $('#responses').append('<li class="botContainer"><div class="bot">I&#39;m a bot, not a mind reader... You need to type something!</div></li>');
      scroll();
      e.preventDefault();
      return;
    }
    // PRINT USER INPUT
    $('#responses').append('<li class="userContainer"><div class="user">' + userInput + '</div></li>');

    // RESPONSES BASED ON KEY WORDS
    if(userInput.search(/address/i) >= 0) {
      delay();
      $('#responses').queue(function(next) {
        $('li').last().replaceWith('<li class="botContainer"><div class="bot">' + responses[3].answer + '</div></li>');
        next();
        scroll();
      });
    } else if(userInput.search(/time/i) >= 0 && userInput.search(/it/i) >= 0) {
      delay();
      $('#responses').queue(function(next) {
        $('li').last().replaceWith('<li class="botContainer"><div class="bot">' + responses[2].answer + '</div></li>');
        next();
        scroll();
      });
    } else if(userInput.search(/(hours|time)/i) >= 0) {
      delay();
      $('#responses').queue(function(next) {
        $('li').last().replaceWith('<li class="botContainer"><div class="bot">' + responses[1].answer + '</div></li>');
        next();
        scroll();
      });
    } else {
      // DEFAULT RESPONSE
      delay();
      var random = Math.floor(Math.random() * responses[0].answer.length);
      console.log(random);
      $('#responses').queue(function(next) {
        $('li').last().replaceWith('<li class="botContainer"><div class="bot">' + responses[0].answer[random] + '</div></li>');
        next();
        scroll();
      });
    }
    
    // SCROLL FUNCTION
    scroll();
    
    // CLEAR THE USER INPUT FIELD
    $('#userInput').val('');
    
    e.preventDefault();
  });
}); // END JQUERY
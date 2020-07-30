$(document).ready(function() {
//  "use strict";    
  $('#submit').click(function() {
    // PAGE 1
    var title = $('#title').val();
    var page_0 = $('#page_0').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_01 = $('#button_01').val().replace(/"/g, "&#34;");
    var button_02 = $('#button_02').val().replace(/"/g, "&#34;");
    // PAGE 2
    var page_01 = $('#page_01').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_011 = $('#button_011').val().replace(/"/g, "&#34;");
    var button_012 = $('#button_012').val().replace(/"/g, "&#34;");
    var page_02 = $('#page_02').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_021 = $('#button_021').val().replace(/"/g, "&#34;");
    var button_022 = $('#button_022').val().replace(/"/g, "&#34;");
    // PAGE 3
    var page_011 = $('#page_011').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_0111 = $('#button_0111').val().replace(/"/g, "&#34;");
    var button_0112 = $('#button_0112').val().replace(/"/g, "&#34;");
    var page_012 = $('#page_012').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_0121 = $('#button_0121').val().replace(/"/g, "&#34;");
    var button_0122 = $('#button_0122').val().replace(/"/g, "&#34;");
    var page_021 = $('#page_021').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_0211 = $('#button_0211').val().replace(/"/g, "&#34;");
    var button_0212 = $('#button_0212').val().replace(/"/g, "&#34;");
    var page_022 = $('#page_022').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var button_0221 = $('#button_0221').val().replace(/"/g, "&#34;");
    var button_0222 = $('#button_0222').val().replace(/"/g, "&#34;");
    // PAGE 4
    var page_0111 = $('#page_0111').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0112 = $('#page_0112').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0121 = $('#page_0121').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0122 = $('#page_0122').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0211 = $('#page_0211').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0212 = $('#page_0212').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0221 = $('#page_0221').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    var page_0222 = $('#page_0222').val().replace(/"/g, "&#34;").replace(/\r\n|\r|\n/g,"<br />");
    // CHECK FOR EMPTY FIELDS
    if(title === "" || page_0 === "" || button_01 === "" || button_02 === "" || page_01 === "" || button_011 === "" || button_012 === "" || page_02 === "" || button_021 === "" || button_022 === "" || page_011 === "" || button_0111 === "" || button_0112 === "" || page_012 === "" || button_0121 === "" || button_0122 === "" || page_021 === "" || button_0211 === "" || button_0212 === "" || page_022 === "" || button_0221 === "" || button_0222 === "" || page_0111 === "" || page_0112 === "" || page_0121 === "" || page_0122 === "" || page_0211 === "" || page_0212 === "" || page_0221 === "" || page_0222 === "") {
      $('#newStory').html('<h4 class="error">Sorry, but there was an error. Please check for empty fields.</h4>');
      return;
    }
    // USER INPUT CONSTRUCTOR
    function page(header, story, image, text, button1, button2, display) {
      this.header = header;
      this.story = story;
      this.image = image;
      this.text = text;
      this.button1 = button1;
      this.button2 = button2;
      this.display = display;
    }
    // OBJECTS
    var input_0 = new page(title, "initial story", "", page_0, button_01, button_02, "");
    var input_01 = new page(title, "01", "", page_01, button_011, button_012, "");
    var input_02 = new page(title, "02", "", page_02, button_021, button_022, "");
    var input_011 = new page(title, "011", "", page_011, button_0111, button_0112, "");
    var input_012 = new page(title, "012", "", page_012, button_0121, button_0122, "");
    var input_021 = new page(title, "021", "", page_021, button_0211, button_0212, "");
    var input_022 = new page(title, "022", "", page_022, button_0221, button_0222, "");
    var input_0111 = new page(title, "0111", "", page_0111, "", "", "none");
    var input_0112 = new page(title, "0112", "", page_0112, "", "", "none");
    var input_0121 = new page(title, "0121", "", page_0121, "", "", "none");
    var input_0122 = new page(title, "0122", "", page_0122, "", "", "none");
    var input_0211 = new page(title, "0211", "", page_0211, "", "", "none");
    var input_0212 = new page(title, "0212", "", page_0212, "", "", "none");
    var input_0221 = new page(title, "0221", "", page_0221, "", "", "none");
    var input_0222 = new page(title, "0222", "", page_0222, "", "", "none");
    // ARRAY
    var userStory = [];
    // PUSH OBJECTS TO THE ARRAY
    userStory.push(input_0);
    userStory.push(input_01);
    userStory.push(input_02);
    userStory.push(input_011);
    userStory.push(input_012);
    userStory.push(input_021);
    userStory.push(input_022);
    userStory.push(input_0111);
    userStory.push(input_0112);
    userStory.push(input_0121);
    userStory.push(input_0122);
    userStory.push(input_0211);
    userStory.push(input_0212);
    userStory.push(input_0221);
    userStory.push(input_0222);
    // COMMUNICTATE WITH JSON AND PHP
    $.ajax({
      url: "generate.php",
      dataType: "text",      
      data: { data: JSON.stringify(userStory) },
      success: function(dirName) {
        var newDir = $.parseJSON(dirName);
        $('#newStory').html('<a href="stories/' + newDir + '" target="_blank"><button>Go to your story</button></a><h3>Congrats! You have created a new adventure.</h3>');
      }
    });    
  }); // END SUBMIT 
}); // END JQUERY
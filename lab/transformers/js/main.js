// JavaScript Document
$(document).ready(function() {
  'use strict';
  
  // array of transfomer objects
  var transformers = [
    {
      month: 'january',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Blaster',
      image: 'images/blaster.gif',
      text: 'Much like Blaster, you find all Earth music interesting, but it&#39s rock&#39n&#39roll - good, hard, and loud - that really sparks    your circuits. As a stereo player, he acts as an Autobot communications center sending and receiving information. You also have a talent for communication in AM/FM, just like Blaster. Similar to Blaster, you have the hidden ability to disrupt electrical devices. Use your ability wisely...'
    },
    {
      month: 'jan',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Blaster',
      image: 'images/blaster.gif',
      text: 'Much like Blaster, you find all Earth music interesting, but it&#39s rock&#39n&#39roll - good, hard, and loud - that really sparks    your circuits. As a stereo player, he acts as an Autobot communications center sending and receiving information. You also have a talent for communication in AM/FM, just like Blaster. Similar to Blaster, you have the hidden ability to disrupt electrical devices. Use your ability wisely...'
    },
    {
      month: 'february',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'bumblebee',
      image: 'images/bumblebee.png',
      text: 'Small, eager, and brave, Bumblebee dares to go where others won&#39t. He can go underwater for reconnaissance and salvage missions. Similar to Bumblebee, you are willing to venture to far-off places and engage in adventures. You are also trusted by your inner circle, just like Bumblebee is a trusted lieutenant of Optimus Prime. Much like Bumblebee, you possess the ability of enhanced vision.'
    },
    {
      month: 'feb',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'bumblebee',
      image: 'images/bumblebee.png',
      text: 'Small, eager, and brave, Bumblebee dares to go where others won&#39t. He can go underwater for reconnaissance and salvage missions. Similar to Bumblebee, you are willing to venture to far-off places and engage in adventures. You are also trusted by your inner circle, just like Bumblebee is a trusted lieutenant of Optimus Prime. Much like Bumblebee, you possess the ability of enhanced vision.'
    },
    {
      month: 'march',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Thundercracker',
      image: 'images/thundercracker.gif',
      text: 'Thundercracker is contemptuous of anything that cannot fly and loves to go at speeds up to 1500 mph... Like Thundercracker, you enjoy flying and going fast. You live a fast paced life and you are constantly moving. Similiar to Thundercracker, you have the ability to produce controlled, deafening sonic booms that can be heard for 200 miles. Be careful with your ability - it should only be used outdoors.'
    },
    {
      month: 'mar',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Thundercracker',
      image: 'images/thundercracker.gif',
      text: 'Thundercracker is contemptuous of anything that cannot fly and loves to go at speeds up to 1500 mph... Like Thundercracker, you enjoy flying and going fast. You live a fast paced life and you are constantly moving. Similiar to Thundercracker, you have the ability to produce controlled, deafening sonic booms that can be heard for 200 miles. Be careful with your ability - it should only be used outdoors.'
    },
    {
      month: 'april',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Grimlock',
      image: 'images/grimlock.gif',
      text: 'Grimlock is one of the most fearsome and powerful Transformers. Although dedicated to the Autobot cause, he resents authority. Similiar to Grimlock, you have a renegade spirit and bristle at authority figures. You also share Grimlock&#39s great physical strength. Like Grimmlock, you have the ability to turn into a Dinobot in the form of a Tyrannosaurus Rex. Definitely use your talent outdoors with lots of space.'
    },
    {
      month: 'apr',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Grimlock',
      image: 'images/grimlock.gif',
      text: 'Grimlock is one of the most fearsome and powerful Transformers. Although dedicated to the Autobot cause, he resents authority. Similiar to Grimlock, you have a renegade spirit and bristle at authority figures. You also share Grimlock&#39s great physical strength. Like Grimmlock, you have the ability to turn into a Dinobot in the form of a Tyrannosaurus Rex. Definitely use your talent outdoors with lots of space.'
    },
    {
      month: 'may',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',      
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Megatron',
      image: 'images/megatron.gif',
      text: 'Megatron combines brute strength, cunning, ruthlessness, and terror. He aches to return to Cybertron to complete the Decepticon conquest, but only after destroying all Autobots on Earth. You share his relentlessness, passion, and plan to possess all of Earth&#30s resources. You are incredibly powerful and intelligent. Similar to Megatron, you have the ability to fire a particle beam fusion cannon and you can link up interdimensionally to a black hole and draw anti-matter from it for use as a weapon.'
    },  
    {
      month: 'june',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Devastator',
      image: 'images/devastator.png',
      text: 'Awesome and terrifying, this Decepticon is a bizarre combination of six Constructicons with the sole purpose to crush all in his path. His mind is a melding together of his six parts, but limited by their competing thoughts. Like Devastator, you feel the need to crush anything in your path. Additionaly, you possess the special ability to transform into six separate parts and battle as smaller parts.'
    },  
    {
      month: 'jun',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Devastator',
      image: 'images/devastator.png',
      text: 'Awesome and terrifying, this Decepticon is a bizarre combination of six Constructicons with the sole purpose to crush all in his path. His mind is a melding together of his six parts, but limited by their competing thoughts. Like Devastator, you feel the need to crush anything in your path. Additionaly, you possess the special ability to transform into six separate parts and battle as smaller parts.'
    }, 
    {
      month: 'july',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Shockwave',
      image: 'images/shockwave.png',
      text: 'Cold, brutal, and scientific. Loyal to Megatron, he was left in charge of Cybertron when Megatron left for Earth. Like Shockwave, you are loyal and willing to do anything to accomplish your goals. Similiar to Shockwave, you have the special abilty to emit lethal beams of energy from anywhere on the electromagnetic spectrum: gamma rays, x-rays, light, infrared rays, radio waves, etc.'
    },  
    {
      month: 'jul',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Shockwave',
      image: 'images/shockwave.png',
      text: 'Cold, brutal, and scientific. Loyal to Megatron, he was left in charge of Cybertron when Megatron left for Earth. Like Shockwave, you are loyal and willing to do anything to accomplish your goals. Similiar to Shockwave, you have the special abilty to emit lethal beams of energy from anywhere on the electromagnetic spectrum: gamma rays, x-rays, light, infrared rays, radio waves, etc.'
    }, 
    {
      month: 'august',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Optimus Prime',
      image: 'images/optimusprime.png',
      text: 'Optimus Prime is the largest, strongest, and most courageous of all Autobots, he is also their leader. Feels his role is the protection of all life, including Earth-life. Much like Optimus, you battle unceasingly to defeat the Decepticons. You share his special talent to split into three autonomous modules: 1) The brain center known as the Commander 2) The roller which is a scout car 3) The HQ which holds a combat deck.'
    },  
    {
      month: 'aug',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Optimus Prime',
      image: 'images/optimusprime.png',
      text: 'Optimus Prime is the largest, strongest, and most courageous of all Autobots, he is also their leader. Feels his role is the protection of all life, including Earth-life. Much like Optimus, you battle unceasingly to defeat the Decepticons. You share his special talent to split into three autonomous modules: 1) The brain center known as the Commander 2) The roller which is a scout car 3) The HQ which holds a combat deck.'
    },
    {
      month: 'september',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Ratchet',
      image: 'images/ratchet.gif',
      text: 'Ratchet was the best tool-and-die man on Cybertron. In his workbay on Earth he can make anything from a pin to a rocket and repair injured Autobots. Like Ratchet, you are a healer and able to fix things. Ratchet also likes to party and give backtalk, which are some other traits you share with him. Similar to Ratchet, you have the special ablity to fix just about anything or anybody, given the right tools.'
    },  
    {
      month: 'sep',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Ratchet',
      image: 'images/ratchet.gif',
      text: 'Ratchet was the best tool-and-die man on Cybertron. In his workbay on Earth he can make anything from a pin to a rocket and repair injured Autobots. Like Ratchet, you are a healer and able to fix things. Ratchet also likes to party and give backtalk, which are some other traits you share with him. Similar to Ratchet, you have the special ablity to fix just about anything or anybody, given the right tools.'
    },  
    {
      month: 'october',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',      
      transformer: 'Starscream',
      image: 'images/starscream.png',
      text: 'Seeks to replace Megatron as leader. Ruthless, cold-blooded, and cruel. Like Starscream, you find yourself the most sophisticated and handsome person/Decepticon around. He is the fastest flyer, even faster than Thundercracker, and can reach Mach 2.8 and an altitude of 52 miles. Much like Starscream, you have the talent to go higher and faster than all others - and brag about it while doing it.'
    },  
    {
      month: 'oct',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',      
      transformer: 'Starscream',
      image: 'images/starscream.png',
      text: 'Seeks to replace Megatron as leader. Ruthless, cold-blooded, and cruel. Like Starscream, you find yourself the most sophisticated and handsome person/Decepticon around. He is the fastest flyer, even faster than Thundercracker, and can reach Mach 2.8 and an altitude of 52 miles. Much like Starscream, you have the talent to go higher and faster than all others - and brag about it while doing it.'
    },  
    {
      month: 'november',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Soundwave',
      image: 'images/soundwave.gif',
      text: 'It is said Soundwave can hear a fly sneeze. Soundwave has sensors that can detect even the lowest energy radio transmissions. Similar to Soundwave, you are very perceptive and have an eye for detail. Even though you have human ears, you are able to sense low energy transmissions. Much like Soundwave, you possess the special talent of reading minds by monitoring electrical brain impulses.'
    },  
    {
      month: 'nov',
      bgImage: 'url(images/decepticon.png)',
      bgColor: '#242937',
      overlay: 'rgba(36,41,55,0.9)',
      font: '#F9F9F9',
      transformer: 'Soundwave',
      image: 'images/soundwave.gif',
      text: 'It is said Soundwave can hear a fly sneeze. Soundwave has sensors that can detect even the lowest energy radio transmissions. Similar to Soundwave, you are very perceptive and have an eye for detail. Even though you have human ears, you are able to sense low energy transmissions. Much like Soundwave, you possess the special talent of reading minds by monitoring electrical brain impulses.'
    }, 
    {
      month: 'december',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Jazz',
      image: 'images/jazz.gif',
      text: 'Jazz loves Earth culture and is always looking to learn more. His knowledge of Earth makes him the indispensable right-hand man to Optimus Prime. Much like Jazz, you share his knowledge of Earth culture. You are both very cool and very stylish. Similar to  Jazz, you have the special ability to create dazzling and disorienting sound and light shows. You also share Jazz&#39s talent for going on and completing the highest level missions.'
    },  
    {
      month: 'dec',
      bgImage: 'url(images/autobot.png)',
      bgColor: '#F9F9F9',
      overlay: 'rgba(249,249,249,0.9)',
      font: '#242937',
      transformer: 'Jazz',
      image: 'images/jazz.gif',
      text: 'Jazz loves Earth culture and is always looking to learn more. His knowledge of Earth makes him the indispensable right-hand man to Optimus Prime. Much like Jazz, you share his knowledge of Earth culture. You are both very cool and very stylish. Similar to  Jazz, you have the special ability to create dazzling and disorienting sound and light shows. You also share Jazz&#39s talent for going on and completing the highest level missions.'
    },  
  ];
  
  // submit form via button or enter
  $('#submitForm').on('submit',function(e) {
    // create a variable for the input to lower case
    var month = $('#month').val().toLowerCase();
    // for loop
    for (var x = 0; x < transformers.length; x++) {
      // if the input matches
      if ( month === transformers[x].month ){
        $('body').css({
          'background-color': transformers[x].bgColor,
          'background-image': transformers[x].bgImage,
          'color': transformers[x].font,
          'background-size': 'contain',
        }).hide().fadeIn();
        $('#overlay').css('background',transformers[x].overlay);
        $('#header').html(transformers[x].transformer);
        $('#image').attr('src',transformers[x].image);
        $('#text').css('text-align', 'justify').html(transformers[x].text);
        e.preventDefault();
        return;
      // if the input does not match
      } else {
        $('#header').html('Error');
        $('#image').attr('src','');
        $('#text').css('text-align', 'center').html('Your input does not compute.... Please re-enter your month of birth.');
        e.preventDefault();
      }
    }
  });
  
});// end jQuery
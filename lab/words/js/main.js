// STORIES
const stories = [
  {
    id: 0,
    title: `Villain's Lair`,
    text: `=*Character_1_name*= was =*verb_ING*= in a villain lair. Then, someone knocked on the =*building_part*= ! There was a(n) =*animal*= outside. Suddenly, there was a puff of smoke! Hero =*Character_2_name*= appears and blasts =*Character_1_name*= with =*color*= =*food_plural*= . =*Character_1_name*= throws =*size*= =*thing_plural*= at =*Character_2_name*= . The villain makes a(n) =*food*= shield and it destroys =*Character_1_name*= . The End.`
  },
  {
    id: 1,
    title: `Flash in the Sky`,
    text: `In a(n) =*size*= castle lived the villainous =*Character_1_name*= . One morning, there was a(n) =*color*= flash in the sky. Out of the clouds came hero =*Character_2_name*= with a(n) =*color*= =*thing*= . =*Character_1_name*= blasts =*Character_2_name*= with a(n) =*thing*= . Then, the hero throws paper at the villain and pokes its =*body_part*= out falling into the sewer. =*Character_2_name*= starts to celebrate and =*Character_1_name*= brings out a secret weapon to shrink the hero. =*Character_1_name*= picks up the hero and places them on a(n) =*food*= and places it in the freezer for storage. The End.`
  },
  {
    id: 2,
    title: `Lava Flow`,
    text: `A(n) =*size*= villain decides to eat some ants when someone knocks on the toilet. Suddenly =*color*= lava comes flowing out of the toilet. It burns the villain's =*body_part*= . The villain shouts in pain and grabs a(n) =*thing*= for healing. Hero =*Character_1_name*= brings out =*color*= Kai and throws =*thing_plural*= at the villain. The villain introduces themself as =*Character_2_name*= , brings out a(n) =*thing*= ray, and blasts =*Character_1_name*= . =*Character_2_name*= puts =*Character_1_name*= in a sandwich and stores it in the refrigerator. The End.`
  },
  {
    id: 3,
    title: `The Center of the Galaxy`,
    text: `Deep in the center of the galaxy lived the villainous =*Character_1_name*= in a(n) =*color*= castle. While eating breakfast, suddenly, there was a(n) =*size*= =*color*= explosion. =*Character_1_name*= bounces up and down and falls in =*color*= toilet water. A furry =*animal*= emerges from the water and jumps on the villain's =*body_part*= . =*Color*= ants bite =*Character_1_name*= . Then, a(n) =*size*= dragon joins in and declares itself as the mighty =*Character_2_name*= . The dragon shrinks =*Character_1_name*= and puts it in =*building_part*= under glass. The End.`
  },
  {
    id: 4,
    title: `Darkness`,
    text: `In a trinary system on the outer rim of the galaxy, a group of =*size*= orc warriors descended on the planet of =*Name*= . On a near moon, lived =*color*= undead battlefiends under the control of Grand Emperor =*Character_1_name*= . They have a spy station on the moon to observe the movements of High General =*Character_2_name*= and the orc warriors. =*Character_2_name*= discovers the super secret spy station while =*verb_ING*= and decides to send in a team of =*animal_plural*= . They have a =*size*= battle in space and the Grand Emperor is defeated. The End.`
  },
  {
    id: 5,
    title: `Darkness Rising`,
    text: ``
  }
];

const story = stories[Math.floor(Math.random() * stories.length)];

const userTitle = document.getElementById('userTitle');
const userInputs = document.getElementById('userInputs');
const userButton = document.getElementById('userButton');
const userStory = document.getElementById('userStory');
const response = document.getElementById('response');

// USER VARIABLE PATTERN
const userVarPatt = /\=\*[\s\S]*?\*\=/gi;

// CREATE TITLE
userTitle.innerHTML = story.title;

// SPLIT STORY INTO ARRAY
let storyArray = story.text.split(" ");

// SET DISPLAY
const display = (x,y) => {
  x.setAttribute('style',`display:${y};`);
}

// CREATE INPUTS
storyArray.forEach( (a,b,c) => {
  if(a.search(userVarPatt) === 0){
    const a1 = a.replace(/\=\*/gi,"");
    const a2 = a1.replace(/\*\=/gi,"");
    if(a2 === 'Character_1_name'){
      userInputs.innerHTML += `<input class='words character_1_name' placeholder="${a2}">`;
    }else if(a2 === 'Character_2_name'){
      userInputs.innerHTML += `<input class='words character_2_name' placeholder="${a2}">`;
    }else{
      userInputs.innerHTML += `<input class='words' placeholder="${a2}">`;
    }
  }
});

const character_1_name = document.querySelectorAll('.character_1_name');
const character_2_name = document.querySelectorAll('.character_2_name');

for(let x = 1;x < character_1_name.length;x++ ){
  display(character_1_name[x],'none');
}
for(let y = 1;y < character_2_name.length;y++ ){
  display(character_2_name[y],'none');
}

// CREATE SUBMIT BUTTON
userButton.innerHTML = `<button id="submit">submit</button>`;

// ADD SPANS TO STORY
let storyArraySpan = []
storyArray.forEach( (a,b,c) => {
  if(a.search(userVarPatt) === 0){
    a = a.replace(userVarPatt,`<span class="fill"></span>`);
    storyArraySpan.push(a);
  }else{
    storyArraySpan.push(a);
  }
});
const storySpan = storyArraySpan.join(" ");
userStory.innerHTML = storySpan;

// CHECK INPUTS
const checkInputs = () => {
  const words = document.querySelectorAll('.words');
  let counter = 0;
  words.forEach( (a,b,c) => {
    if(a.value !== ''){
      counter++
    }
  });
  if(words.length === counter){
    return true
  }else{
    return false
  }
}

// SUBMIT INPUTS
const submitInputs = () => {
  const fill = document.querySelectorAll('.fill');
  const words = document.querySelectorAll('.words');
  if(checkInputs()){
    words.forEach( (a,b,c) => {
      fill[b].innerHTML = a.value;
    });
    display(userStory,'block');
    display(userInputs,'none');
    display(userButton,'none');
    display(response,'none');
  }else{
    response.innerHTML = `Fill all inputs`;
    display(userStory,'none');
    display(response,'block');
  }
}

// EVENT LISTENERS
document.addEventListener('click', e => {
  if(e.target && e.target.id === 'submit'){
    submitInputs();
  }
  if(e.target && e.target.id === 'refresh'){
    location.reload();
  }
});
document.addEventListener('keypress', e => {
  if(e.keyCode === 13 && e.target.className === 'words'){
    submitInputs();
  }
});
document.addEventListener('keyup', e => {
  if(e.target.className === 'words character_1_name'){
    for(let i = 1;i < character_1_name.length ;i++){
      character_1_name[i].value = character_1_name[0].value;
    }
  }
  if(e.target.className === 'words character_2_name'){
    for(let i = 1;i < character_2_name.length ;i++){
      character_2_name[i].value = character_2_name[0].value;
    }
  }
});

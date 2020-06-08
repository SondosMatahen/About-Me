"use strict";

var userName = prompt('What\'s your name ?' )
alert ( 'Welcom to our websit '+ userName)

var genderG= prompt('Am I a Girl? \n yes/no').toLowerCase();
if (genderG=='yes'){
    console.log('You are right')
    alert('You are right')
    }
    else {
    //console.log('You are wrong')
    alert('You are wrong')
}


var age= prompt('Am I above 20 years? \n yes/no').toUpperCase();
if (age=='YES'){
    console.log('You are right')
    alert('You are right')
    }
else {
     console.log('You are wrong')
     alert('You are wrong')
    }


var friend= prompt('Am I your friend?? \n yes/no').toUpperCase();
if (friend=='YES'){
    //console.log('You are right')
    alert('You are right')
    }
else {
    //console.log('You are wrong')
    alert('You are wrong')
}

var bea= prompt('Am I beautiful ?? \n yes/no').toUpperCase();
if (bea=='YES'){
    //console.log('You are right')
    alert('You are right')
    }
else {
     //console.log('You are wrong')
     alert('You are wrong')
    }


var summer= prompt('Do I like summer?? \n yes/no').toUpperCase();
if (summer=='NO'){
    //console.log('You are right')
    alert('You are right')
    }
else {
     //console.log('You are wrong')
     alert('You are wrong')
    }

alert('Thank You  '+ userName +'For Your Visiting')





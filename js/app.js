"use strict";

var score=0

var userName = prompt('What\'s your name ?' )
alert ( 'Welcom to our websit '+ userName)

function gen (){

var genderG= prompt('Am I a Girl? \n yes/no').toLowerCase();
if (genderG=='yes'){
    //console.log('You are right')
    alert('You are right')
    score++;
    }
    else {
    //console.log('You are wrong')
    alert('You are wrong')
}
}
function age (){
var age= prompt('Am I above 20 years? \n yes/no').toUpperCase();
if (age=='YES'){
    score++;
    //console.log('You are right')
    alert('You are right')
    }
else {
     //console.log('You are wrong')
     alert('You are wrong')
    }
}

function fri (){
var friend= prompt('Am I your friend?? \n yes/no').toUpperCase();
if (friend=='YES'){
    score++;
    //console.log('You are right')
    alert('You are right')
    }
else {
    //console.log('You are wrong')
    alert('You are wrong')
}
}
function bea (){
var bea= prompt('Am I beautiful ?? \n yes/no').toUpperCase();
if (bea=='YES'){
    score++;
    //console.log('You are right')
    alert('You are right')
    }
else {
     //console.log('You are wrong')
     alert('You are wrong')
    }
}

function summer (){
var summer= prompt('Do I like summer?? \n yes/no').toUpperCase();
if (summer=='NO'){score++;
    //console.log('You are right')
    alert('You are right')
    }
else {
    
     //console.log('You are wrong')
     alert('You are wrong')
    }

}
function q6 (){
var userInput=prompt ('This is guessing game , you should guess the number \n you just have 4 guesses ')
var guess=7;
for (var i=0 ; i<3 ; i++){

     if(userInput>guess){
        userInput= prompt('it\'s too high');}

    
    else if (userInput==guess){
        alert('Wow It\'s correct');
        score++;
        break;
    }  
    else if (userInput<guess){
        userInput= prompt('it\'s too low');}
    else {
         userInput= prompt('it\'s not a number');}   
        

}

if(userInput!=guess){
alert('Unfortunately you didn\'t guess it \n The answer was 7')}}



function ggg(){
var userIn=prompt ('This is guessing game , you should guess the number from (1-15) \n you just have 6 guesses ')
var arr=[7,4,14,1,3,8,9]
var index = arr [0]
var i=0

while(i<5) {
    
    for (var y=0; y<arr.length;y++){
    index= arr[y];
    console.log(y)
    if (userIn==index){
        alert ('Wow It\'s correct')
        break;
    }
    }
    if (userIn==index){   score++
        break;}
    var userIn=prompt ( 'guess again')
 i++ 
 
} 
if(userIn!=index){
    alert('Unfortunately you didn\'t guess it \n The answers are 7,4,14,1,3,8,9')}
   
}

gen ();
age ();
fri ();
bea ();
summer ();
q6 ();
ggg();



alert('your score is '+score)
console.log('your score is '+score)
alert('Thank You  '+ userName +' For Your Visiting')

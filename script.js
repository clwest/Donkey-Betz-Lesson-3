// Set variables for the user and the donkey

const user = {
  currentChoice: null
}

const donkey = {
  currentChoice: null
}

// Set Array of choices
const rollChoice = ["Kick", "Donkey Punch", "StoneSkin"];

// sets up users selection
user.currentChoice = rollChoice[0];

// randomly selects a choice between 0 and 2 
function donkeyChoice(){
  let roll = Math.floor(Math.random() * rollChoice.length);
  donkey.currentChoice = rollChoice[roll];
}


function findWinner(event){
  donkeyChoice();
  console.log(event.target.id)
  user.currentChoice = event.target.id
  if(donkey.currentChoice === user.currentChoice){
    battleResults("The battle is a draw! Both of you Donkey's used " +donkey.currentChoice);
  }else if(donkey.currentChoice === rollChoice[0]){
    if(user.currentChoice === rollChoice[1]){
      battleResults("You beat the Donkey using " +user.currentChoice+ "! The Donkey whinned off after using " +donkey.currentChoice);
    }else{
      battleResults("The Donkey stomped on you using " +donkey.currentChoice+ "! Next time don't bet on  " +user.currentChoice);
    }
  }else if(donkey.currentChoice === rollChoice[1]){
    if(user.currentChoice === rollChoice[2]){
      battleResult("You beat the Donkey using " +user.currentChoice+ "! The Donkey whinned off after using " +donkey.currentChoice);
    }else{
      battleResults("The Donkey stomped on you using " +donkey.currentChoice+ "! Next time don't bet on " +user.currentChoice);
    }
  }else if(donkey.currentChoice === rollChoice[2]){
    if(user.currentChoice === rollChoice[0]){
      battleResults("You beat the Donkey using " +user.currentChoice+ "! The Donkey whinned off after using " +donkey.currentChoice);
    }else{
      battleResults("The Donkey stomped on you using " +donkey.currentChoice+ "! Next time don't bet on " +user.currentChoice);
    }
  }
}

function battleResults(victory){
  const victorResult = document.getElementById("results");
  victorResult.innerText = victory;
  document.body.appendChild(victorResult);
  document.getElementById("results").innerText = victory
  
}


document.getElementById("Kick").addEventListener("click", findWinner);
document.getElementById("Punch").addEventListener("click", findWinner);
document.getElementById("Skin").addEventListener("click", findWinner);

findWinner()



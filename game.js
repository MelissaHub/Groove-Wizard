let c1 = document.querySelector('.child-1')

let c2 = document.querySelector('.child-2')

let c3 = document.querySelector('.child-3')

let c4 = document.querySelector('.child-6')

let score = document.querySelector('.child-4')

let response = document.querySelector('.child-5')

// let scoreBoard =document.getElementById("child-6").innerHTML

//calling boxes


c1.innerHTML = 'earth'

c2.innerHTML = 'wind'

c3.innerHTML = 'fire'

score.innerHTML = 'Groove:  <br>User: </br>'
//reassign those selections to a string

let userScore = 0
let computerScore = 0
//start score at base



c1.addEventListener('click', earthbtn) 
  
c2.addEventListener('click', windbtn) 


c3.addEventListener('click', firebtn) 

c4.addEventListener('click', reset)
c4.style.display ='none'
//whichever is clicked should run through Playround? WHats wrong with them

let  playerSelection =''

function earthbtn (){ 
    playerSelection = 'earth'
    playRound()
    refreshStats()
    winner()


}
function windbtn (){ 
    playerSelection = 'wind'
    playRound()
    refreshStats()
    winner()

}
function firebtn (){ 
    playerSelection = 'fire'
 
    playRound()
    refreshStats()
    winner()
    
}

function winner(){ 

    if (userScore  > computerScore){ 
        if (userScore === 10){
         response.innerHTML  = 'You defeated the Groovemaster!'
         
         c1.removeEventListener('click', earthbtn) 
         c2.removeEventListener('click', windbtn) 
         c3.removeEventListener('click', firebtn) 
         c4.addEventListener('click', reset)
         c4.style.display ='block'
         //remove event listener sig haas to be exaxt same of event listenr when added
        }
       }
       else { 
        if (computerScore === 10){
        response.innerHTML  = 'You loose to the Groove!'
        c1.removeEventListener('click', earthbtn) 
        c2.removeEventListener('click', windbtn) 
        c3.removeEventListener('click', firebtn) 
        c4.addEventListener('click', reset)
        c1.style.display = 'none'
        c2.style.display = 'none'
        c3.style.display = 'none'
                 c4.style.display ='block'
        }
       }
}
//add button have be click function

function reset(){ 

    document.location.reload(true)
    //reset
}

function computerPlay(){ 


    var items = ['earth', 'wind', 'fire'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item

}
// randomizer for computer


const computerSelection = computerPlay()






    function playRound(){ 
        //parameters called in line 81 and 83

        response.innerHTML = 'Your move! earth wind or fire!'
        //want to simply start in box 5, how to get the box to show up???

console.log('ran')
            // if ((userScore >= 0 && computerScore >= 0) || (userScore  < 10 || computerScore < 10)) {
        //both scores start at zero, why not show up
        switch (playerSelection){ 
            case 'earth':
                switch ( computerSelection){ 

                    case 'earth':  
                    // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`  
                    return response.innerHTML  = "Earth V Earth, NO SCORE!" 

                    case 'wind':
                        computerScore++
                        // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`         
                    return response.innerHTML  = "Goove chose wind! You are hit!" 


                    case 'fire':
                        userScore++

                        // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`  
                   return response.innerHTML  = "Groove chose fire! You are hit!" 


                }

                break
            case 'wind':
                switch (computerSelection){ 
                    case 'earth': 
                    // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`  
                    return response.innerHTML  = "Groove chose earth! You hit Yourself!" 

                    
                    case 'wind':
                        computerScore++
                        // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`     
                     return response.innerHTML  = "Groove chose wind! They empower you!"    


                    case 'fire':
                        userScore++

                        // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}` 
                    return response.innerHTML  = "Groove chose fire! They extinguish Their flame!"


                }
            break
            case 'fire':
                switch ( computerSelection){ 
                    case 'earth': 

                    // score.innerHTML =`User: ${userScore } Groove Wizard:   ${computerScore}` 
                    return response.innerHTML   = "Groove chose fire! They are not affected" 


                    case 'wind':
                  userScore++    
                    // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`     
                    return response.innerHTML   = "Groove chose fire! Groove gets extinguished" 


                    case 'fire':
                        userScore++
                        computerScore++
                        // score.innerHTML =`User: ${userScore} Groove Wizard:   ${computerScore}`         
                    return response.innerHTML   = "Groove chose fire! You both are empowered!" 


                }

                break
        }
    }

   
    
        function startGame(){ 

    c1.addEventListener('click', earthbtn) 
    
    c2.addEventListener('click', windbtn) 


    c3.addEventListener('click', firebtn) 
        }
  
    

    startGame()

    function refreshStats(){ 
      score.innerHTML = 'Groove: ' + computerScore +'<br>' + 'User: ' + userScore 
    }




let c1 = document.querySelector('.child-1')

let c2 = document.querySelector('.child-2')

let c3 = document.querySelector('.child-3')

let c4 = document.querySelector('.child-6')

let score = document.querySelector('.child-4')

let response = document.querySelector('.child-5')



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

//put computer directly in playround to randomize






    function playRound(){ 


        response.innerHTML = 'Your move! earth wind or fire!'


console.log('ran')
//test in console

        switch (playerSelection){ 
            case 'earth':
                switch ( computerPlay()){ 

                    case 'earth':  
 
                    return response.innerHTML  = "Earth V Earth, NO SCORE!" 

                    case 'wind':
                        computerScore++
         
                    return response.innerHTML  = "Goove chose wind! Groove is empowered" 


                    case 'fire':
                        userScore++

  
                   return response.innerHTML  = "Groove chose fire! You are empowered!" 


                }

                break
            case 'wind':
                switch (computerPlay()){ 
                    case 'earth': 
  
                    return response.innerHTML  = "Groove chose earth! No score!" 

                    
                    case 'wind':
                        computerScore++
    
                     return response.innerHTML  = "Groove chose wind! You empower Groove!"    


                    case 'fire':
                        userScore++


                    return response.innerHTML  = "Groove chose fire! They Empower you!!"


                }
            break
            case 'fire':
                switch ( computerPlay()){ 
                    case 'earth': 


                    return response.innerHTML   = "Groove chose earth! Neither are affected" 


                    case 'wind':
                  userScore++    
 
                    return response.innerHTML   = "Groove chose wind! You are Empowered!" 


                    case 'fire':
                        userScore++
                        computerScore++
       
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




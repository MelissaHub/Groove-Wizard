let c1 = document.querySelector('.child-1')

let c2 = document.querySelector('.child-2')

let c3 = document.querySelector('.child-3')

let score = document.querySelector('.child-4')

let response = document.querySelector('.child-5')

// let scoreBoard =document.getElementById("child-6").innerHTML

//calling boxes
//how to turn the c's into buttons and stay their size


c1.innerHTML = 'earth'

c2.innerHTML = 'wind'

c3.innerHTML = 'fire'

score.innerHTML = 'Groove wizard:  <br>User: </br>'
//reassign those selections to a string





// let select =(e) => { 
//     let x = e.composedPath(0)
//     console.log (x[0])
//     x[0].setAttribute('value','on')
//     console.log (x[0])
// }
//     let select2 = select.bind()

c1.addEventListener('click', earthbtn) 
  
c2.addEventListener('click', windbtn) 


c3.addEventListener('click', firebtn) 
//whichever is clicked should run through Playround? WHats wrong with them

let  playerSelection =''

function earthbtn (){ 
    playerSelection = 'earth'
 

}
function windbtn (){ 
    playerSelection = 'wind'
 

}
function firebtn (){ 
    playerSelection = 'fire'
 

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

        let userScore = 0

        let computerScore = 0
        //both scores start at zero, why not show up
        switch (computerSelection){ 
            case 'earth':
                switch ( playerSelection){ 
                    case 'earth':  
                    score.innerHTML =`User: ${userScore +0} 'Groove Wizard: ' + ${computerScore -0}`  
                    return response.innerHTML  = "Earth V Earth, NO SCORE!" 


                    case 'wind':
                        score.innerHTML =`User: ${userScore +1} 'Groove Wizard: ' + ${computerScore -1}`         
                    return response.innerHTML  = "Goove chose earth! Groove is hit!" 


                    case 'fire':
                        score.innerHTML =`User: ${userScore -1} 'Groove Wizard: ' + ${computerScore +1}`  
                   return response.innerHTML  = "Groove chose fire! You are hit!" 


                }

                break
            case 'wind':
                switch ( playerSelection){ 
                    case 'earth': 
                    score.innerHTML =`User: ${userScore -0} 'Groove Wizard: ' + ${computerScore -1}`  
                    return response.innerHTML  = "Groove chose wind! They hit themselves!" 

                    
                    case 'wind':
                        score.innerHTML =`User: ${userScore +1} 'Groove Wizard: ' + ${computerScore +0}`     
                     return response.innerHTML  = "Groove chose wind! They empower you!"    


                    case 'fire':
                        score.innerHTML =`User: ${userScore -1} 'Groove Wizard: ' + ${computerScore +1}` 
                    return response.innerHTML  = "Groove chose wind! They extinguish your flame!"


                }
            break
            case 'fire':
                switch ( playerSelection){ 
                    case 'earth': 
                    score.innerHTML =`User: ${userScore -1} 'Groove Wizard: ' + ${computerScore +0}` 
                    return response.innerHTML   = "Groove chose fire! They are not affected" 


                    case 'wind':
                    score.innerHTML =`User: ${userScore +0} 'Groove Wizard: ' + ${computerScore -1}`     
                    return response.innerHTML   = "Groove chose fire! Groove gets extinguished" 


                    case 'fire':
                        score.innerHTML =`User: ${userScore +1} 'Groove Wizard: ' + ${computerScore +1}`         
                    return response.innerHTML   = "Groove chose fire! You both are empowered!" 


                }

                break
        }

    }

        function startGame(){ 

        while(userScore || computerScore < 10){ 
        playRound()
        return scoreBoard = 'Grovewizard :' + computerScore + 'User: ' + userScore
        }
        //while less that ten, if either is more it responds the if statement

       if (userScore  > computerScore){ 
        return response = 'You defeated the Groovemaster!'
        
       }
       else { 
        return response = 'You loose to the Groove!'
       }
    //need a reset
    }

        // if(playerSelection == 'earth' && computerSelection == 'earth'){
            
        // return response  = "Earth V Earth, NO SCORE!"}
    
        //     else if(playerSelection == 'earth' && computerSelection == 'wind'){
        //         return response  = "Goove chose wind! You take a hit!" userScore -1 ,computerScore +1}
    
        //         else if(playerSelection == 'earth' && computerSelection == 'fire'){
        //             return response  = "Goove chose fire! Groove is hit!" userScore +1 ,computerScore -1} 
            
        //                     else if(playerSelection == 'wind' && computerSelection == 'earth'){
        //                         return response  = "Groove chose earth! You hit yourself!" userScore -1 }   
                                
        //                         else if(playerSelection == 'wind' && computerSelection == 'wind'){
        //                             return response  = "Groove chose wind! You empower Groove!" computerScore +1} 
                             
        //                             else if(playerSelection == 'wind' && computerSelection == 'fire'){
        //                                 return response  = "Groove chose fire! You extinguish their flame!" userScore +1 ,computerScore -1} 
                                                                
        //                                     else if(playerSelection == 'fire' && computerSelection == 'earth'){
        //                                         return response  = "Groove chose earth! You are not affected" computerScore -1} 
                                                                        
        //                                         else if(playerSelection == 'fire' && computerSelection == 'wind'){
        //                                             return response  = "Groove chose wind! You get extinguished" userScore -1} 
                                                                            
        //                                             else {
        //                                                 return response  = "Groove chose fire! You both are empowered!" userScore +1 ,computerScore +1} 
        //                                                 //both chose fire
                                        
                                    
        // }


//     //to go into playround



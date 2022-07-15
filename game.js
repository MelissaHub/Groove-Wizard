let c1 = document.querySelector('child-1')

let c2 = document.querySelector('child-2')

let c3 = document.querySelector('child-3')

let response = document.querySelector('child-5')

let scoreBoard = document.querySelector('child-6')

//calling boxes
//how to turn the c's into buttons and stay their size


c1 = 'earth'

c2 = 'wind'

c3 = 'fire'
//reassign those selections to a string


c1.addEventListener('click', playRound) {
    return press
}


c2.addEventListener('click', playRound) { 
    return press 
}


c3.addEventListener('click', playRound) {  
    return press
}
//whichever is clicked should run through Playround? WHats wrong with them


    

function computerPlay(){ 

    var items = ['earth', 'wind', 'fire'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item

}
//randomizer for computer


    function playRound(playerSelection,computerSelection){ 
        //parameters called in line 81 and 83

        console.log(response = 'Your move! earth wind or fire!')
        //want to simply start in box 5, how to get the box to show up???

        let userScore = 0

        let computerScore = 0
        //both scores start at zero, why not show up
    
        if(playerSelection == 'earth' && computerSelection == 'earth'){
        return response  = "Earth V Earth, NO SCORE!"}
    
            else if(playerSelection == 'earth' && computerSelection == 'wind'){
                return response  = "Goove chose wind! You take a hit!" userScore -1 ,computerScore +1}
    
                else if(playerSelection == 'earth' && computerSelection == 'fire'){
                    return response  = "Goove chose fire! Groove is hit!" userScore +1 ,computerScore -1} 
            
                            else if(playerSelection == 'wind' && computerSelection == 'earth'){
                                return response  = "Groove chose earth! You hit yourself!" userScore -1 }   
                                
                                else if(playerSelection == 'wind' && computerSelection == 'wind'){
                                    return response  = "Groove chose wind! You empower Groove!" computerScore +1} 
                             
                                    else if(playerSelection == 'wind' && computerSelection == 'fire'){
                                        return response  = "Groove chose fire! You extinguish their flame!" userScore +1 ,computerScore -1} 
                                                                
                                            else if(playerSelection == 'fire' && computerSelection == 'earth'){
                                                return response  = "Groove chose earth! You are not affected" computerScore -1} 
                                                                        
                                                else if(playerSelection == 'fire' && computerSelection == 'wind'){
                                                    return response  = "Groove chose wind! You get extinguished" userScore -1} 
                                                                            
                                                    else {
                                                        return response  = "Groove chose fire! You both are empowered!" userScore +1 ,computerScore +1} 
                                                        //both chose fire
                                        
                                    
        }


    const playerSelection = press

    const computerSelection = computerPlay()
    //to go into playround


    function startGame(){ 

        while(userScore || computerScore < 10){ 
        playRound()
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
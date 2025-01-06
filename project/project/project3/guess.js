let randomNumber=(parseInt(Math.random()*100+1));


    const submit = document.querySelector('#submit')
    
    const userInput = document.querySelector('#guessfield')
    const guesses = document.querySelector('.guesses')
    const LastResult = document.querySelector('.lastResult')
    const lowOrhi = document.querySelector('.lowOrhi');
    const startOver= document.querySelector('.resultParser');

    const p = document.createElement('p')

    let prevGuess=[]
    let numGuess=1

    let playGame=true

    if(playGame){
        submit.addEventListener('click',function(e){
            e.preventDefault();

            console.log(e);
            

            // const guess = parseInt(userInput.value)
            // console.log(guess);
            // validatGuess(guess)
        })
    }

    // function validatGuess(guess){
    //     if(isNaN(guess)){
    //         alert('Please enter a valid number')
    //     }
    //     else if(guess<1 && guess>100){
    //         alert('Please enter a number between 1 and 100')
    //     }
    //     else{
    //         prevGuess.push(guess)
    //         if(numGuess===10){
    //             displayGuess(guess)
    //             dispalyMessage('GAME OVER and the number was '+randomNumber)
    //             endGame()
    //         }
    //         else{
    //             displayGuess(guess)
    //             checkGuess(guess)
    //         }
    //     }

    // }

    // function checkGuess(guess){
    //     if(guess===randomNumber){
    //         dispalyMessage('YOU GOT IT RIGHT')
    //         endGame()
    //     }
    //     else if(guess<randomNumber){
    //         dispalyMessage('Number is too low')
    //     }
    //     else if(guess>randomNumber){
    //         dispalyMessage('Number is too high')
    //     }

    // }

    // function displayGuess(guess){
    //     userInput.value=""
    //     guesses.innerHTML+=`${guess},`
    //     numGuess++;
    //     LastResult.innerHTML=`${11-numGuess}`
    // }

    // function displayMessage(message){
    //     lowOrhi.innerHTML=`<h2>${message}</h2>`;

    // }
    // function endGame(){
    //     userInput.value=""
    //     userInput.setAttribute('disables','true')
    //     p.classList.add('button')
    //     p.innerHTML='<h2 id="newgame">Start New Game</h2>';
    //     startOver.appendChild(p);
    //     playGame=false
    //     newGame()
    // }

    // function newGame(){
    //     const newGameButton  = document.querySelector('#newgame')
    //     newGameButton.addEventListener('click',function(e){
    //         randomNumber=(parseInt(Math.random()*100+1));
    //         prevGuess=[]
    //         numGuess=1
    //         guesses.innerHTML=""
    //         LastResult.innerHTML=`${11-numGuess}`
    //         userInput.removeAttribute('disabled')
    //         startOver.removeChild(p)

    //         playGame=true

    //     })
    // }

    
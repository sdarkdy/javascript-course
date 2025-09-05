let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0 }

            updateScoreElement();



        /*
        if (!score){
          score = {
            wins: 0,
            losses: 0,
            ties: 0
          };
          */

          let isAutoPlay = false;
          let intrevalId;
          function resetScore() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();
          }

          //const autoPlay =() => {
          
          //};

           document.querySelector('.js-reset')
           .addEventListener('click', () => {
            showResetConfirmation();
           });

           document.querySelector('.js-auto')
           .addEventListener('click', () => {
            autoPlay();
           });

          document.querySelector('.js-rock-button')
           .addEventListener('click', () => {
            playGame('rock');
           });

          document.querySelector('.js-paper-button')
           .addEventListener('click', () => {
            playGame('paper');
           });

          document.querySelector('.js-scissors-button')
           .addEventListener('click', () => {
            playGame('scissors');
           });


           function showResetConfirmation() {
            document.querySelector('.js-reset-confirmation')
          .innerHTML = `
            Are you sure you want to reset the score?
            <button class="js-reset-confirm-yes reset-confirm-button">
              Yes
            </button>
            <button class="js-reset-confirm-no reset-confirm-button">
              No
            </button>
          `;

          document.querySelector('.js-reset-confirm-yes')
          .addEventListener('click', () => {
            resetScore();
            hideResetConfirmation();
          });

          document.querySelector('.js-reset-confirm-no')
            .addEventListener('click', () => {
              hideResetConfirmation();
          });
         }

         function hideResetConfirmation() {
          document.querySelector('.js-reset-confirmation')
            .innerHTML = '';
        }

           


          function autoPlay(){
            if (!isAutoPlay){
             intrevalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playGame(playerMove);
              }, 1000);
            isAutoPlay = true;

          } else {
            clearInterval(intrevalId);
            isAutoPlay = false;
          }
        }


        document.body.addEventListener('keydown' , (event) => {
          if (event.key === 'r'){
            playGame('rock');
          } else if (event.key === 'p'){
            playGame('paper');
          } else if (event.key === 's'){
            playGame('scissors');
          }else if (event.key === 'a'){
            autoPlay();
          }else if (event.key === 'Backspace'){
          showResetConfirmation();
          }
        });


        function playGame(playerMove){
         var computerMove = pickComputerMove();
         
    
          console.log(computerMove)

          if(playerMove==='scissors') {
            if (computerMove === 'rock'){ result = 'You Lose'}
            else if (computerMove === 'paper'){result = 'You Win';}
            else if (computerMove === 'scissors'){result = 'Tie';}
          }

          else if (playerMove === 'paper') {
            if (computerMove === 'rock'){ result = 'You Win'}
            else if (computerMove === 'paper'){result = 'Tie';}
            else if (computerMove === 'scissors'){result = 'You Lose';}
          }

          else if (playerMove === 'rock') {
            if (computerMove === 'rock'){ result = 'Tie'}
            else if (computerMove === 'paper'){result = 'You Lose';}
            else if (computerMove === 'scissors'){result = 'You Win';}
          }

          if (result === 'You Win') {
            score.wins +=1
          } else if (result === 'You Lose'){
            score.losses +=1
          } else {
            score.ties +=1
          }

          localStorage.setItem ('score', JSON.stringify(score));

          updateScoreElement();

          document.querySelector('.js-result').
          innerHTML= result

          document.querySelector('.js-moves').
          innerHTML = `you
        <img src="/rock-paper-scissors-icons/${playerMove}-emoji.png"
        class="move-icon">
        <img src="/rock-paper-scissors-icons/${computerMove}-emoji.png"class="move-icon">
        computer`;
          

           
          /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);*/
        }

        function updateScoreElement (){
          document.querySelector('.js-score')
            .innerHTML =` Wins: ${score.wins}, Losses:
            ${score.losses}, Ties:${score.ties}`;
        }

        function pickComputerMove (){
          var randomNumber = Math.random();
          var computerMove = ' ';
          if (randomNumber >= 0 && randomNumber < 1/3 ){ computerMove ='rock';}
          else if ( randomNumber >= 1/3 && randomNumber < 2/3) { computerMove ='paper';}
          else if (randomNumber >= 2/3 && randomNumber < 1) { computerMove ='scissors';}

          return computerMove;
        }
      
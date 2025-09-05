function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {

    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}


function handleCostKeydown(event){
      console.log(event.key);
      if ( event.key === 'Enter' ){
        calculateTotal();
      }

    }

    function calculateTotal(){
      const inputElemnt = document.querySelector(`
      .js-cost-input`);
      let cost = Number(inputElemnt.value);
      console.log(typeof cost);

      document.querySelector('.js-total-cost')
       .innerHTML = '';
      document.querySelector('.js-error-message')
        .innerHTML = '';

      if (cost < 0) {
        document.querySelector('.js-error-message')
          .innerHTML = 'Error: cost cannot be less than $0';
          return;
      }

      if  (cost < 40 ) {
        cost = (cost + 10).toFixed(2);
      }

      document.querySelector('.js-total-cost')
      .innerHTML = `$${cost}`;
    }
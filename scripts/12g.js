/* setInterval(function (){
  if (document.title === 'App'){
    document.title = ' (2) New messages'

  }else {
    document.title = 'app';
  }
},1000)*/

/*let message = 2;

setInterval(function (){
  if (document.title === 'App') {
    document.title = ` (${message}) New messages`;
  } else {
    document.title = 'App';
  }
  },1000)*/

  let messages = 2;
  let intervalId;
  let isDisplayingNotification;


  displayNotification();

  function displayNotification() {
    if (isDisplayingNotification) {
      return;
    }

    isDisplayingNotification = true;

    intervalId = setInterval(function() {
      if (document.title === 'App') {
        document.title = `(${messages}) New messages`;
      } else {
        document.title = 'App';
      }
    }, 1000);
  }

  function stopNotification() {
    isDisplayingNotification = false;

    clearInterval(intervalId);
    document.title = 'App';
  }
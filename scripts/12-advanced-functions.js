/*
function greeting(){
  console.log('hello');
}
greeting();

const num=2
const function1 = function (){
  console.log('hello2');
}

console.log(function1);
console.log(typeof function1)
function1();

const object1 = {
  num: 2,
  fun: function (){
    console.log('hello3');
  }
};
object1.fun();

function display(param){
  console.log(param);
}

display(3);

function run (param){
  param();
}

run(function (){
  console.log('hello4');
})

setTimeout(function (){
  console.log('timeout');
  console.log('timeout2');
}, 3000);

console.log('next line')

setInterval(function(){
  console.log('intreval')
},3000);

console.log('next line 2')


[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach ( (value, index) => {
  if (value === 'wash dishes'){
    return;
  }
  console.log(index);
  console.log(value);
})


const regularFunction = function(param,param2) {
    console.log('hello');
    return 5;
    };
 
  const arrowFunction = (param,param2) => {
    console.log('hello'); 
    return 5;
  };
  arrowFunction();

  const oneParam= (param)=> {
    console.log(param + 1);
  }

  oneParam(8);

  const oneLine = () => 5 + 3;
  console.log(oneLine());

  const object2 = {
    method() {

    }
  }; 

  const buttonElement = document.querySelector('.js-button');


  const eventListener = () => {
    console.log('click');
  };

  buttonElement.addEventListener('click', eventListener);

  buttonElement.removeEventListener('click', 
    eventListener);

   buttonElement.addEventListener('click', () => {
    console.log('click2');
  }); 
  console.log([1, -3, 5].filter((value, index) =>{
     if (value >= 0) {
      return true;
    } else {
      return false;
    } 
      return value >=0;
    }));

    console.log([1,1,3].map((value, index) => {
      return value * 2;
    }));

       console.log([1,1,3].map(value => {
      return value * 2;
    }));

    console.log([1,1,3].map(value => value *2))
     

    const multiply = ( a , b) => a*b;
    

    console.log(multiply(2,3))
    console.log(multiply(7,10))

    function countPositive(nums) {
      let positiveNumbers = 0;
      nums.forEach((num) => {
        if (num > 0 ) {
          positiveNumbers++
        }
      });
      return positiveNumbers;
    }

    console.log(countPositive([1,-3,5]))
    console.log(countPositive([-2,3,-5,7,10])); 
    

    function addNum(array,num) {
      return array.map((value) => value+ num);
    }
    console.log(addNum([1, 2, 3], 2));
    console.log(addNum([-2, -1, 0, 99], 2));
    */
   function removeEgg(foods){
    let eggsRemoved = 0;
    return foods.filter((food) => {
      if (food === 'egg' && eggsRemoved < 2){
        eggsRemoved++;
        return false;
      }
      return true;
    });
   }

   console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
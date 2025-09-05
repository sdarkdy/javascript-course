/*const noms = [10 ,20 ,30];
console.log(noms);
noms[2]=99;
console.log(noms);

function getLastValue(array){
  const lastIndex = array.length - 1;
  return array [lastIndex];
}
console.log(getLastValue([1,20,22,24,5]));
console.log(getLastValue(['hi','hello','hey']));

function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi','hello','hey']));

  for(let i = 0; i <= 10; i= i+2 ){
    console.log(i);
  }

  for(let i = 5; i >= 0 ; i-- ){
    console.log(i);
  }

  i = 2 
  while(i <= 10){
    console.log(i);
    i = i +2;
  }

  i = 5 
  while(i >= 0){
    console.log(i);
    i--;
  }


 const nums = [1,2,3];
 let total = 0;
 for (let i = 0; i < nums.length; i++){
  const num = nums[i]
  total += num;
 }
 console.log(total);
const numsIncresed = [];
for (i = 0 ; i < nums.length; i++){
  const num = nums[i];
  numsIncresed.push(num + 1 );
}
 console.log(numsIncresed); 
 

 function addOne(array) {
  const result = []
  for (let i = 0 ; i < array.length; i++){
    result.push(array[i] +1);
  }
  return result;
 } 
 console.log(addOne([1,2,3]));
 console.log(addOne([-3,-2,1,99]));
 
 function addOne(array1, array2) {
  const result = []
  for (let i = 0 ; i < array1.length; i++){
    result.push(array1[i] + array2[i]);
  }
  return result;
 } 
 console.log(addOne([1,1,2], [1,1,3]));
 console.log(addOne([1,2,3],[4,5,6]));

 function addOne(array1, num) {
  const result = []
  for (let i = 0 ; i < array1.length; i++){
    result.push(array1[i] + num);
  }
  return result;
 } 
 console.log(addOne([1,1,2], 3));
 console.log(addOne([1,2,3],7));

 function countPositive(nums) {
  let result = 0;
  for (let i=0 ; i < nums.length; i++) {
    if (nums[i] > 0){
      result++
      }
    } 
  return result;
 }
  console.log(countPositive([1, -3, 5]));
  console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums) {
  if (nums.length === 0){
    return { min: null, max: null };
  }
  const result = {
    min: nums[0],
    max: nums[0]
  };

  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];

  if (value < result.min) {
    result.min = value;
  }
    if (value > result.max) {
      result.max = value;
    }
  }
    return result
}

console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));
console.log(minMax([3]));
console.log(minMax([]));

function countWords(words) {
  const result ={};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++
    }
  }
  return result;
}
console.log(countWords(['apple', 'grape', 'apple', 'apple']));

let words = ['hello','world','search','good'];
let index = -1
for (let i=0 ; i < words.length; i++){
 if ( words[i]=== 'search') {index = i;
  break;
}
}

console.log(index);

words = ['not', 'found'];
index = -1;


for(let i=0; i< words.length; i++){
  if (words[i] === 'search'){
    index = i;
    break;
  }
}

console.log(index);

function findIndex(array, word){
  for (let i=0 ; i < array.length; i++){
    if (array[i] === word){
    return i;
    }
}
return -1;
}
console.log(findIndex(['green', 'red', 'blue', 'red'],'red'))
console.log(findIndex(['green', 'red', 'blue', 'red'],'yellow'))

function removeEgg(foods){
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();
  const result =[];
  let eggsRemoved = 0;
  for (let i=0 ; i < reversedFoods.length ; i++){
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2 ){
      eggsRemoved++;
      continue;
    }
    result.push(reversedFoods[i]);
  }
  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);

for (let i = 1 ; i <= 20 ; i++ ){
  if (i % 3 === 0 && i % 5 === 0 ){
   console.log('FizzBuzz');
  }else if (i % 3 === 0){
    console.log('Fizz');
  }else if (i % 5 === 0){
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

function findIndex(array, word){
  for (let i=0 ; i < array.length; i++){
    if (array[i] === word){
    return i;
    }
}
return -1;
}

function unique(array){
  const result=[]

  for (let i = 0; i < array.length; i++ ){
    const word = array[i]
  if (findIndex(result, word) === -1){
    result.push(word);
  }
}
 return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));
*/
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2025-08-24'
},{
  name: 'wash dishes',
  dueDate: '2025-08-24'
}];

rendorTodoList();

function rendorTodoList(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name , dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    rendorTodoList();
    saveToStorage();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  rendorTodoList();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
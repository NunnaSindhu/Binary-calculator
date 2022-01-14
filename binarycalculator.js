function checkOperator() {
  if (
    display.innerHTML.endsWith("+") ||
    display.innerHTML.endsWith("-") ||
    display.innerHTML.endsWith("*") ||
    display.innerHTML.endsWith("/")
  ) {
    return true;
  }
}
let buttonZero = document.getElementById("btn0");
let buttonOne = document.getElementById("btn1");
let display = document.getElementById("res");
buttonZero.addEventListener("click", function () {
  let btnZero = document.getElementById("btn0").innerHTML;
  display.innerHTML += btnZero;
});
buttonOne.addEventListener("click", function () {
  let btnOne = document.getElementById("btn1").innerHTML;
  display.innerHTML += btnOne;
});
function clearData() {
  display.innerHTML = "";
}
let buttonSum = document.getElementById("btnSum");
buttonSum.addEventListener("click", function () {
  let btnSum = document.getElementById("btnSum").innerHTML;
  display.innerHTML += btnSum;
});
let buttonSub = document.getElementById("btnSub");
buttonSub.addEventListener("click", function () {
  let btnSub = document.getElementById("btnSub").innerHTML;
  display.innerHTML += btnSub;
});
let buttonMul = document.getElementById("btnMul");
buttonMul.addEventListener("click", function () {
  let btnMul = document.getElementById("btnMul").innerHTML;
  display.innerHTML += btnMul;
});
let buttonDiv = document.getElementById("btnDiv");
buttonDiv.addEventListener("click", function () {
  let btnDiv = document.getElementById("btnDiv").innerHTML;
  display.innerHTML += btnDiv;
});


function eqlButton() {
    if(!checkOperator()) {
        let re = /\d+/g;
        let re2 = /[\+\-\*\/]+/g
        let numbers = display.innerHTML.match(re);
        // console.log(numbers);
        let operations = display.innerHTML.match(re2);
        // console.log(operations);
       while(operations.length>0){
           if(operations.includes('*')){
let indexOfMul=operations.indexOf('*');
let mul=((indexOfMul!=0)?(parseInt(numbers[indexOfMul-1],2)): (parseInt(numbers[indexOfMul],2)+parseInt(numbers[indexOfMul+1],2)));
numbers.splice(indexOfMul,2);
numbers.splice(indexOfMul,0,mul.toString(2));
operations.splice(indexOfMul,1);
           }
           else if(operations.includes('/')){
               let indexOfDiv=operations.indexOf('/');
               let division=((indexOfDiv!=0)?parseInt(numbers[indexOfDiv-1],2): (parseInt(numbers[indexOfDiv],2)/parseInt(numbers[indexOfDiv+1],2)));
               division=Math.floor(division);
               numbers.splice(indexOfDiv,2);
               numbers.splice(indexOfDiv,0,division.toString(2));
               operations.splice(indexOfDiv,1);
           }
           else if(operations.includes('+')){
            let indexOfSum=operations.indexOf('+');
            let sum=((indexOfSum!=0)?parseInt(numbers[indexOfSum-1],2): (parseInt(numbers[indexOfSum],2)+parseInt(numbers[indexOfSum+1],2)));
            numbers.splice(indexOfSum,2);
            numbers.splice(indexOfSum,0,sum.toString(2));
            operations.splice(indexOfSum,1);
            // console.log(indexOfSum);
            // console.log(parseInt(numbers[indexOfSum - 1], 2));
            // console.log(parseInt(numbers[indexOfSum], 2));
            // console.log(parseInt(numbers[indexOfSum + 1], 2));
        }
        else if(operations.includes('-')){
            let indexOfSub=operations.indexOf('-');
            let sub=((indexOfSub!=0)?parseInt(numbers[indexOfSub-1],2): (parseInt(numbers[indexOfSub],2)-parseInt(numbers[indexOfSub+1],2)));
            numbers.splice(indexOfSub,2);
            numbers.splice(indexOfSub,0,sub.toString(2));
            operations.splice(indexOfSub,1);
        }
       
       }
       display.innerHTML=numbers[0].toString(2);
        }   
        else {
            alert("Line must ends with a number");
            }  
 }
      
    

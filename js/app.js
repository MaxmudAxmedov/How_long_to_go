var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__btn");
var elResult = document.querySelector(".result");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");

var runMan = 3.6;
var runBike = 20.1;
var runCar = 70;
var runPlan = 800;

function runM () {
  var elInputVal = Number(elInput.value);
  var soat = parseInt(elInputVal / runMan);
  var a = elInputVal / runMan - soat;
  var min = (a*60);
  var b = min - parseInt(min);
  var sekunt = (b * 60).toFixed(0);
  elResult.textContent = soat + " soat " + parseInt(min) + " min " + sekunt + " sekunt";
}
function runB () {
  var elInputVal = Number(elInput.value);
  var soat = parseInt(elInputVal / runBike);
  var a = elInputVal / runBike - soat;
  var min = (a*60);
  var b = min - parseInt(min);
  var sekunt = (b * 60).toFixed(0);
  elResult2.textContent = soat + " soat " + parseInt(min) + " min " + sekunt + " sekunt";
}
function runC () {
  var elInputVal = Number(elInput.value);
  var soat = parseInt(elInputVal / runCar);
  var a = elInputVal / runCar - soat;
  var min = (a*60);
  var b = min - parseInt(min);
  var sekunt = (b * 60).toFixed(0);
  elResult3.textContent = soat + " soat " + parseInt(min) + " min " + sekunt + " sekunt";
}
function runP () {
  var elInputVal = Number(elInput.value);
  var soat = parseInt(elInputVal / runPlan);
  var a = elInputVal / runPlan - soat;
  var min = (a*60);
  var b = min - parseInt(min);
  var sekunt = (b * 60).toFixed(0);
  elResult4.textContent = soat + " soat " + parseInt(min) + " min " + sekunt + " sekunt";
}


elBtn = addEventListener("click", function (r) {
  r.preventDefault();
  runM();
  runB();
  runC();
  runP();
});
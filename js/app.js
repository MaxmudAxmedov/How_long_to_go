var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__btn");
var elResult = document.querySelector(".result");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");

function runM (run) {
  var results = "";
  var elInputVal = Number(elInput.value);
  var soat = parseInt(elInputVal / run);
  var a = elInputVal / run - soat;
  var min = (a*60);
  var b = min - parseInt(min);
  var sekunt = (b * 60).toFixed(0);
  return results.textContent = soat + " soat " + parseInt(min) + " min " + sekunt + " sekunt";
}

elBtn = addEventListener("click", function (r) {
  r.preventDefault();

  elResult.textContent = runM(3.6);
  elResult2.textContent = runM(20.1);
  elResult3.textContent = runM(70);
  elResult4.textContent = runM(800);
});
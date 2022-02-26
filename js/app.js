var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elLabel = document.querySelector(".form__label");
var elBtn = document.querySelector(".form__btn");
var elMessage = document.querySelector(".message");
var elResult = document.querySelector(".result");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");

function runM (run) {
  var results = "";
  var elInputVal = Number(elInput.value);
  var soat = parseInt(elInputVal / run);
  var a = (elInputVal / run) - soat;
  var min = (a*60);
  var b = min - parseInt(min);
  var sekunt = (b * 60).toFixed(0);
  return results.textContent = soat + " soat " + parseInt(min) + " min " + sekunt + " sekunt";
}

function testerFunc(r){
  r.preventDefault();
  
  if(elInput.value <= 0 || isNaN(elInput.value)){
    elResult.textContent = "0";
    elResult2.textContent = "0";
    elResult3.textContent = "0";
    elResult4.textContent = "0";

    elInput.classList.add("inp-error");
    elLabel.classList.add("label-error");

    elInput.classList.remove("inp-success");
    elLabel.classList.remove("label-success");

    elMessage.textContent=`Faqatgina son kiriting, musbatda !!`;
    elMessage.classList.add("error");
  
    myError();
    return;
  }else{
    elMessage.textContent=``;
  }

  elResult.textContent = runM(3.6);
  elResult2.textContent = runM(20.1);
  elResult3.textContent = runM(70);
  elResult4.textContent = runM(800);

  elInput.classList.remove("inp-error");
  elLabel.classList.remove("label-error");

  elInput.classList.add("inp-success");
  elLabel.classList.add("label-success");

  elMessage.classList.remove("error");
}

elForm = addEventListener("submit", testerFunc);

function myError() {
  document.getElementById("my_audio-error").play(); 
}




let clrInterval1, clrInterval2, clrInterval3;
const btnStartDom = document.querySelector("#btnStart");

btnStartDom.addEventListener("click", () => {

  setInterval(() => {

    let rndNum = Math.floor(11 * Math.random());
    let inputDom = document.querySelectorAll("#tblLayout input");
    inputDom[0].value = rndNum;
    inputDom[1].value = rndNum;
    inputDom[2].value = rndNum;

  }, 100);

});

const btnResetDom = document.querySelector("#btnReset");

btnResetDom.addEventListener("click", () => {
  location.reload();
});

// Go! 버튼 시작
const numPrnDom = document.querySelectorAll(".numPrn");

const btnGoDom = document.querySelectorAll(".btnGo");
console.log(btnGoDom);
btnGoDom[0].addEventListener("click", () => {
  alert("OK1");
});
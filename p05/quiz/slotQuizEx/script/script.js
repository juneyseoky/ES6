// Start 버튼 시작
let clrInterval1;
let clrInterval2;
let clrInterval3;
const btnStartDom = document.querySelector("#btnStart");
btnStartDom.addEventListener("click", () => {
  clrInterval1 = setInterval(() => {
    let rndNum = fnRnd();
    let inputDom = document.querySelectorAll("#tblLayout input");
    inputDom[0].value = rndNum;
  }, 100);
  clrInterval2 = setInterval(() => {
    let rndNum = fnRnd();
    let inputDom = document.querySelectorAll("#tblLayout input");
    inputDom[1].value = rndNum;
  }, 100);
  clrInterval3 = setInterval(() => {
    let rndNum = fnRnd();
    let inputDom = document.querySelectorAll("#tblLayout input");
    inputDom[2].value = rndNum;
  }, 100);
});

// Reset 버튼 시작
const btnResetDom = document.querySelector("#btnReset");
btnResetDom.addEventListener("click", () => {
  location.reload();
});

// Go! 버튼 시작
let numAry = [0, 0, 0];
const numPrnDom = document.querySelectorAll(".numPrn");

const btnGoDom = document.querySelectorAll(".btnGo");
btnGoDom[0].addEventListener("click", () => {
  clearInterval(clrInterval1);
  
  let insNum;
  let cnt; // 난수 다시 입력체크용 변수
  // 0보다 큰 숫자라면 같은 값이 있음
  while (true) {
    
    let cnt = 0;
    insNum = fnRnd();
    if (numAry[1]!=0) {
      if(numAry[1] == insNum) continue;
    }
    if (numAry[2]!=0) {
      if(numAry[2] == insNum) continue;
    }
    console.log("insNum : " + insNum);
    numAry[0] = insNum;
    console.log("numAry : " + numAry.toString());  // [0, 0, 0]
    break;
  }
  
  numPrnDom[0].value = insNum;
});

// [0, 0, 0] 또는 [2, 0, 0] 또는 [2, 0, 5] 또는 [0, 0, 6]
btnGoDom[1].addEventListener("click", () => {
  clearInterval(clrInterval2);
  
  let insNum;
  let cnt;   // 난수 다시 입력체크용 변수
                 // 0보다 큰 숫자라면 같은 값이 있음
  while (true) {
    let cnt = 0;
    insNum = fnRnd();
    if (numAry[0] != 0) {
      if (numAry[0] == insNum) continue;
    }
    if (numAry[2] != 0) {
      if (numAry[2] == insNum) continue;
    }
    console.log("insNum : " + insNum);
    numAry[1] = insNum;
    console.log("numAry : " + numAry.toString()); // [0, 0, 0]
    break;
  }
  numPrnDom[1].value = insNum;

});

btnGoDom[2].addEventListener("click", () => {
  clearInterval(clrInterval3);

  let insNum;
  let cnt; // 난수 다시 입력체크용 변수
  // 0보다 큰 숫자라면 같은 값이 있음
  
  while (true) {
    let cnt = 0;
    insNum = fnRnd();
    if (numAry[0] != 0) {
      if (numAry[0] == insNum) continue;
    }
    if (numAry[1] != 0) {
      if (numAry[1] == insNum) continue;
    }
    console.log("insNum : " + insNum);
    numAry[2] = insNum;
    console.log("numAry : " + numAry.toString()); // [0, 0, 0]
    break;
  }
  numPrnDom[2].value = insNum;
});

// 난수 생성 함수
function fnRnd() {
  let rndNum = Math.floor(10 * Math.random() + 1);
  return rndNum;
}

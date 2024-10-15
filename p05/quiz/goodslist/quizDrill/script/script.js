let regBtnDom = document.querySelector("#regBtn");
let prnTag = "";
let cnt = 1;
const goodsMap = new Map([]);
let revMap;
regBtnDom.addEventListener("click", () => {
  prnTag = "";
  let chkToF = confirm(`상품을 등록하시겠습니까?`);
  // ToF = True or False
  //console.log(`chkToF : ${chkToF}`);

  if (chkToF) {
    let goodsKey = document.querySelector("#goodsName").value;
    let amountValue = document.querySelector("#amount").value;
    goodsMap.set(goodsKey, amountValue);
    document.querySelector("#goodsName").value = "";
    document.querySelector("#amount").value = "";

    let list = goodsMap.entries();

    //revMap = new Map([...list].reverse());

    //let revList = revMap.entries();
    list.forEach((prop, idx) => {
      console.log(prop[0]);
      console.log(prop[1]);
      console.log(idx);

      prnTag += `<div class="dFlex listColumn">
            <span>${idx + 1}</span>
            <span>${prop[0].toString()}</span>
            <span>${prop[1].toString()}</span>
            <span data-key="${prop[0]}" class="delIcon">&times;</span>
          </div>`;
    });

    document.querySelector("#listPrn").innerHTML = prnTag;

    // 제품 삭제
    const delDom = document.querySelectorAll("span.delIcon");
    delDom.forEach((e, i) => {
      e.addEventListener("click", () => {
        let key = e.getAttribute("data-key");
        alert("key : " + key);
        console.log(key + ", " + i);

        goodsMap.delete(key);
        let modList = goodsMap.entries();

        modList.forEach((prop, idx) => {
          console.log(prop[0]);
          console.log(prop[1]);
          console.log(idx);

          prnTag = "";
          prnTag += `<div class="dFlex listColumn"> 
            <span>${idx + 1}</span>
            <span>${prop[0].toString()}</span>
            <span>${prop[1].toString()}</span>
            <span data-key="${prop[0]}" class="delIcon">&times;</span>
          </div>`;

          document.querySelector("#listPrn").innerHTML = prnTag;
        });
      });
    });
  } else {
    alert(`사용자가 취소하셨습니다.`);
  }
});

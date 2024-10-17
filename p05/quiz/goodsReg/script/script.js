const dtnDom = document.querySelectorAll("button");
const inputVal = document.querySelectorAll("input");

dtnDom.forEach(e => {
    e.addEventListener("click", (event) => {
        let innerTxt = event.target.innerText
        if (innerTxt == "등록하기") {
            goodsReg();
        } else {
            inputVal.forEach(e => {
                e.value = "";
                if (e.type === "checkbox") {
                    e.checked = false;
                }
            });
        }
    })
});

function goodsReg() {
    let reslist = [];
    let res;
    inputVal.forEach(e => {
        reslist.push(inputValidation(e));
    });
    res = goodsAlert(reslist);
    if (res == true) {
        alert("등록 OK");
    }
}

function inputValidation(e) {
    const codeVali = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#_\-]{5,15}$/;
    const itemVali = /^[가-힣A-Za-z\d#]{2,}$/;
    const nameVali = /^[가-힣]{2,5}$/;
    let inputVal = e.value
    let res;
    let reslist = [];
    if (e.name == "code") {
        res = codeVali.test(inputVal);
    } else if (e.name == "item") {
        res = itemVali.test(inputVal);
    } else if (e.name == "manager") {
        res = nameVali.test(inputVal);
    } else if (e.name == "inspection") {
        res = e.checked;
    }
    reslist = [e.name, res];
    return reslist;
}

function goodsAlert(reslist) {
    const errStr = new Map([
        ["code", "상품코드는 5~8글자로 영어 1글자 이상, 숫자 1글자 이상, #, _, - 만 가능합니다."],
        ["item", " 상품명은 2글자 이상으로 한글과 영어, 숫자 및 특수기호 #만 가능합니다."],
        ["manager", "담당자이름은 2~5글자로 한글만 가능합니다."],
        ["inspection", "상품 검수확인을 체크해주세요."]
    ]);
    // some() 배열의 요소중 하나라도 주어진 
    // 테스트를 통과하면 true를 return 한다.
    const hasErr = reslist.some(e => {
        if (e[1] == false) {
            alert(errStr.get(e[0]));
            document.getElementsByName(e[0])[0].focus();
            return true // false가 발견되면 true 반환
        }
        return false // false가 없다면 false 반환
    });
    return !hasErr; // false가 없다면 true 변환해서 반환 있다면 false로 변환해서 반환

    // const hasErr = reslist.every(e => {
    //     if (e[1] == false) {
    //         alert(errStr.get(e[0]));
    //         return false // false가 발견되면 false 반환
    //     }
    //     return true      // false가 없다면 true 반환
    // });
    // return hasErr; 

    // some()은 배열의 요소 중 하나라도 false인 경우 
    // true를 반환하도록 확인합니다.

    // every()는 모든 요소가 true여야 true를 반환하고, 
    // 하나라도 false이면 false를 반환합니다.
}
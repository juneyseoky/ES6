let btnDom = document.querySelector("button");
let rdoDom = document.querySelectorAll("input[type=radio]");
let selectedCheck = document.querySelector("#selectCheck");
let convtype = "";
rdoDom.forEach((e, i) => {
    if (e.checked) {
        convtype = e.value;
    }
})
rdoDom[0].addEventListener("click", () => {
    selectedCheck.innerText = "센티(cm)미터 입력";
});
rdoDom[1].addEventListener("click", () => {
    selectedCheck.innerText = "인치(Inch) 입력";
});

btnDom.addEventListener("click", () => {

    let insData = document.querySelector("#insData").value;
    let res = 0;
    let txt = "";
    switch (convtype) {
        case "c2i":
            res = insData / 2.54;
            res = res.toFixed(1);
            txt = `${insData} cm = ${res} inch`;
            break;
        case "i2c":
            res = insData * 2.54;
            res = res.toFixed(1);
            txt = `${insData} inch = ${res} cm`;
            break;
    }
    document.querySelector("#resBox").innerText = txt;
});
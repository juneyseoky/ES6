let bnt = document.querySelector("button");
bnt.addEventListener("click", () => {
    let cnt = document.querySelector("input[type=text]").value;
    let num = 1;
    let txt = "";
    let tag = "<p>";
    cnt = parseInt(cnt);
    if (cnt < 3 || cnt > 9) {
        tag += "입력 오류!</p>"
        tag += "<p>다시 입력해주세요.</p>"
        tag += "(3~9 사이 값 입력)"
    } else {
        for (let i = 1; i <= 10; i++) {
            for (let y = 1; y <= 10; y++) {
                txt += num;
                if (y < 10) {
                    txt += " ";
                }
                num++
                if (num > cnt) {
                    num = 1;
                }
            }
            tag += txt;
            tag += "</p>"
            txt = "";
        }
    }
    tag += "<br><button onclick='resetBtn()'>재실행</button>"
    document.querySelector("div#resBox").innerHTML = tag;

});
function resetBtn() {
    document.querySelector("#resBox").innerHTML = "<br><button onclick='resetBtn()'>재실행</button>";
}
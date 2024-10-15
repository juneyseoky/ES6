let goodsList = [];
let cnt = 1;
const addbtnDom = document.querySelector("#goodsAddBtn");
const goodsNameDom = document.querySelector("input#goodsName");
const goodsCntDom = document.querySelector("#goodsCnt");
addbtnDom.addEventListener("click", () => {
    let addAsk = confirm("상품을 등록하시겠습니까?")
    let valChk = valueChk(goodsNameDom.value, goodsCntDom.value);
    if (addAsk == true && valChk == true) {

        let goodsMap = new Map();
        // goodsMap.set("goodsNo", cnt)
        goodsMap.set("goodsName", goodsNameDom.value);
        goodsMap.set("goodscnt", goodsCntDom.value);
        goodsList.push(goodsMap);
        addList();
    } else {
        return
    }
});
function valueChk(name, cnt) {
    if (name == "" || cnt == "") {
        alert("상품명과 수량을 적어주세요.")
        return false
    } else {
        return true
    }
}

function addList() {
    let tag = "";
    const tableTbody = document.querySelector("tbody");
    const goodsNameDom = document.querySelector("input#goodsName");
    const goodsCntDom = document.querySelector("#goodsCnt");
    goodsNameDom.value = "";
    goodsCntDom.value = "";
    let noNum = goodsList.length
    goodsList.reverse().forEach((e, i) => {
        tag += `<tr id =${i}>`;
        tag += `<td>${noNum}</td>`;
        tag += `<td>${e.get("goodsName")}</td>`;
        tag += `<td>${e.get("goodscnt")}</td>`;
        tag += `<td class="close">x</td>`;
        tag += "</tr>";
        noNum--;
    });

    tableTbody.innerHTML = tag;
    const tdDom = document.querySelectorAll("td.close");
    tdDom.forEach((td) => {
        td.addEventListener("click", (event) => {
            console.log("td : " + event.target.parentElement.id);
            let idx = Number(event.target.parentElement.id);
            goodsList.splice(idx, 1);
            addList();
        });
    });
}

const resBtn = document.querySelector("button");
const size = {
    big: "대과",
    middle: "중과",
    small: "소과"
};

resBtn.addEventListener("click", function () {
    let cnt = document.querySelector("input#count").value;
    let sizeSelect = document.querySelector('input[name="size"]:checked');
    let tag = "";

    if (!sizeSelect) {
        tag = "<span>사이즈를 선택해주세요!</span>";
        document.querySelector("div#resBox").innerHTML = tag;
        return;
    }

    // 숫자가 20 이상인지 확인
    if (cnt < 20) {
        tag = "<span>입력오류!! 20개 이상 입력해주세요!!</span>";
    } else {
        let selectedSize = sizeSelect.value;
        let boxSize;
        let a;

        // 선택한 크기에 따른 박스당 과일 개수 설정
        if (selectedSize === "big") {
            a = size.big;
            boxSize = 8;
        } else if (selectedSize === "middle") {
            a = size.middle;
            boxSize = 11;
        } else if (selectedSize === "small") {
            a = size.small;
            boxSize = 15;
        }

        // 박스 개수와 나머지 계산
        let boxCnt = Math.floor(cnt / boxSize);
        let res = cnt % boxSize; // 나머지 계산

        // 결과 태그 생성
        tag = `${a} ${boxCnt} 상자를 포장하고 ${res} 개 남습니다.`;
    }

    // 결과 출력
    document.querySelector("div#resBox").innerHTML = tag;
});

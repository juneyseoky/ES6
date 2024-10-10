const subBtn = document.querySelector("#submitTime");
const setTime = document.querySelector("input#setEndTime");
const nowTimeArea = document.querySelector("#nowTime");
const endTimeArea = document.querySelector("#endTime");
const startbtn = document.querySelector("#start");
const stoptbtn = document.querySelector("#stop");
const resettbtn = document.querySelector("#reset");
const countTime = document.querySelector("#countTime");
let interval;
let now = new Date();
let nowH = addZero(now.getHours());
let nowM = addZero(now.getMinutes());
let nowTime = nowH + " : " + nowM;
nowTimeArea.innerText = nowTime;

subBtn.addEventListener("click", () => {
    if (setTime.value) {
        endTimeArea.innerText = setTime.value;
    } else {
        alert("입력혀잉~")
    }
})
startbtn.addEventListener("click", () => {
    let nowTime = now.getTime();
    let selectTime = endTimeArea.innerText;
    let end = new Date();
    let [hours, minute] = selectTime.split(":").map(Number);
    end.setHours(hours, minute, 0, 0);
    let diffInMs = end.getTime() - nowTime;
    if (diffInMs <= 0) {
        alert("현재 시간 이후로 설정해주세요.")
    } else {
        interval = setInterval(() => {
            diffInMs = diffInMs - 1000
            const diffInSeconds = Math.floor(diffInMs / 1000);
            const diffInMinutes = Math.floor(diffInSeconds / 60);
            let diffInHours = Math.floor(diffInMinutes / 60);
            let remainingMinutes = diffInMinutes % 60;
            let remainingSeconds = diffInSeconds % 60;
            remainingMinutes = addZero(remainingMinutes);
            remainingSeconds = addZero(remainingSeconds);
            diffInHours = addZero(diffInHours);

            let endTime = diffInHours + ":" + remainingMinutes + ":" + remainingSeconds
            let absoluteTime = diffInMs / 1000

            console.log(absoluteTime.toFixed(0));
            if (absoluteTime.toFixed(0) <= 0) {
                alert("시간종료!");
                clearInterval(interval);
                return
            }
            countTime.innerText = endTime;
        }, 1000);
    }
})
stoptbtn.addEventListener("click", () => {
    clearInterval(interval);
})
resettbtn.addEventListener("click", () => {
    // setTime.value = "";
    location.reload();
})

function addZero(p) {
    p = parseInt(p);

    if (p < 10) {
        p = "0" + p;
    }
    return p;
}
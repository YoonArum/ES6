//show(); fuction 키워드로 사용 가능
/*
function show(){
  console.log("show");
}
*/

//화살표 함수형식으로 생성 : 함수내 명령어 하나이면 {} 생략가능
const show = () => {
    //console.log("show : 화살표 함수");

    const msgId = document.querySelector("#msg");
    // msgId.innerHTML = ("<h2>페이스북</h2>"); console.log(msgid.innerText);
    // msgId.innerText = ("<h2>페이스북</h2>"); console.log(msgId.innerText);
    // console.log(msgId.innerText);

    /* for (let i = 1; i <= 3; i++) {
        console.log(i)
        msgId.innerHTML += (
            `<div class="divMsg" id="divid` + i + `">div</div>`
        );
    } */

    // 1 태그 생성
    let tag = "";
    
    /*
    //반복 생성
    for (let i = 1; i <= 6; i++) {
      // tag = tag+`<div class="divMsg" id="divid` + i + `">div</div>`;
      //tag = tag + `<div class="divMsg" id="divid${i}">${i}</div>`;
      //tag = tag + `<div class=diceimg id=dicediv> <img id=dice src="./images/${i}.png"></img> </div>`
    }
    */
    
    // (0~5)+1 랜덤수 생성
    const ran = Math.floor(Math.random()*6)+1;
    console.log(ran);
    
    const formSection = document.querySelector("#formSection")
    formSection.style.display = "none";
    
    
    
    tag = `<div class=diceimg id=dicediv> <img id=dice src="./images/${ran}.png"></img> </div>`
    
    // 2 DOM에서 태그를 넣을 요소 선택
    const msgDiv = document.querySelector("#msg");
    
    // 3 선택한 요소의 HTML 변경 document.querySelector("#msg").innerHTML=tag;
    msgDiv.innerHTML = tag;
    
    //3-1 스타일변경
    msgDiv.style.backgroundColor = "red"; //배경색 변경
    
    console.log(getComputedStyle());

    
    
};

//화살표 함수형식으로 생성
/*const show = ()=>{console.log("show : 화살표 함수")};*/

/* DOM 요소가 생성된후에 실행 */
document.addEventListener("DOMContentLoaded", () => {
  
});

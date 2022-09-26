/*
기존 함수 선언 방식
function funcPrint(){
  console.log("외부 자바스크립트");
  console.log("버튼"+1)  
}
*/

// ES6+ : 화살표 함수
const funcPrint = (n) => {
  // console.log(n);
  // console.log("외부 자바스크립트");
  console.log(`버튼${n}`);
}
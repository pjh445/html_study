const $popup = document.querySelector("#popup");

//이벤트 리스너 방식
$popup.children[1].addEventListener( "click" , dat  );

const $footer = document.querySelector("footer");

//이벤트 리스너 방식
$footer.addEventListener( "click" , bo  );

function dat() {
    $popup.style.display = 'none';
}

function bo() {
    $popup.style.display = 'block';
}

//메뉴1에서 '서브메뉴1-2'를 클릭하면 바탕색이 빨간색이 된다
const $subMenu12 = document.querySelector("nav li:first-child a:last-child");

function red() {
    $subMenu12.style.background = 'red';
}

//서브메뉴2-4]를 클릭하면 배경색이 파란색이 된다.
const $subMenu24 = document.querySelector("#blue");

//이벤트 리스너 방식
$subMenu24.addEventListener("click" , blue );

function blue() { 
    $subMenu24.style.background = 'blue';
}

//id="sm41" onclick="tr()"
//[서브메뉴4-1]을 클릭하면 글자색이 빨간색이 된다.
const $sm41 = document.querySelector("#sm41");

function tr() {
    $sm41.style.color = 'red';
    $sm41.style.textDecoration = 'none';
}

//공지사항 영역을 클릭하면 배경색이 변경됨. 이벤트 리스너 방식으로 구현.
$popup.addEventListener("click" , tomato);
function tomato() {
    $popup.style.background = 'tomato';  
}










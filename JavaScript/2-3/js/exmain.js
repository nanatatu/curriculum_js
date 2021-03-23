let btn = document.getElementById("btn");
let box = document.getElementById("box");
//ボタンがクリックされたら = アラートを出す

/*
1イベント１つの処理
btn.onclick = function() {
    alert("ボタンがクリックされました");
}
*/

//ボタンが押されたら、背景色を赤にする
btn.addEventListener("click", function() {
    box.style.backgroundColor = "red";
}, false);

//ボタンが押されたらアラートを出す
btn.addEventListener("click", function() {
    alert("ボタンが押されましたYO!");
}, false);


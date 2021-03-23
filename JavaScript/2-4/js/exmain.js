//querySelectorで対象のinput要素を取得
//addEventListenerでクリックされたらというイベントを追加
document.querySelector("#createBtn").addEventListener("click", function() {
    //createElementを使って追加したい要素の名前を文字列で入れる。
    let item = document.createElement("li");
    //変数itemにitemという文字列を入れる。
    item.textContent = "item";

    let ul = document.querySelector("ul");
    //appendChildでulの子要素liにitemを追加する。
    ul.appendChild(item);
})

function createBtn() {
    let item1 = document.createElement("li");
    item1.textContent = "item"
    let ul = document.querySelector("ul");
    ul.appendChild(item1);
}
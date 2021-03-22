//クラス名を使って取得（上から一つだけ）
let box = document.querySelector(".box");
console.log(box);

//クラス名を使って取得（複数）
let boxClass = document.querySelectorAll(".box");
for ( let i = 0; i < boxClass.length; i++) {
    console.log(boxClass[i]);
}

//idを使って取得
let boxId = document.querySelector("#box");
console.log(boxId);

//formタグの中にあるクラス名がboxのもの全て
let elems1 = document.querySelectorAll("form > .boxs");
for (let i = 0; i < elems1.length; i++) {
    console.log(elems1[i]);
}

//input要素のtype属性がradioの要素を全て
let elems2 = document.querySelectorAll("input[type=radio]");
for (let i = 0; i < elems2.length; i++) {
    console.log(elems2[i]);
}
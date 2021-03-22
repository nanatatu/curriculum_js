//タグから要素を取得
let elems = document.getElementsByTagName('h1');
//HTMLを上から順番に探した時に、最初に見つかったh1タグが0番目の要素として取得する。
console.log(elems[0]);
console.log(elems[1]);

//nameから要素を取得
let boxs = document.getElementsByName('box');
for (let i = 0; i < boxs.length; i++) {
    console.log(boxs[i]);
}

//classから要素を取得
let boxs1 = document.getElementsByClassName('box');
    console.log(boxs1[0]);
    console.log(boxs1[1]);
    console.log(boxs1[2]);



function myfunc() {
    //idが「target」の要素を取得して、変数changeに代入
    let change = document.getElementById('target');

    //textContentを使って「こんにちは」で置き換える
    change.textContent = 'こんにちは！';
}
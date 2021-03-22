//ID検索→クリックした時function(){処理}を実行
//クリックした要素のクラス属性を"red"にして、css側で処理
document.getElementById("box").onclick = function() {
    this.classList.toggle("red");
}


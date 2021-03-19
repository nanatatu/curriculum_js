//以下課題

//Q1
let scores = [10, 15, 20, 25];
for (let i = 0; scores.length; i++) {
    if (scores[i] % 2 === 0) {
        console.log(`${scores[i]}は偶数です`);
    }
}
//Q2

//配列
let exscores = [50, 60, 70, 80, 90];
console.log(exscores);
console.log(exscores[2]);         //特定の要素を取り出す
console.log(exscores.length);     //要素数を数える

//for文との組み合わせ
for (let x = 0; x < exscores.length; x++) {
    console.log(`得点は${exscores[x]}点です。`);
}

//オブジェクト
let human = {
    name: "Donald Trump",
    height: 190,
    weight: 108,
    gender: "男",
    age: 74,
};
//オブジェクト アクセス
console.log(human.name);
console.log(human[`age`]);
//以下課題

//Q1
let a = 10;
let b = 15;
console.log(a !== 10);
console.log(b >= 10 && b < 20 && b % 2 === 0);

//Q2
let x = 10;
if (x >= 10 && x<=20) {
    console.log("成功です");
} else {
    console.log("失敗です");
}

x = 9;
if (x >= 10 && x<=20) {
    console.log("成功です");
} else {
    console.log("失敗です");
}

//Q3
let y = 0;

if (y % 2 === 0) {              
    console.log("偶数です");
} else {
    console.log("奇数です");
}


let num1 = 10;
let num2 = 4;
let result;
//足し算
result = num1 + num2;
console.log(result);
//引き算
result = num1 - num2;
console.log(result);
//掛け算
result = num1 * num2;
console.log(result);
//割り算
result = num1 / num2;
console.log(result);
//剰余
result = num1 % num2;
console.log(result);
//文字列結合もJavaと一緒

let inc = 10;
let dec = 10;
inc++;                //インクリメント
console.log(inc);
dec--;                //デクリメント
console.log(dec);

console.log(10 === 10); //両辺が等しい
console.log(10 !== 5);  //両辺が等しくない
//他の比較演算子はJavaと一緒

let score = 90;
if (score >= 70) {
    console.log("合格");
} else if(score === 0) {
    console.log("0点はまずいです...");
} else {
    console.log("不合格");
}


let name = "hoge";
const NAME = "HOGE";
//let NAME = "BUNYO"; /main.js:3 Uncaught SyntaxError: Identifier 'NAME' has already been declared

console.log(name);
console.log(NAME);  

name = "fuga";
console.log(name);

let number = 10;
console.log(`${name}くんは${number}月生まれです`);
/*
テンプレートリテラル（`文字列${変数}`)
文字列と変数を+で繋ぐ必要がなくなる。
*/

var v_name = "hoge";    //varはletと異なり再定義可
console.log(v_name);
var v_name = "fuga";
console.log(v_name);

//以下課題
let price = 100;
console.log(price * 2);

price = 500;
console.log(price * 2);
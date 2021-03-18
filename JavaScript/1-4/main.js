//以下課題
for (num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz!!");
    } else if (num % 3 === 0) {
        console.log("Fizz!");
    } else if (num % 5 === 0) {
        console.log("Buzz!!");
    } else {
        console.log(num);
    }
}
/* 
while
先行条件式評価
*/
let num1 = 1;
while (num1 <= 5) {
    console.log(num1);
    num1++;
}

/*
do while
演算後条件式評価
*/
let num2 = 1;
do {
    console.log(num2);
    num2++;
} while (num2 <= 5);

//for文
for (let num3 = 1; num3 <=5; num3++) {
    console.log(num3);
}

//break
let num4 = 0;
while (num4 < 5) {
    if(num4 === 3) {
        break;
    }
    console.log(num4);
    num4++;
}

//continue
let num5 = 0;
while (num5 < 5) {
    if (num5 === 3) {
        num5++;
        continue;
    }
    console.log(num5);
    num5++;
}

//Q1

let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for (i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        num = numbers[i];
    }
    isEven(num);
}

function isEven(num) {
    console.log(num + 'は偶数です');
}

//Q2
class Car {
    constructor (gasoline, number) {
        this.gasoline = gasoline;
        this.number = number;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.number}です。`);
    }
}

let cx5 = new Car(2.5, "さ 62-05");
cx5.getNumGas();
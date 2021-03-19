//以下課題
class Taiyaki {
    constructor(food) {
        this.food = food;
    }

    introduce() {
    console.log(`中身は${this.food}です。`);
    }
}

let anko = new Taiyaki("あんこ");
let creem = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");

anko.introduce();
creem.introduce();
cheese.introduce();

class President  {
    constructor(name, age, height, weight, gender, approval) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.approval = approval;
    }

speech() {    
    console.log(`${this.name}は演説を行った`);
    console.log(`${this.name}の支持率が１ポイント上昇した`);
    this.approval++;
    }
}


//大統領クラスからトランプ大統領オブジェクトを作成
let trump = new President("Donald Trump", 74, 190, 108, "男", 32);
//大統領クラスからバイデン大統領オブジェクトを作成
let biden = new President("Joseph Biden", 78, 183, 82, "男", 44);

console.log(trump.name);
console.log(trump.approval);
trump.speech();
console.log(trump.approval);

console.log(biden.name);


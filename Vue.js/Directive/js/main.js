var app = new Vue ({
    el: "#app",
    data: {
        //データを準備
        message: "Hello Vue.js",
        score: 10,
        items: ["item1", "item2", "item3"],
        users: [
            {id: 1, name: "taro", age: 21},
            {id: 2, name: "jiro", age: 22},
            {id: 3, name: "saburo", age: 23},
        ],
        //newItemを空の状態で用意する。
        newItem: "",
        show: false
    },
    methods: {
        //関数
        double: function() {
            return this.score * 2;
        },
        addItem: function() {
            //data内のデータにはthisでアクセスできる。
            this.items.push(this.newItem);
        }
    },
    computed: {
        //算出プロパティ
    }
})
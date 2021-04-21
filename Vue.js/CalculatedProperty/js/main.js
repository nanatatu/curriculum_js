var vm = new Vue({
    el: '#app',
    data: {
        lastName: '',
        firstName: ''
    },
    //computed 算出プロパティ
    computed: {
        fullName: function () {
            return this.lastName + ' ' + this.firstName
        }
    }
    //文字列を結合するという能力を持ったfullNameという値が使われている。
})
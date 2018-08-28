var app = new Vue({
    el: '#app',
    data: {
        fromText: '',
        toText: '',
        appKey: '7d26aee1564aa5f4',
        salt: '535654314',
        appSecret: 'xwNuODDlrqhQynxV0fN3209FVlVY18PX',
        placeholderText: '请输入你想要翻译的内容',
    },
    methods: {
        translate: function () {
            if (this.fromText.trim() === '') {
                return;
            }
            var self = this;
            var sign = $.md5(this.appKey + this.fromText + this.salt + this.appSecret)
            $.ajax({
                url: "https://openapi.youdao.com/api",
                method: "get",
                contentType: 'application/json',
                dataType: "jsonp",
                data: {
                    q: this.fromText,
                    from: 'auto',
                    to: 'auto',
                    appKey: this.appKey,
                    sign,
                    salt: this.salt
                },
                success: function (res) {
                    if (res.errorCode === '0') {
                        self.toText = res.translation[0];
                        console.log(1111);
                    }
                    else {
                        alert('翻译出错');
                    }
                },
                error: function () {
                    console.log('翻译异常')
                }
            })
        }
    }

})
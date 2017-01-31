new Vue({
    el: '#app-index',
    data: {
        msg: 'aaa',
        pages:[
            {
                name: 'p1',
                url: '.././sample.html',
                imageUrl: ''
            },
            {
                name: 'p2',
                url: '.././sample.html',
                imageUrl: ''
            },
        ]
    },
    methods: {
        openWindow: function(page) {
            var win;
            var features = "width='1024px',menubar=no,location=no,resizable=yes,scrollbars=yes,status=no";
            window.open(page.url, page.name, features);
        }
    }
})
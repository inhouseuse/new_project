// ページ情報を集約したリスト
Window.contentslist = [
    {
        groupName: 'Group1',
        groupColor: '#F44336',
        pages: [
            {
                title: 'Page1',
                desc: 'this page is ....',
                url: 'projects_name1/index.html',
                imgUrl: './index/img/react.png',
            },
            {
                title: 'Page2',
                desc: 'this page is ....',
                url: 'projects_name2/index.html',
                imgUrl: './index/img/react.png',

            },
            {
                title: 'Page3',
                desc: 'this page is ....',
                url: 'projects_name3/index.html',
                imgUrl: './index/img/react.png',

            },
        ]
    },
    {
        groupName: 'Group2',
        groupColor: '#9C27B0',
        pages: [
            {
                title: 'Page1',
                desc: 'this page is ....',
                url: 'projects_name1/index.html',
                imgUrl: './index/img/600x400.png',
            },
            {
                title: 'Page2',
                desc: 'this page is ....',
                url: 'projects_name2/index.html',
                imgUrl: './index/img/600x400.png',

            },
            {
                title: 'Page3',
                desc: 'this page is ....',
                url: 'projects_name3/index.html',
                imgUrl: './index/img/600x400.png',

            },
        ]
    },
    {
        groupName: 'Group3',
        groupColor: '#EF6C00',
        pages: [
            {
                title: 'Page1',
                desc: 'this page is ....',
                url: 'projects_name1/index.html',
                imgUrl: './index/img/600x400.png',
            },
            {
                title: 'Page2',
                desc: 'this page is ....',
                url: 'projects_name2/index.html',
                imgUrl: './index/img/600x400.png',

            },
            {
                title: 'Page3',
                desc: 'this page is ....',
                url: 'projects_name3/index.html',
                imgUrl: './index/img/600x400.png',
            },
        ]
    },
    {
        groupName: 'Group4',
        groupColor: '#448aff',
        pages: [
            {
                title: 'Page1',
                desc: 'this page is ....',
                url: 'projects_name1/index.html',
                imgUrl: './index/img/600x400.png',
            },
            {
                title: 'Page2',
                desc: 'this page is ....',
                url: 'projects_name2/index.html',
                imgUrl: './index/img/600x400.png',

            },
            {
                title: 'Page3',
                desc: 'this page is ....',
                url: 'projects_name3/index.html',
                imgUrl: './index/img/600x400.png',

            },
        ]
    },
    {
        groupName: 'Group5',
        groupColor: '#795548',
        pages: [
            {
                title: 'Page1',
                desc: 'this page is ....',
                url: 'projects_name1/index.html',
                imgUrl: './index/img/600x400.png',
            },
            {
                title: 'Page2',
                desc: 'this page is ....',
                url: 'projects_name2/index.html',
                imgUrl: './index/img/600x400.png',

            },
            {
                title: 'Page3',
                desc: 'this page is ....',
                url: 'projects_name3/index.html',
                imgUrl: './index/img/600x400.png',

            },
        ]
    },
]

// 別ウィンドウ起動用のファンクション
Window.OpenExternalLink = function(url) {
    var features = 'top=0, left=0, width=1136, height=672, resizable=yes, location=no, status=yes, scrollbars=yes, directories=no, titlebar=no, toolbar=no';
    window.open(url, '_blank', features);
}
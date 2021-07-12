import PageOptions = Layui.PageOptions;

layui.laypage.render({
    elem:"id"
    ,count: 1
    ,limit: 1
    ,limits: [10,20,30]
    ,curr: 1
    ,groups: 5
    ,prev: "上一页"
    ,next: "下一页"
    ,first: "首页"
    ,last: "尾页"
    ,layout: ['count','page', 'prev' , 'page' , 'next' , 'limit' , 'skip']
    ,theme:  '#c00'
    ,hash: "abc"
    ,jump: (obj: PageOptions, first: boolean) => {
        obj.first;
    }
});
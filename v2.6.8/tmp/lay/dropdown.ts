layui.use('dropdown', function(){
    var dropdown = layui.dropdown;

    dropdown.render({
        elem: '#demo1'
        //,align: 'right'
        ,data: [{
            title: 'menu item 1'
            ,templet: '<i class="layui-icon layui-icon-light"></i> {{d.title}} <span class="layui-badge-dot"></span>'
            ,id: ''
            ,href: ''
            ,type: '' //菜单类型，支持：normal/group/parent
        },{
            title: 'menu item 2'
            ,templet: '<img src="//cdn.layui.com/avatar/168.jpg?t=123" style="width: 16px;"> {{d.title}}'
            ,id: ''
            ,href: 'https://www.layui.com/'
            ,target: '_blank'
        },{type: '-'},{},{
            title: 'menu item 3'
            ,id: ''
            ,type: 'group'
            ,child: [{
                title: 'menu item 3-1'
                ,id: ''
            },{
                title: 'menu item 3-2'
                ,id: ''
                ,child: [{
                    title: 'menu item 3-2-1'
                    ,id: ''
                },{
                    title: 'menu item 3-2-2'
                    ,id: ''
                    ,type: 'group'
                    ,child: [{
                        title: 'menu item 3-2-2-1'
                        ,id: ''
                    },{
                        title: 'menu item 3-2-2-2'
                        ,id: ''
                    }]
                },{
                    title: 'menu item 3-2-3'
                    ,id: ''
                }]
            },{
                title: 'menu item 3-3'
                ,id: ''
                ,type: 'group'
                ,child: [{
                    title: 'menu item 3-3-1'
                    ,id: ''
                },{
                    title: 'menu item 3-3-2'
                    ,id: ''
                    ,child: [{
                        title: 'menu item 3-3-2-1'
                        ,id: ''
                    },{
                        title: 'menu item 3-3-2-2'
                        ,id: ''
                    },{
                        title: 'menu item 3-3-2-3'
                        ,id: ''
                    }]
                },{
                    title: 'menu item 3-3-3'
                    ,id: ''
                }]
            }]
        }
            ,{type: '-'}
            ,{
                title: 'menu item 4'
                ,id: ''
            },{
                title: 'menu item 5'
                ,id: ''
                ,child: [{
                    title: 'menu item 5-1'
                    ,id: ''
                    ,child: [{
                        title: 'menu item 5-1-1'
                        ,id: ''
                    },{
                        title: 'menu item 5-1-2'
                        ,id: ''
                    },{
                        title: 'menu item 5-1-3'
                        ,id: ''
                    }]
                },{
                    title: 'menu item 5-2'
                    ,id: ''
                },{
                    title: 'menu item 5-3'
                    ,id: ''
                }]
            },{type:'-'},{
                title: 'menu item 6'
                ,id: ''
                ,type: 'group'
                ,isSpreadItem: false
                ,child: [{
                    title: 'menu item 6-1'
                    ,id: ''
                },{
                    title: 'menu item 6-2'
                    ,id: ''
                },{
                    title: 'menu item 6-3'
                    ,id: ''
                }]
            }]

        ,id: 'demo1'

        //菜单被点击的事件
        ,click: function(obj){
            console.log(obj);
        }
    });

    var inst = dropdown.render({
        elem: '#demo2'
        //,show: true
        ,data: [{
            title: 'menu item 1'
            ,href: '#1'
        },{
            title: 'menu item 2'
            ,href: '#2'
        },{
            title: 'menu item 3'
            ,href: '#3'
        }]
        ,click: function(){

        }
    });


    dropdown.render({
        elem: '#demo3'
        ,content: '自定义内容  123 '
        ,style: 'background:#666;color:#fff;padding:15px;'
        ,align: 'center'
        ,trigger: 'hover'
    });


    //右键
    dropdown.render({
        elem: document.body //'#demo20' //也可绑定到 document，从而重置整个右键
        ,trigger: 'contextmenu' //contextmenu
        ,isAllowSpread: false
        //,style: 'width: 200px'
        ,data: [{
            title: 'menu item 1'
            ,id: '#1'
        },{
            title: 'menu item 2'
            ,id: 'reload'
        },{type:'-'},{
            title: 'menu item 3'
            ,id: '#3'
            ,child: [{
                title: 'menu item 3-1'
                ,id: '#1'
            },{
                title: 'menu item 3-2'
                ,id: '#2'
            },{
                title: 'menu item 3-3'
                ,id: '#3'
            }]
        },{type:'-'},{
            title: 'menu item 4'
            ,id: ''
        },{
            title: 'menu item 5'
            ,id: '#1'
        },{
            title: 'menu item 6'
            ,id: '#1'
        }]
        ,click: function(obj, othis){
            if(obj.id === 'reload'){
                location.reload();
            }
        }
    });




    return;

    dropdown.render({
        elem: document.body
        ,content: '123'
    });
});
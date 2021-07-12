
layui.use(['table', 'dropdown'], function(){
    var table = layui.table
        ,$ = layui.$
        ,laytpl = layui.laytpl
        ,dropdown = layui.dropdown;;

    //全局设定某参数
    table.set({
        where: {
            token: '默认 token 参数'
        }
        //,defaultToolbar: ['filter']
        ,limit: 30
        //,url: 'list'
        //,height: 300
    });

    $('#appendtest').append($('#TPL_appendtest').html())
    table.init('appendtest');

    //渲染
     table.render({
        elem: '#test'
        ,height: 400
        //,width: 600
        ,title: '用户数据表'
        ,url: 'json/table/demo1.json'
        //,size: 'lg'

        //,autoSort: false //是否自动排序。如果否，则由服务端排序
        //,loading: false
        ,totalRow: true
        ,limit: 30
        ,toolbar: '#toolbarDemo'
        ,defaultToolbar: ['filter', 'exports', 'print', {
            title: '帮助'
            ,layEvent: 'LAYTABLE_TIPS'
            ,icon: 'layui-icon-tips'
        }]
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true, totalRowText: '合计：'}
             ,{field:'username', title:'用户名', width:120, edit: 'text', templet: '#usernameTpl'}
             ,{field:'email', title:'邮箱', hide: false, width:150, edit: 'text', templet: function(d){
                     console.log(d.a);
                     console.log(d["a"]);
                     return '<em>'+ d.email +'</em>'
                 }}
             ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
             ,{field:'city', title:'城市', width:120, templet: '#cityTpl'}
             ,{field:'sign', title:'签名'}
             ,{field: 'experience', title: '积分', width:80, sort: true, totalRow: '{{ d.TOTAL_NUMS }} 😊', templet: '<div>{{ d.experience }} 分</div>'}
             ,{field:'ip', title:'IP', width: 120}
             ,{field:'logins', title:'登入次数', width: 100, sort: true, totalRow: '{{ parseInt(d.TOTAL_NUMS) }} 次'}
             ,{field:'joinTime', title:'加入时间', width: 120}
             ,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:150}
        ]]

        ,initSort: {
            field: 'experience' //排序字段，对应 cols 设定的各字段名
            ,type: 'desc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
        }

        ,headers: {headers_token: 'sasasas'}
        ,where: {
            test: '初始 test 参数'
            ,token: '初始 token'
            ,key: 'experience'
            ,order: 'asc'
        }

        ,done: function(){
            //下拉菜单
            dropdown.render({
                elem: '#dropdown' //可绑定在任意元素中，此处以上述按钮为例
                ,data: [{
                    id: 0,
                    title: '刷新'
                }]
                //菜单被点击的事件
                ,click: function(obj){
                    table.reload('test');
                }
            });
        }

        ,error: function(res, msg){
            console.log(res, msg)
        }

        /*
        ,response: {
          statusName: 'status'
          ,statusCode: 200
        }
        ,parseData: function(res){
          return {
            "status": res.status
            ,"msg": res.message
            ,"count": res.total
            ,"data": res.data.list
          };
        }
        */
    });

    //排序事件
    table.on('sort(test)', function(obj){
        console.log(obj);

        return;
        layer.msg('服务端排序。order by '+ obj.field + ' ' + obj.type);
        //服务端排序
        table.reload('test', {
            initSort: obj
            //,page: {curr: 1} //重新从第一页开始
            ,where: { //重新请求服务端
                key: obj.field //排序字段
                ,order: obj.type //排序方式
            }
        }, true);
    });

    //工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'add':
                layer.msg('添加');
                break;
            case 'update':
                layer.msg('编辑');
                break;
            case 'delete':
                layer.msg('删除');
                break;
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
                break;
            case 'getData':
                var getData = table.getData(obj.config.id);
                console.log(getData);
                layer.alert(JSON.stringify(getData));
                break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选': '未全选')
                break;
            case 'LAYTABLE_TIPS':
                layer.alert('Table for layui-v'+ layui.v);
                break;
            case 'reload':
                //深度重载
                var instReload = table.reload('test', {

                    where: {
                        abc: 123
                        ,test: '新的 test1'
                    }
                    ,defaultToolbar: ['print']
                    ,page: {curr: 5, limit: 20}
                   // ,cols: ins1.config.cols
                    //,height: 300
                    //,url: 'x'
                }, true);
                break;
            case 'reload2':
                //浅重载
                table.reload('test', {
                    where: {
                        efg: 'sasasas'
                        //,test: '新的 test2'
                        //,token: '新的 token2'
                    }
                    ,cols: [[
                        {type: 'checkbox', fixed: 'left'}
                        ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true, totalRowText: '合计：'}
                        ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
                        ,{field:'experience', title:'积分', width:80, sort: true, totalRow: true, templet: '<div>{{ d.experience }} 分</div>'}
                        ,{field:'logins', title:'登入次数', width:100, sort: true, totalRow: true}
                        ,{field:'joinTime', title:'加入时间', width:120}
                    ]]
                    //,height: 500
                });
                break;
        };
    });

    table.on('row(test)', function(obj){
        console.log(obj);
        //layer.closeAll('tips');
    });


});
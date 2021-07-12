
layui.use(['table', 'dropdown'], function(){
    var table = layui.table
        ,$ = layui.$
        ,laytpl = layui.laytpl
        ,dropdown = layui.dropdown;

    //全局设定某参数
    table.set({
        where: {
            token: '全局的 token'
            ,access: '全局的 access'
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
        ,page: {

        }

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
        ,escape: true
        ,cols: [[
            {type: 'checkbox', fixed: 'left'}
            ,{field:'id', title:'ID', width:80, fixed: 'left', unresize: true, sort: true, totalRowText: '合计：'}
            ,{field:'username', title:'用户名', width:120, edit: 'text', templet: '#usernameTpl'}
            ,{field:'email', title:'邮箱', hide: false, width:150, edit: 'text', templet: function(d){
                    return '<em>'+ d.email +'</em>'
                }}
            ,{field:'sex', title:'性别', width:80, edit: 'text', sort: true}
            ,{field:'city', title:'城市', width:120}
            ,{field:'sign', title:'签名'}
            ,{field:'experience', title:'积分', width:80, sort: true, totalRow: '{{ d.TOTAL_NUMS }} 分', templet: '<div>{{ d.experience }} 分</div>'}
            ,{field:'ip', title:'IP', width:120}
            ,{field:'logins', title:'登入次数', width:100, sort: true, totalRow: true}
            ,{field:'joinTime', title:'加入时间', width:120}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:150}
        ]]

        ,initSort: {
            field: 'experience' //排序字段，对应 cols 设定的各字段名
            ,type: 'desc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
        }

        ,headers: {headers_token: 'sasasas'}
        ,where: $.extend({}, table.config, {
            test: '渲染的 test'
            ,token: '渲染的 token'
            ,key: 'experience'
            ,order: 'asc'
        })

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

        //return;
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
        var config = obj.config;
        var checkStatus = table.checkStatus(config.id);
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
                layer.alert(config.title || 'Table for layui-v'+ layui.v);
                break;
            case 'reload':
                //深度重载
                var instReload = table.reload('test', {

                    where: {
                        abc: 123
                        ,test: '重载的 test'
                    }
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



    table.render({
        elem: '#test2'
        ,url: 'json/table/demo1.json'
        ,contentType: 'application/json'
        ,page: { //详细参数可参考 laypage 组件文档
            curr: 5
            ,groups: 1
            ,first: false
            ,last: false
            ,layout: ['limit', 'prev', 'page', 'next', 'count'] //自定义分页布局
        }
        //,height: 300
        ,cellMinWidth: 80
        //,skin: 'line'
        ,toolbar: true
        ,cols: [[
            {field: 'id', hide: true}
            ,{field: 'username', title: '用户名'}
            ,{field: 'email', title: '邮箱'}
            ,{title:'操作', align:'center', toolbar: '#barDemo'}
            /*
            {type:'numbers'}
            ,{field:'id', title:'ID', unresize: true, sort: true}
            ,{field:'username', title:'用户名', templet: '#usernameTpl'}
            ,{field:'email', title:'邮箱'}
            ,{xfield:'sex', title:'性别', templet: '#switchTpl', minWidth: 85, align:'center'}
            ,{field:'lock', title:'是否锁定', templet: '#checkboxTpl', minWidth: 110, align:'center'}
            ,{field:'city', title:'城市'}
            */
        ]]
    });

    //监听表格行点击
    table.on('tr', function(obj){
        console.log(obj)
    });

    //监听表格复选框选择
    table.on('checkbox(test)', function(obj){
        console.log(obj)
    });

    //监听表格单选框选择
    table.on('radio(test)', function(obj){
        console.log(obj)
    });

    //监听表格单选框选择
    table.on('rowDouble(test)', function(obj){
        console.log(obj);
    });

    //监听单元格编辑
    table.on('edit(test)', function(obj){
        var value = obj.value //得到修改后的值
            ,data = obj.data //得到所在行所有键值
            ,field = obj.field; //得到字段

        console.log(obj)
    });

    //监听行工具事件
    table.on('tool(test)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del();
                layer.close(index);
            });
        } else if(obj.event === 'edit'){
            layer.prompt({
                formType: 2
                ,value: data.email
            }, function(value, index){
                obj.update({
                    email: value
                });
                layer.close(index);
            });
        }
    });

    //return;

    //直接赋值数据
    table.render({
        elem: '#demo'
        //,width: 900
        //,height: 274
        ,cols: [[ //标题栏
            {type: 'checkbox', LAY_CHECKED: true}
            ,{field: 'id', title: 'ID', width: 80, sort: true}
            ,{type: 'space', width: 100} //空列
            ,{field: 'username', title: '用户名', width: 120}
            ,{field: 'email', title: '邮箱', width: 150}
            ,{field: 'sign', title: '签名', width: 150}
            ,{field: 'sex', title: '性别', width: 80}
            ,{field: 'city', title: '城市', width: 100}
            ,{field: 'experience', title: '积分', width: 80, sort: true}
        ]]
        ,data: [{
            "id": "10001"
            ,"username": "杜甫"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "116"
            ,"ip": "192.168.0.8"
            ,"logins": "108"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10002"
            ,"username": "李白"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "12"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
            ,"LAY_CHECKED": true
        }, {
            "id": "10003"
            ,"username": "王勃"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "65"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10004"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "666"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10005"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "86"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10006"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "12"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10007"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "16"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }, {
            "id": "10008"
            ,"username": "贤心"
            ,"email": "xianxin@layui.com"
            ,"sex": "男"
            ,"city": "浙江杭州"
            ,"sign": "人生恰似一场修行"
            ,"experience": "106"
            ,"ip": "192.168.0.8"
            ,"logins": "106"
            ,"joinTime": "2016-10-14"
        }]

        ,skin: 'row' //表格风格
        ,even: true
        //,size: 'lg' //尺寸

        ,page: true //是否显示分页
        ,limits: [3,5,10]
        ,limit: 3 //每页默认显示的数量
        //,loading: false //请求数据时，是否显示loading
    });


    var $ = layui.jquery, active = {
        parseTable: function(){
            table.init('parse-table-demo', {
                limit: 3
            });
        }
        ,add: function(){
           // table.addRow('test')
        }
    };
    $('i').on('click', function(){
        var type = $(this).data('type');
      //  active[type] ? active[type].call(this) : '';
    });
    $('.layui-btn').on('click', function(){
        var type = $(this).data('type');
      //  active[type] ? active[type].call(this) : '';
    });
});
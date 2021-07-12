
console.log(layui.$);


layui.use(function(){
    var $ = layui.jquery
        ,layer = layui.layer
        ,form = layui.form
        ,laypage = layui.laypage
        ,element = layui.element
        ,transfer = layui.transfer
        ,util = layui.util
        ,laydate = layui.laydate;

    layer.msg('hello layui');
    //layer.closeAll();

    //自动测试
    (function(run){
        if(!run) return;

        var timer = setInterval(function(){
            location.reload();
        }, 1000);

        $.ajax({
            url: './all.html'
            ,beforeSend: function(){
                layer.load();
            }
            ,success: function(){
                layer.closeAll('loading', function(){
                    setTimeout(function(){
                        if($('.layui-layer-loading').length){
                            console.error('layer close 异常');
                            clearInterval(timer);
                        }
                    }, 200);
                });
            }
        });
    })(0);

    laypage.render({
        elem: 'demo1'
        ,count: 100 //总页数
    });

    console.log(window.lay('#footer').html());

    laydate.render({
        elem: '#date1'
    })

    //测试加载非内置模块
    /*
    layui.config({
      base: 'extends/'
    }).extend({
      mod1: 'mod1'
      ,mod2: 'mod2'
    }).use('mod1');
    */


    //定义标题及数据源
    transfer.render({
        elem: '#test2'
        ,title: ['候选文人', '获奖文人']  //自定义标题
        ,data: [
            {"value": "1", "title": "李白"}
            ,{"value": "2", "title": "杜甫"}
            ,{"value": "3", "title": "苏轼"}
            ,{"value": "4", "title": "李清照"}
            ,{"value": "5", "title": "鲁迅", "disabled": true}
            ,{"value": "6", "title": "巴金"}
            ,{"value": "7", "title": "冰心"}
            ,{"value": "8", "title": "矛盾"}
            ,{"value": "9", "title": "贤心"}
        ]
        //,width: 150 //定义宽度
        ,height: 210 //定义高度
    });

    //触发事件
    util.event('test-active', {
        'test-form': function(){
            layer.open({
                type: 1
                ,resize: false
                ,content: ['<ul class="layui-form" style="margin: 10px;">'
                    ,'<li class="layui-form-item">'
                    ,'<label class="layui-form-label">输入框</label>'
                    ,'<div class="layui-input-block">'
                    ,'<input class="layui-input" name="field1">'
                    ,'</div>'
                    ,'</li>'
                    ,'<li class="layui-form-item">'
                    ,'<label class="layui-form-label">选择框</label>'
                    ,'<div class="layui-input-block">'
                    ,'<select name="field2">'
                    ,'<option value="A">A</option>'
                    ,'<option value="B">B</option>'
                    ,'<select>'
                    ,'</div>'
                    ,'</li>'
                    ,'<li class="layui-form-item" style="text-align:center;">'
                    ,'<button type="submit" lay-submit lay-filter="*" class="layui-btn">提交</button>'
                    ,'</li>'
                    ,'</ul>'].join('')
                ,success: function(layero){
                    layero.find('.layui-layer-content').css('overflow', 'visible');

                    form.render().on('submit(*)', function(data){
                        layer.msg(JSON.stringify(data.field));
                    });
                }
            });
        }
        ,'test-use': function(othis){
            layui.use(['laytpl','laypage','laydate','jquery','layer','util','element','upload','slider','colorpicker','form','tree','transfer','table','carousel','rate','flow','layedit','code'], function(){
                layer.tips('请观察 Network 是否有重复加载 js 文件。如果没有任何新的请求，则代表正常。', othis, {
                    time: 10*1000
                });
            });
        }
    });

});


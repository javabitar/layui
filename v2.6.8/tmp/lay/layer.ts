


    var timer = setInterval(function(){
        //location.reload();
    }, 1000);

    layer.alert(123);

    $.ajax({
        url: './all.html'
        ,beforeSend: function(){
            //layer.ready(function(){
            //layer.load();
            //});
        }
        ,success: function(){
            return;
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



layui.use('layer', function() {
    var $ = layui.jquery, layer = layui.layer;
    //return

    var index = layer.msg('hello');
    //layer.close(index);
    //runTest(1, $, layer);


    //触发事件
    var active = {
        test: function () {
            layer.alert('你好么，体验者。<br>在标题栏显示自动关闭倒计秒数', {
                time: 5 * 1000
                , success: function (layero, index) {
                    // var timeNum = this.time/1000, setText = function(start){
                    //     layer.title((start ? timeNum : --timeNum) + ' 秒后关闭', index);
                    // };
                    // setText(!0);
                    // this.timer = setInterval(setText, 1000);
                    // if(timeNum <= 0) clearInterval(this.timer);
                }
                , end: function () {
                    // clearInterval(this.timer);
                }
            });
        }
        , test2: function () {
            layer.confirm('您是如何看待前端开发？', {
                btn: ['重要', '奇葩'] //按钮
            }, function () {
                layer.msg('的确很重要', {icon: 1});
            }, function () {
                layer.msg('也可以这样', {
                    time: 20000, //20s后自动关闭
                    btn: ['明白了', '知道了']
                });
            });
        }
        , test3: function () {
            layer.msg('提示中');
        }
        , test4: function () {
            //layer.tips('Hi，我是一个小提示', this, {tips: 1});
        }
        , test5: function () {
            layer.open({
                title: '自定义页面层',
                type: 1,
                skin: 'layui-layer-rim',
                area: ['1000px', '580px'],
                content: $('#test11111'),
                maxmin: true,
                minStack: false, //最小化不堆叠在左下角
                id: 'page1', //定义 ID，防止重复弹出
                min: function (layero, index) {

                    layer.msg('阻止了默认的最小化');
                    layer.style(index, {top: 'auto', bottom: 0});

                    return false;
                }
            });
        }
        , test6: function () {
            layer.open({
                type: 2
                , content: 'https://www.aliyun.com/activity?userCode=ap0255is'
                , area: ['375px', '500px']
                , maxmin: true
            });
        }
        , test7: function () {
            layer.prompt({title: '输入任何口令，并确认', formType: 1}, function (pass, index) {
                layer.close(index);
                layer.prompt({title: '随便写点啥，并确认', formType: 2}, function (text, index) {
                    layer.close(index);
                    layer.msg('演示完毕！您的口令：' + pass + '<br>您最后写下了：' + text);
                });
            });
        }
        , test8: function () {
            layer.tab({
                area: ['600px', '300px'],
                tab: [{
                    title: 'TAB1',
                    content: '内容1'
                }, {
                    title: 'TAB2',
                    content: '内容2'
                }, {
                    title: 'TAB3',
                    content: '内容3'
                }]
            });
        }

    };

    //相册层
    layer.photos({
        photos: '#photos' //$('#photos')
    });

    $('#photos li-').each(function (i, e) {
        layer.photos({
            photos: $(e)
        });
    });


    //动态追加
    $('#photos').append('<li class="list"><img src="https://res.layui.com/static/images/sentsin/night.gif"></li>');

    //{"status":1,"msg":"","title":"JSON请求的相册","id":8,"start":0,"data":[{"alt":"layer","pid":109,"src":"//cdn.layui.com/upload/2017_3/168_1488985841996_23077.png","thumb":""},{"alt":"说好的，一起 Fly","pid":110,"src":"//res.layui.com/static/images/fly/fly.jpg","thumb":""},{"alt":"星空如此深邃","pid":113,"src":"//res.layui.com/static/images/sentsin/night.gif","thumb":""}]}


    $('.demo').on('click', function () {
        var type = $(this).data('type');
        //active[type] ? active[type].call(this) : '';
    });
});

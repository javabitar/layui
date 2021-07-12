layui.use('flow', function(){
    var flow = layui.flow;

    flow.load({
        elem: '#test1' //流加载容器
        //,scrollElem: '.flow-default' //滚动条所在元素，默认document
        //,isAuto: false
        //,end: '没了'
        ,isLazyimg: true
        ,done: function(page, next){ //加载下一页
            console.log('done:', page)
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 6; i++){
                    lis.push('<li><img lay-src="https://sentsin.gitee.io/res/images/demo/layer.png?v='+ (page+i) +'"></li>')
                }
                next(lis.join(''), page < 3);
            }, 500);
        }
    });

    flow.load({
        elem: '#test2' //流加载容器
        //,scrollElem: '.flow-default' //滚动条所在元素，默认document
        //,isAuto: false
        //,end: '没了'
        ,isLazyimg: true
        ,done: function(page, next){ //加载下一页
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 6; i++){
                    lis.push('<li><img lay-src="https://sentsin.gitee.io/res/images/demo/layer.png?v='+ (page+i) +'"></li>')
                }
                next(lis.join(''), page < 3);
            }, 500);
        }
    });

    //按屏加载图片
    flow.lazyimg({
        elem: '.demo img'
        ,scrollElem: '.demo'
    });

});
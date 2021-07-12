layui.use(['colorpicker', 'layer'], function(){
    var colorpicker = layui.colorpicker;

    colorpicker.render({
        elem: '#test1'
        //,predefine: true //开启预定义颜色
        //,colors: ['#F00','#0F0','#00F','rgb(255, 69, 0)','rgba(255, 69, 0, 0.5)']
        ,change: function(color){
            document.body.style.backgroundColor = color;
        }
        ,done: function(color){
            layui.$('#LAY-test1').val(color);
            document.body.style.backgroundColor = color;
        }
    });

    colorpicker.render({
        elem: '#test2'
        ,color: 'rgba(218, 121, 157, 1)' //设置默认色
        ,predefine: true
        ,alpha: true  //开启透明度
        ,format: 'rgb'
        ,change: function(color){
            console.log(color)
        }
    });

    colorpicker.render({
        elem: '#test3'
        ,color: 'rgba(0,0,0)'
        //,alpha: true
        //,format: 'rgb' //设置输入显示格式为rgb
    });

    colorpicker.render({
        elem: '#test4'
        ,color: '#06eeb8'
        ,predefine: true //开启预定义色
        ,format: 'rgb'
    });

    colorpicker.render({
        elem: '#test5'
        ,color: '#ffd900'
        ,predefine: true
        ,size: 'lg'
    });

    colorpicker.render({
        elem: '#test6'
        ,color: '#F00'
        ,predefine: true
        ,colors: ['#F00','#0F0','#00F','rgb(255, 69, 0)','rgba(255, 69, 0, 0.5)']
        ,size: 'xs'
    });
})

layui.use(['dropdown', 'util'], function(){
    var dropdown = layui.dropdown
        ,util = layui.util
        ,$ = layui.jquery;


    dropdown.on('click(demo1)', function(options){
        var thisElem = $(this);
        console.log(thisElem, options);
    });

    util.event('lay-active', {
        normal: function(){
            $('#demo-box').children().addClass('layui-col-md3').removeClass('layui-col-md4');
            $('#demo-box').find('.layui-menu').removeClass('layui-menu-lg');
        }
        ,lg: function(){
            $('#demo-box').children().addClass('layui-col-md4').removeClass('layui-col-md3')
            $('#demo-box').find('.layui-menu').addClass('layui-menu-lg');
        }
    });
});
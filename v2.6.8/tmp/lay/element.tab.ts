layui.use(['element', 'form'], function(){
    var element = layui.element;

    element.on('tab(test)', function(data){
        console.log(this, data);
    });

});
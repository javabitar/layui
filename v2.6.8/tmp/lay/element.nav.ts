layui.use(['element', 'form'], function(){
    var element = layui.element;

    element.on('collapse(test)', function(data){
        console.log(data);
    });
});
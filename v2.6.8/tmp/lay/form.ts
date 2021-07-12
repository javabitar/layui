layui.use('jquery', function(){
    var $ = layui.jquery;
    var submit = function(){
        return false;
    };
    $('#test').on('submit', function(){
        return false
    });
    $('#test1').on('submit', function(obj){
        //console.log(obj.field)
        //return false;
    });
});
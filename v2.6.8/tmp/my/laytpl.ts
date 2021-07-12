const laytpl = layui.laytpl;

laytpl('{{ d.name }}是一位公猿').render({
    name: '贤心'
}, function(string){
    console.log(string); //贤心是一位公猿
});

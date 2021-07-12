
layui.use('util', function(){
    var util = layui.util
        ,$ = layui.$;

    //固定块
    util.fixbar({
        bar1: true
        ,bar2: true
        //,css: {right: 100, bottom: 100}
        ,click: function(type){
            console.log(this, type);
        }
    });

    //倒计时
    var endTime = new Date(2099,1,1).getTime() //假设为结束日期
        ,serverTime = new Date().getTime(); //假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的

    util.countdown(endTime, serverTime, function(date, serverTime, timer){
        var str = date[0] + '天' + date[1] + '时' +  date[2] + '分' + date[3] + '秒';
        $('#test').html('距离2099年1月1日还有：'+ str);
    });

    //某个时间在当前时间的多久前
    var str = util.timeAgo(new Date(2017,7,15,2,58,0));
    $('#test1').html('示例写于：'+ str);

    //处理属性 为 lay-active 的所有元素事件
    util.event('lay-active', {
        e1: function(othis){
            alert(othis.html())
        }
        ,e2: function(othis){
            alert(othis.html())
        }
        ,e3: function(othis){
            alert(othis.html())
        }
    });

    //测试是否重复绑定
    util.event('lay-active', {
        e1: function(othis){
            alert(othis.html() + '新事件')
        }
    });

    //测试绑定新事件
    util.event('lay-active2', {
        e4: function(othis){
            alert(othis.html())
        }
    });

});
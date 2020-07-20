   //右下角固定图标 返回顶部
    util.fixbar({
        bar1: true
        ,bar2:true
        ,bgcolor:"red"
        ,showHeight:120
        ,css: {right: 100, bottom: 100}
        ,click: function(type){
            console.log(type);
            if(type === 'bar1'){
                alert('点击了bar1')
            }
        }
    });
    //倒计时执行，s
    var endTime = new Date(2099,1,1).getTime() //假设为结束日期
        ,serverTime = new Date().getTime(); //假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的
    util.countdown(endTime, serverTime, function(date, serverTime, timer){
        var str = date[0] + '天' + date[1] + '时' +  date[2] + '分' + date[3] + '秒';
        layui.$('#test').html('距离2099年1月1日还有：'+ str);
    });

    //
    util.timeAgo(Date.now(),true)
    util.toDateString(Date.now(), "yyyy-MM-dd")
    util.digit(10, 10)
    util.escape("str")
    util.event('lay-active', {
        e1: function(){
            alert('触发了事件1');
        }
        ,e2: function(){
            alert('触发了事件2');
        }
        ,e3: function(){
            alert('触发了事件3');
        }
    });

layui.use('carousel', function(){
    var carousel = layui.carousel;

    //建造实例
    carousel.render({
        elem: '#test1'
        ,index: 2
        //,full: true
        ,arrow: 'always'
        //,interval: 5000
        //,autoplay: false
        //,indicator: 'outside'
        //,trigger: 'hover'
    });

    //事件
    carousel.on('change(test1)', function(res){
        console.log(res)
    });

    carousel.render({
        elem: '#test2'
        ,interval: 1800
        //,full: true
        ,anim: 'fade'
        ,height: '120px'
    });

    carousel.render({
        elem: '#test3'
        //,full: true
        ,arrow: 'always'
        //,autoplay: false
        //,indicator: 'outside'
        //,trigger: 'hover'
        ,anim: 'updown'
        //,full: true
    });

    carousel.render({
        elem: '#test4'
        ,width: '778px'
        ,height: '440px'
        ,interval: 5000
    });
});

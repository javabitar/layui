
layui.use(['rate'], function(){
    var rate = layui.rate;

    //渲染

    // rate.set({
    //   elem: '#test1'
    //   ,length: 7
    //   ,value: 4.7
    //   ,theme: '#c00'
    //   ,half: true
    //   ,text: true
    //   ,reader: true
    // })

    rate.render({
        elem: '#test1'
        ,length: 5
        ,value: 5
        ,text: true
        ,half: true
        ,setText: function(value){

            var arrs = {
                '0.5': '极差'
                , '1' : '一般'
                ,'1.5': '满意'
                ,'2': '极满意'
            };
            //arrs[value]
            //this.span.text(arrs[value] || ( value + "星"));
        }
    })

    rate.render({
        elem: '#test2'
        ,length: 6
        ,value: 2
        ,half: true
        ,theme: '#5FB878'
        ,choose: function(value){
            if( value > 3) alert("111")
        }
    })

    rate.render({
        elem: '#test3'
        ,length: 3
        ,value: 2.8
        ,text: true
        ,half: true
        ,theme: '#FF5722'
    })

    //只读
    rate.render({
        elem: '#test4'
        ,value: 3.5
        ,half: true
        ,readonly: true
    })
});
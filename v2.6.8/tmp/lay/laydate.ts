
layui.use('laydate', function(laydate){

    //全局配置
    laydate.set({
        //trigger: 'focus'
    })

    //双控件
    laydate.render({
        elem: '#test1' //指定元素
        ,type: 'datetime'
        ,trigger: 'click'
        //,lang: 'en'
        //,theme: 'grid'
        ,range: true //开启日期范围，默认使用“-”分割
        //,min: '1949-10-1'
        //,max: '2021-5-9'
        //,value: '2021-05-09 12:06:09'
        //,value: '2021-05-08 - 2021-03-27'
        ,done: function(value, date, endDate){
            console.log(value, date, endDate);
        }
        ,change: function(value, date, endDate){
            console.log(value, date, endDate);
        }
    });

    //return;

    //单控件
    laydate.render({
        elem: '#test2'
        //,format: 'yyyy年MM月dd日'
        ,value: new Date(1534766888000)
        //,isInitValue: false
        ,format: 'yyyy/MM/dd'
        ,min: 7
        //,max: 0
        //,min: '2016-10-14'
        //,max: -1
        //,value: '1989年10月14日'
        ,ready: function(date){
            console.log(date);
        }
        ,done: function(value, date, endDate){
            console.log(value, date, endDate);
        }
        ,change: function(value){
            console.log(value);
        }
    });

    //年选择器
    laydate.render({
        elem: '#test3'
        ,type: 'year'
        //,range: true
        //,trigger: 'click'
        ,done: function(value, date, endDate){
            console.log(value, date, endDate);
        }
        ,change: function(value, date, endDate){
            //this.elem.val(value)
        }
    });

    //年月选择器
    laydate.render({
        elem: '#test4'
        ,type: 'month'
        ,range: true
        ,trigger: 'click'
        //,max: -30
        ,done: function(value, date, endDate){
            console.log(value, date, endDate);
        }
        ,change: function(value, date, endDate){
           // this.elem.val(value)
            if (this.elem){

            }

        }
    });

    //时间选择器
    laydate.render({
        elem: '#test5'
        ,type: 'time'
        //,range: true
        //,trigger: 'click'
        ,min: '09:30:00'
        ,max: '17:30:00'
        ,done: function(value, date, endDate){
            console.log(value, date, endDate);
        }
        ,change: function(value, date, endDate){
            //this.elem.val(value)
        }
    });

    //时间范围选择器
    laydate.render({
        elem: '#test55'
        ,type: 'time'
        ,range: true
        //,trigger: 'click'
        ,done: function(value, date, endDate){
            console.log(value, date, endDate);
        }
    });

    //同时绑定多个
    layui.lay('.test-item').each(function(){
        laydate.render({
            elem: this
            ,trigger: 'click'
        });
    });

    //自定义重要日
    var ins555 = laydate.render({
        elem: '#test555'
        //,calendar: true //是否开启公历重要节日
        ,mark: { //标记重要日子
            '0-8-15': '纪念' //0代表：每年
            ,'0-0-15': '中旬'
            ,'2017-8-20': '发布'
            ,'2017-8-31': '月底'
        }
        ,done: function(value, date, endDate){
            if(date.year == 2017 && date.month == 8 && date.date == 15){
                //console.log('中国人民战胜日本法西斯纪念日');
            }
        }
        ,change: function(value, date, endDate){
            console.log(value)
        }
    });

    //墨绿主题
    laydate.render({
        elem: '#test6-1' //指定元素
        ,type: 'datetime'
        ,theme: 'molv'
        ,value: 20180115
        ,isInitValue: true
        ,lang: 'en'
        //,range: true
        ,trigger: 'click'
    });

    //自定义背景色主题
    laydate.render({
        elem: '#test6-2' //指定元素
        ,type: 'datetime'
        ,theme: '#393D49'
        //,range: true
        ,trigger: 'click'
    });

    //格子主题
    laydate.render({
        elem: '#test6-3' //指定元素
        //,type: 'datetime'
        ,theme: 'grid'
        //,range: true
        ,trigger: 'click'
    });

    //其它元素触发
    laydate.render({
        elem: '#test6' //指定元素
        ,eventElem: '#test7' //绑定执行事件的元素
        ,lang: 'en'
    });

    //外部事件
    layui.lay('#test9').on('click', function(e){
        laydate.render({
            elem: '#test8'
            ,type: 'datetime'
            ,show: true
            //,min: '2017-08-12 00:10:00'
            //,max: '2017-08-12 23:10:10'
            ,closeStop: '#test9' //点击 #test6 所在元素区域不关闭控件
            ,change: function(value, date){
                console.log(value, date)
            }
            ,done: function(value, date){
                console.log(value, date)
            }
        });
    });

    //直接嵌套在指定容器中
    var ins10 = laydate.render({
        elem: '#test10'
        ,position: 'static'
        ,calendar: true //是否开启公历重要节日
        ,mark: { //标记重要日子
            '2021-8-20': ''
            ,'2021-8-21': ''
        }
        ,done: function(value, date, endDate){
            if(date.year == 2021 && date.month == 8 && date.date == 20){
                ins10.hint(value + '，活动日');
            }
        }
        ,change: function(value, date, endDate){
            console.log(value,date)
        }
    });

    laydate.render({
        elem: '#test11'
        ,position: 'static'
        ,lang: 'en'
        ,type: 'datetime'
        ,calendar: true //是否开启公历重要节日
        ,done: function(value, date, endDate){
            //console.log(value, date, endDate);
        }
        ,change: function(value, date, endDate){
            console.log(value)
        }
    });

});
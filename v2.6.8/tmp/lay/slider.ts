
layui.use('slider', function(){
    var slider = layui.slider;

    var sliderInst = slider.render({
        elem: '#slideTest1'
        //,type: 'vertical'
        //,min: -20 //最小值
        //,max: 20 //最大值
        //,value: 10 //[40, 60] //初始值
        //,step: 10 //间隔值
        //,showstep: true //间隔点
        //,tips: false //关闭提示文本
        ,input: true //输入框
        //,range: true //范围选择
        ,change: function(value){ //回调实时显示当前值
            console.log(value)
        }
        ,setTips: function(value){ //自定义提示文本
            return value + '%';
        }
        //,setTips: function(value){ //自定义提示文本
        //return '离世界末日还有 ' + value + ' 天';
        //}
        //,height: '300' //配合 type:'vertical' 参数使用，默认200px
        //,disabled: true //禁用滑块
        //,theme: '#c00' //主题色
    });

    sliderInst.setValue(30);
});
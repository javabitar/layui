    import laydate = layui.laydate;
import DateParam = layui.DateParam;

var laydateRet=laydate.render({
    elem:""
    ,type:'year'
    ,range:true
    ,format:"yyyy-MM-dd HH:mm:ss"
    ,value: new Date()
    ,isInitValue:true
    ,min:"09:30:00"
    ,max:"17:30:00"
    ,trigger:"focus"
    ,show:true
    ,position:"abolute"
    ,zIndex:1
    ,showBottom:true
    ,btns: ['clear' , 'now' , 'confirm']
    ,lang: 'cn'
    ,theme:"#393D49"
    ,calendar:true
    ,mark:{'0-10-14': '生日'}
    ,ready: (date: DateParam) => {date.year}
    ,change: (value: string, date: DateParam, endDate: DateParam) => {}
    ,done: (value: string, date: DateParam, endDate: DateParam) => {endDate.minutes}
});
laydateRet.config.format;
laydateRet.hint("")
laydate.getEndDate(1)
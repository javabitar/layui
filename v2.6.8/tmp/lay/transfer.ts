
layui.use(['transfer', 'util'], function(){
    var $ = layui.$
        ,transfer = layui.transfer
        ,util = layui.util;


    var data= [
        {"value": "1", "title": "李白"}
        ,{"value": "2", "title": "杜甫"}
        ,{"value": "3", "title": "贤心"}
        ,{"value": "4", "title": "鲁迅", "disabled": true}
        ,{"value": "5", "title": "巴金"}
        ,{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"},{"value": "6", "title": "冰心"}
    ];
    var ins1 = transfer.render({
        elem: '#text1'
        ,title: ['候选文人', '获奖文人']
        ,data
        ,id: 'demoId'
        ,value: ["2", "3"]
        ,showSearch: true
    });
    ins1.getData();
    layui.transfer.getData("");
    //按钮事件
    util.event('lay-demo', {
        getData: function(othis){
            alert(JSON.stringify(ins1.getData()))
        }
        ,reload: function(){
            transfer.reload('demoId', {
                value: ["6"]
                //,data: [{"value": "1", "title": "李白"}]
            });
        }
    });

    var ins2 = transfer.render({
        elem: '#text2'
        ,showSearch: true
        ,onchange: function(obj){
            console.log(obj)
        }
        ,parseData: function(res){
            return {
                "value": res.id
                ,"title": res.label
                ,"disabled": res.disabled
                ,"checked": res.checked
            }
        }
        ,data: [
            {"id": "1", "label": "瓦罐汤"}
            ,{"id": "2", "label": "油酥饼"}
            ,{"id": "3", "label": "炸酱面"}
            ,{"id": "4", "label": "串串香", "disabled": true}
            ,{"id": "5", "label": "豆腐脑"}
            ,{"id": "6", "label": "驴打滚"}
        ]
        ,value: ["1", "5"]
    });
});
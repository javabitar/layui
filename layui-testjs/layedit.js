var layedit = layui.layedit;
layedit.build('demo',{
    uploadImage:{
        url:"","type":"1"
    },
    tool: [
        'strong' //加粗
        ,'italic' //斜体
        ,'underline' //下划线
        ,'del' //删除线
        ,'|' //分割线
        ,'left' //左对齐
        ,'center' //居中对齐
        ,'right' //右对齐
        ,'link' //超链接
        ,'unlink' //清除链接
        ,'face' //表情
        ,'image' //插入图片
        ,'help' //帮助
    ],
    hideTool:[],
    height:100
}); //建立编辑器

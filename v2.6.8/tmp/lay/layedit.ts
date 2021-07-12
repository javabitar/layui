layui.use('layedit', function(layedit){
    var layedit = layui.layedit;

    var index = layedit.build('demo', {
        //hideTool: ['image']
        uploadImage: {
            url: 'json/upload/demoLayEdit.json'
            ,type: 'get'
        }
        //,tool: []
        //,height: 100
    });

/*    layedit.getChoose.onclick = function(){
        alert(layedit.getSelection(index));
    };*/

});
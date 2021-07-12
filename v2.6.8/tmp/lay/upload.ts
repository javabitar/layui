
layui.use(['upload', 'element'], function(){
    var $ = layui.jquery
        ,upload = layui.upload
        ,element = layui.element;

    var uploadInst = upload.render({
        elem: '#test1'
        ,url: 'http://httpbin.org/post'
        //,size: 2000 //限制文件大小，单位 KB
        //,accept: 'file'
        ,method: 'get'
        //,fileAccept: 'image/*'
        ,exts: "jpg|png|gif|bmp|jpeg|pdf"
        ,data: { //额外参数
            a: 1
            ,b: function(){
                return 2
            }
        }
        ,choose: function(){

        }
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo1').attr('src', result); //图片链接（base64）
            });

            return;
            layer.msg('不允许上传')
            return false;
        }
        ,done: function(res){

            //如果上传失败
            if(res.code > 0){
                return layer.msg('上传失败');
            }
            //上传成功
            console.log(res);
        }
        ,error: function(){
           // this.item.html('重选上传');

            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-mini demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                uploadInst.upload();
            });

            element.progress('demo', '0%');
        }
        ,progress: function(n, elem, res, index){
            console.log(n + '%', elem, res); //获取进度百分比
            element.progress('demo', n + '%'); //可配合 layui 进度条元素使用
        }
    });

    //重置上述 upload 实例
    uploadInst.reload({
        name:'avatar'
        ,accept: 'images' //只允许上传图片
        ,acceptMime: 'image/*' //只筛选图片
        //,size: 2
    });

    upload.render({
        elem: '#test2'
        ,multiple: true
        ,number: 3
        ,size: 1024
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
            });
        }
        ,done: function(res){
            //上传完毕
        }
        ,allDone: function(obj){
            console.log(obj)
        }
    });

    //演示多文件列表
    var demoListView = $('#demoList');
    var uploadListIns = upload.render({
        elem: '#testList'
        ,url: 'http://httpbin.org/post'
        ,accept: 'file'
        ,multiple: true
        ,number: 3
        ,auto: false
        ,bindAction: '#testListAction'
        ,choose: function(obj){
          //  var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列

            //读取本地文件
            obj.preview(function(index, file, result){
                var tr = $(['<tr id="upload-'+ index +'">'
                    ,'<td>'+ file.name +'</td>'
                    ,'<td>'+ (file.size/1014).toFixed(1) +'kb</td>'
                    ,'<td><div class="layui-progress" lay-filter="progress-'+ index +'"><div class="layui-progress-bar" lay-percent=""></div></div></td>'
                    ,'<td>'
                    ,'<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>'
                    ,'<button class="layui-btn layui-btn-xs layui-btn-danger demo-delete">删除</button>'
                    ,'</td>'
                    ,'</tr>'].join(''));

                //单个重传
                tr.find('.demo-reload').on('click', function(){
                    obj.upload(index, file);
                });

                //删除
                tr.find('.demo-delete').on('click', function(){
                    //delete files[index]; //删除对应的文件
                    tr.remove();
                    uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                });

                demoListView.append(tr);

                element.render('progress');
            });
        }
        ,done: function(res, index, upload){
            //if(res.code == 0){ //上传成功
            var tr = demoListView.find('tr#upload-'+ index)
                ,tds = tr.children();
            tds.eq(3).html(''); //清空操作
           // delete this.files[index]; //删除文件队列已经上传成功的文件
            //return;
            //}
            this.error(index, upload);
        }
        ,allDone: function(obj){
            console.log(obj)
        }
        ,error: function(index, upload){
            var tr = demoListView.find('tr#upload-'+ index)
                ,tds = tr.children();
            tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
        }
        ,progress: function(n, elem, e, index){
            console.log(n);
            element.progress('progress-'+ index, n + '%'); //进度条
        }
    });


    upload.render({
        elem: '.test333'
        ,url: 'a'
        ,accept: 'file'
        ,before: function(obj){
            console.log(this.item);
        }
        ,done: function(res){
            console.log(res)
        }
    });

    upload.render({
        elem: '.testm'
        ,done: function(res, index, upload){
            //获取当前触发上传的元素，一般用于 elem 绑定 class 的情况，注意：此乃 layui 2.1.0 新增
            var item = this.item;
        }
    })

    /*
    upload.render({
      elem: '#test33'
      ,url: ''
      ,accept: 'file'
      ,done: function(res){
        console.log(res)
      }
    });*/

    upload.render({
        elem: '#test4'
        ,url: ''
        ,accept: 'video'
        ,done: function(res){
            console.log(res)
        }
    });

    upload.render({
        elem: '#test5'
        ,url: ''
        ,accept: 'audio'
        ,done: function(res){
            console.log(res)
        }
    });


    //手动上传
    upload.render({
        elem: '#test6'
        ,url: ''
        ,auto: false
        //,multiple: true
        ,bindAction: '#test7'
        ,choose: function(obj){
            var that = this;
            obj.preview(function(index, file){
                console.log(file.name);
                obj.resetFile(index, file, '123.jpg');
            });
        }
        ,before: function(){
            console.log(345);
        }
        ,done: function(res){
            console.log(res);
        }
    });

    upload.render({
        elem: '#test8'
        ,url: 'http://httpbin.org/post'
        ,done: function(res){
            console.log(res);
        }
    });

    upload.render({
        elem: '#test9'
        ,url: ''
        ,done: function(res){
            console.log(res);
        }
    });



});
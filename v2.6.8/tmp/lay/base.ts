layui.use('lay', function(){
    var lay = layui.lay;

    //sort
    console.log(
        'layui.sort: 数字',
        layui.sort([{a: 3},{a: 0},{a: 0},{a: -1},{a: -5},{a: 6},{a: 9},{a: -333333}], 'a')
    );
    console.log(
        'layui.sort: 中文',
        layui.sort([{a: '男'},{a: '女'},{a: '男'},{a: '女'},{a: '男'}], 'a')
    );
    console.log(
        'layui.sort: 英文',
        layui.sort([{a: 'E'},{a: 'B'},{a: 'D'},{a: 'C'},{a: 'A'}], 'a')
    );
    console.log(
        'layui.sort: 混合'
        ,layui.sort([
            {a: 3}
            ,{a: '男'}
            ,{a: 0}
            ,{a: 66}
            ,{a: 99}
            ,{a: 'C'}
            ,{a: '女'}
            ,{a: 0}
            ,{a: -1}
            ,{a: 'B'}
            ,{a: '男'}
            ,{a: 'A'}
            ,{a: -5}
            ,{a: '男'}
            ,{a: 6}
            ,{a: 9}
        ], 'a')
    );


    console.log(
        'layui._typeof: ',
        layui._typeof(new RegExp("")),
        layui._typeof(new Date()),
        layui._typeof([])
    );

    console.log(
        'layui._isArray ',
        layui._isArray([1,6]),
        layui._isArray(lay('div')),
        layui._isArray(document.querySelectorAll('div')),
        layui._isArray({key: 'value'})
    );

    console.log(
        'lay.extend {}: ',
        lay.extend(
            {},
            {a: 123, c: {ccc: 'ccc'}, arr: [1,3]},
            {a: 111, b: 1, c: {bbb: 'bbb'}},
            {a: 222222, arr: [5]}
        )
    );
    console.log(
        'lay.extend []: ',
        lay.extend([], [1,3,5])
    );
});

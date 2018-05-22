// 数组转化- 获取数组某一下标的值
function toArray(list,start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while ( i--){
        ret = list[i + start];
    }
    return ret
}
    // demo
    toArray(['a', 'b', 'c', 'd', 'e'],3);   // d

// 对象拼接 - 两个对象合并
function extend(to, _from) {
    for (var key in _from){
        to[key] = _from[key]
    }
    return to
}

    // demo
    extend({'a':1,'b':2},{'d':3, 'c': '4'});  // { a: 1, b: 2, d: 3, c: "4"}

// 数组的最后一个值转对象  Merge an Array of Objects into a single Object.
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++){
        if (arr[i]){
            extend(res, arr[i]);
        }
    }
    return res
}
    // demo
    toObject(['a', 'b', 'c', 'd', 'e'])  //  {0: "e"}
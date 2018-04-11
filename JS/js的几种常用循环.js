/**
 * Created by acer on 2018/4/11.
 */
var arr = [1,2,3,4];
var A = {a:1,b:2,c:3,d:'hello world'}; // enumberable对象
//常见的、写法复杂的循环方式： for() 循环——可循环数组和对象、json数据
    for(var i = 0;i < arr.length;i++){
        console.log(arr[i]);
    }

//ES5新增的循环： forEach()——主要遍历数组， 不能中断循环
    arr.forEach(function (value,index,arry) {
        arry[index] == value; //true
        sum+=value;
    });
    console.log(sum);//10

//少见的一种循环： map——映射的意思，用法和forEach相似
    arr.map(function (valu,index,array) {
        //code```
    })

//常用的一种循环： for-in循环——是用来循环带有字符串key（enumerable对象）的对象的方法, 一般不新循环数组
    for(var i in arr){
        console.log(i,arr[i]);//循环数组
        //结果：0 1 ； 1 2； 2 3； 3 4
    }

    for(var k in A){
        console.log(k+'对应'+A[k]);
        //结果：a对应1；b对应2；c对应3；d对应hello world
    }

//ES6 新增了一个 for of循环——即比传统的for()循环简洁，同时弥补了forEach和for-in循环的短板
    for(let value of arr){
        console.log(value);//循环数组
        //结果：1；2；3；4
    }
    let s = "helloabc";
    for(let c of s){
        console.log(c,s[c]);//循环字符串
        //结果：0 h；1 e；2 l；3 l；4 o；5 a；6 b；7 c
    }
    var map = new Map([["a", 1], ["b", 2]]);
    for(let [k,v] of map){
        console.log(k,v)
        //结果： a 1； b 2；
    }

//对比JQuery的$.each方法
    // $.each() 用来遍历数组
    $.each([],function (idnex, value, array) {
        //···
    })

// $().each() 用来便利 DOM元素
    $("input[name = 'ch']").each(function (i) {
        if ($(this).attr('checked') == true){
            //
        }
    })

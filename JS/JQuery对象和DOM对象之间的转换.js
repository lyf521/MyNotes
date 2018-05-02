/**
 * Created by acer on 2018/4/12.
 */
// JQuery对象： 使用JQuery的方法获取页面中的元素返回的对象就是JQuery对象
    //JQuery 对象其实就是DOM对象的包装集（包装了DOM对象对象的集合）;  饭和锅的区别

    // 1. JQuery对象转DOM对象
        var $li = $("li");
        var v = $li[0];  // 转换成DOM对象 （推荐）
        var v = $li.get(0);// JQuery 对象转DOM对象的实质就是取出JQery对象中封装的DOM对象

    // 2. DOM对象转JQuery对象——对于已经是DOM对象，只需要将$()将DOM对象包装起来
        var v = document.getElementById("v");//得到DOM对象
        var $v = $(v);// 转成JQuery对象
        //一下都对
            $(document).ready(function () {});
            $("#div").html();
            $("#div")[0].innerHTML;
            $("#div").eq(0)[0].innerHTML;
            $("#div").get(0).innerHTML;
            $(document.getElementById("div")).html();

//DOM对象的获取方法
var btn = document.getElementById("btn");//读id
var div = document.getElementsByTagName("div");//读标签名
var clas = document.getElementsByClassName('box');//读标签名
var names = document.getElementsByName('name');// 通过元素的name值获取
var html = document.documentElement; // 专门用来获取html标签的
var bodys = document.body;// 专门用来获取body这个标签的
//document.querySelector(css selectors);匹配文档中制定css选择器的一个元素；可以是 id，class类，type类型，style属性，属性值
var node = document.querySelector("a[target]");//获取文档中有“target”属性的第一个a元素
var nodes = document.querySelectorAll("a");// 返回匹配的所有元素
//添加和删除节点
var parade = document.createElement("p");//向html 添加新元素
var att = document.createAttribute("href");//创建新 属性
att.value ="http.baidu";//设置属性值
parade.setAttributeNode(att);//给 parade 添加 att新增的href 属性
parade.setAttribute("style","background-color:red;")// 给para新增属性
var paraTa = parade.getAttribute("href");// 获取href属性值
var node = document.createTextNode("这是新段落");//添加文本节点
parade.appendChild(node);
var ele = document.getElementById("div1");
ele.appendChild(parade);
ele.removeChild(parade);//删除子节点
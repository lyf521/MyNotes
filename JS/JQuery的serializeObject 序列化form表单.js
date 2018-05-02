/**
 * Created by acer on 2018/4/12.
 */
/*
<form>
    <input type="text" name="username" value="123"/>
    <input type="text" name="password"  valur="abc"/>
 </form>
 */
// 1. serialize() —— 序列化form表单 带name属性的内容为字符串
    JQuery("form").serialize();  // "username="123&password="abc"
// 2. serializeArray() ——返货JSON 对象数组
    JQuery("form").serializeArray();// [{name:"username",value:"123"},{name:"password",value:"abc"}]
//  3. 封装一个方法： serializeObject()  ——返回对象
    JQuery.prototype.serializeObject = function () {
        var a,o,h,i,e;
        a = this.serializeArray();
        o={};
        h=o.hasOwnProperty;
        for(i=0;i<a.length;i++){
            e=a[i];
            if(!h.call(o,e.name)){
                o[e.name]=e.value;
            }
        }
        return o;
    }
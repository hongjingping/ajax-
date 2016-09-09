/**
 * Created by pingbaobei on 2016/9/9.
 */

function ajax(obj){
    //1.设置默认值
    var settings = {
        type:"get",
        url:"#",
        dataType:"text",
        async:"true",
        data:{}
    };
    //2.如果有默认值，我们传入的值将其覆盖
    for(var key in obj){
        settings[key] = obj[key];
    }
    //3.书写ajax
    //3.1创建对象
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //参数拼接，将data{}转换成字符串
    var str = "?";
    for(attr in settings.data){
        str += attr + "=" +settings.data[attr]+"&"
    }
    if(str.length>0){
        /*截取字符串，将最后一个&去除*/
        str = str.substring(0,str.length-1);
    }
    //处理get请求
    if(settings.type =="get"){
        //get请求通过URL传递
        settings.url = settings.url +"?"+str;
    }

    //3.2设置请求行
    xhr.open(settings.type,settings.url,settings.async);
    //3.5发送请求
    var param = null;
    if(settings.type == "post"){
        //post请求通过send传递
        param = str;
        //3.3设置请求头
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    }
    //3.4执行回调函数
    xhr.onreadystatechange = function(d){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                if(settings.dataType == 'json'){
                    d = JSON.parse(d);//将字符串转成json对象
                }
                settings.success(d)
            }
        }
    };
    //3.6 发送请求
    xhr.send(param);
}


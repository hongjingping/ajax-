/**
 * Created by pingbaobei on 2016/9/9.
 */
(function(obj){
    //初始化设置
    var settings = {
        type:"get",
        url:"#",
        dataType:"text",
        async:"true",
        data:{}
    };
    //有默认值，我们传进来的obj将其进行覆盖
    for(var k in obj){
        obj[k] = settings[k];
    }
    //3.创建ajax
    //3.1xhr对象的创建
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //4.参数拼接
    var str = "?";
    for(attr in  settings.data){
        str += attr+"="+settings.data[attr]+"&"
    }
    if(str.length>0){
        str.substring(0,str.length-1);
    }
    //get请求方式
    if(settings.type == "get"){
        settings.url = settings.url+"?"+str;
    }
    //3.2设置请求行
    xhr.open(settings.type,settings.url,settings.async);
    var param = null;
    //post请求方式
    if(settings.type == "post"){
       param = str;
        //设置请求头
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    }
    xhr.send(param);

    //3.3发送请求
    xhr.send(null);
    //3.4执行回调函数
    xhr.onreadystatechange = function(data){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var data = xhr.responseText;
                console.log(data);
                if(settings.dataType == "json"){
                    data = JSON.parse(data);
                }
                settings.success(data);
            }
        }
    };
})();

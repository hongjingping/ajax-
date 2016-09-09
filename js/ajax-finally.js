/**
 * Created by pingbaobei on 2016/9/9.
 */
function ajax(param){
    //1.创建xhr对象
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求行
    var type = 'get';
    var url = 'http://127.0.0.1/ajax/3.finally-php.php'+param;
    var flag = 'true';
    xhr.open(type,url,flag);
    //3.设置请求头
    //xhr.setRequestHeader("Content-type","application/x-www-form-urlcoded");
    //4.发送请求
    xhr.send(null);
    //xhr.send("name=xjj&age=18");
    //5.执行回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                //响应成功的数据
                var data = xhr.responseText;
                console.log(data);
            }
        }
    }
}
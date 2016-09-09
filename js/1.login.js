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
    var type = "get";
    var url = "http://localhost:63342/ajax/login.php"+param;
    var flag = true;
    xhr.open(type,url,flag);
    //3.设置请求头
    //xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //4.发送请求
    xhr.send(null);
    //xhr.send("name=zjj&age=18");
    //5.响应回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var data = xhr.responseText;
                var info = document.getElementById("showInfo");
                //console.log(data);
                if(data == "1"){
                    info.innerHTML = "登录成功";
                }else{
                    info.innerHTML = "用户名或者密码错误"
                }
            }
        }
    }
}


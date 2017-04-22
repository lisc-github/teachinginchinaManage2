/**
 * Created by admin on 2017/4/19.
 */
$(function(){
   var form = $("form");
    var name = $("input[name='name']");
    var password = $("input[name='password']");
    var code = $("input[name='code']");
    form.submit(submitHandler);
    function submitHandler(){
        return check();
        function check(){
            if(!$.trim(name.val())){
                alert("请输入用户名");
                return false;
            }
            if(!$.trim(password.val())){
                alert("请输入密码");
                return false;
            }
            if(!$.trim(code.val())){
                alert("请输入验证码");
                return false;
            }
        }
    }
});
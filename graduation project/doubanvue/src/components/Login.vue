00000000000<template>
<div class="container">
    <div class="row">
        <div class="col-md-offset-3 col-md-6">
           <form id="defaultForma" role="form" class="form-signin" action="http://localhost:3000/login"
                method="post">
                <h2 class="form-signin-heading">请输入登录信息：</h2>

                <div class="form-group">
                    <label for="username">用户名：</label><input class="form-control"
                        type="text" name="username" id="username" />
                </div>
                <div class="form-group">
                    <label for="password">密码：</label><input class="form-control"
                        type="password" name="password" id="password"/>
                </div>
                <div class="form-group">
                        <button id="loginn" class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
                        <a class="btn btn-lg btn-primary btn-block" href="http://localhost:8080/#/login">注册</a>
                    </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
	export default {
	  name: 'login',
	  data () {
	    return {
	       	
	    }
	  }
}	  
</script>
<script>
	$(function(){/* 文档加载，执行一个函数*/
     $('#defaultForma')
     .bootstrapValidator({
         message: 'This value is not valid',
         feedbackIcons: {/*input状态样式图片*/
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
         },
         fields: {/*验证：规则*/
             username: {//验证input项：验证规则
                 message: 'The username is not valid',
                
                 validators: {
                     notEmpty: {//非空验证：提示消息
                         message: '用户名不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '用户名长度必须在6到30之间'
                     },
                     threshold :  6 , //有6字符以上才发送ajax请求，（input中输入一个字符，插件会向服务器发送一次，设置限制，6字符以上才开始）
                     remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}  
                         url: 'http://localhost:3000/verifyusernamea',//验证地址
                         message: '用户不存在',//提示消息
                         delay :  2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
                         type: 'POST'//请求方式
                         /**自定义提交数据，默认值提交当前input value
                          *  data: function(validator) {
                               return {
                                   password: $('[name="passwordNameAttributeInYourForm"]').val(),
                                   whatever: $('[name="whateverNameAttributeInYourForm"]').val()
                               };
                            }
                          */
                     },
                     regexp: {
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: '用户名由数字字母下划线和.组成'
                     }
                 }
             },
             password: {
                 message:'密码无效',
                 validators: {
                     notEmpty: {
                         message: '密码不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 30,
                         message: '用户名长度必须在6到30之间'
                     },
                     regexp: {
                         regexp: /^[a-zA-Z0-9_\.]+$/,
                         message: 'The username can only consist of alphabetical, number, dot and underscore'
                     }
                 }
             },

         }
     })
     .on('success.form.bv', function(e) {//点击提交之后
         // Prevent form submission
         e.preventDefault();

         // Get the form instance
         var $form = $(e.target);

         // Get the BootstrapValidator instance
         var bv = $form.data('bootstrapValidator');

         // Use Ajax to submit form data 提交至form标签中的action，result自定义
         $.post($form.attr('action'), $form.serialize(), function(data){
		                if (data.zhuangtai=='登录成功') {
		                	// alert('登录成功');
		                	$.cookie('username',data.shuju[0].username); 
		                	window.location.href="http://localhost:8080/#/caidan";
		                } else{
		                	// alert(data);
		                	// alert('1');
		                	$('#loginn').attr("disabled",false);	
		                }
         });
     
     
     
     
     });
});
</script>
<style>
	.container{
		margin-top: 0.65rem;
	}
	.form-bg{
    background: #00b4ef;
	}
	.form-horizontal{
	    /*background: #fff;*/
	    padding-bottom: 40px;
	    border-radius: 15px;
	    text-align: center;
	}
	.form-horizontal .heading{
	    display: block;
	    font-size: 35px;
	    font-weight: 700;
	    padding: 35px 0;
	    border-bottom: 1px solid #f0f0f0;
	    margin-bottom: 30px;
	}
	.form-horizontal .form-group{
	    padding: 0 40px;
	    margin: 0 0 25px 0;
	    position: relative;
	}
	.form-horizontal .form-control{
	    background: #f0f0f0;
	    border: none;
	    border-radius: 20px;
	    box-shadow: none;
	    padding: 0 20px 0 45px;4
	    height: 40px;
	    transition: all 0.3s ease 0s;
	}
	.form-horizontal .form-control:focus{
	    background: #e0e0e0;
	    box-shadow: none;
	    outline: 0 none;
	}
	.form-horizontal .form-group i{
	    position: absolute;
	    top: 12px;
	    left: 60px;
	    font-size: 17px;
	    color: #c8c8c8;
	    transition : all 0.5s ease 0s;
	}
	.form-horizontal .form-control:focus + i{
	    color: #00b4ef;
	}
	.form-horizontal .fa-question-circle{
	    display: inline-block;
	    position: absolute;
	    top: 12px;
	    right: 60px;
	    font-size: 20px;
	    color: #808080;
	    transition: all 0.5s ease 0s;
	}
	.form-horizontal .fa-question-circle:hover{
	    color: #000;
	}
	.form-horizontal .main-checkbox{
	    float: left;
	    width: 20px;
	    height: 20px;
	    background: #11a3fc;
	    border-radius: 50%;
	    position: relative;
	    margin: 5px 0 0 5px;
	    border: 1px solid #11a3fc;
	}
	.form-horizontal .main-checkbox label{
	    width: 20px;
	    height: 20px;
	    position: absolute;
	    top: 0;
	    left: 0;
	    cursor: pointer;
	}
	.form-horizontal .main-checkbox label:after{
	    content: "";
	    width: 10px;
	    height: 5px;
	    position: absolute;
	    top: 5px;
	    left: 4px;
	    border: 3px solid #fff;
	    border-top: none;
	    border-right: none;
	    background: transparent;
	    opacity: 0;
	    -webkit-transform: rotate(-45deg);
	    transform: rotate(-45deg);
	}
	.form-horizontal .main-checkbox input[type=checkbox]{
	    visibility: hidden;
	}
	.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{
	    opacity: 1;
	}
	.form-horizontal .text{
	    float: left;
	    margin-left: 7px;
	    line-height: 20px;
	    padding-top: 5px;
	    text-transform: capitalize;
	}
	.form-horizontal .btn{
	    float: right;
	    font-size: 14px;
	    color: #fff;
	    background: #00b4ef;
	    border-radius: 30px;
	    padding: 10px 25px;
	    border: none;
	    text-transform: capitalize;
	    transition: all 0.5s ease 0s;
	}
	@media only screen and (max-width: 479px){
	    .form-horizontal .form-group{
	        padding: 0 25px;
	    }
	    .form-horizontal .form-group i{
	        left: 45px;
	    }
	    .form-horizontal .btn{
	        padding: 10px 20px;
	    }
	}
</style>
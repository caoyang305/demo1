<template>
	<div class="box">
		<div class="sj_top1">
			<router-link to='/'><i class="top_i1">关闭</i></router-link>
			<input type="text"  class="top_txt1"/>
		</div>
		<div class="sj_list">
			<ul class="sj_ul1">
					<li>
						<router-link to='/movie'>
						<i class="list_i1">电影</i>
						<p class="sj_p1">影院热映</p>
							</router-link>
					</li>
					<li><router-link to='/movie'>
						<i class="list_i2">电视</i>
						<p class="sj_p1">电视热映</p>
						</router-link>
					</li>
					<li>
						<router-link to='/movie'>
						<i class="list_i3">图书</i>
						<p class="sj_p1">图书热映</p>
						</router-link>
					</li>
					
					<li>
						<router-link to='/movie'>
						<i class="list_i1 list_i11">同城</i>
						<p class="sj_p1">影院热映</p>
							</router-link>
					</li>
					<li><router-link to='/movie'>
						<i class="list_i2 list_i12">小组</i>
						<p class="sj_p1">电视热映</p>
						</router-link>
					</li>
					<li>
						<router-link to='/movie'>
						<i class="list_i3 list_i13">音乐</i>
						<p class="sj_p1">图书热映</p>
						</router-link>
					</li>
					<li>
						<router-link to='/movie'>
						<i class="list_i1 list_i111">阅读</i>
						<p class="sj_p1">影院热映</p>
							</router-link>
					</li>
					<li><router-link to='/movie'>
						<i class="list_i2 list_i112">游戏</i>
						<p class="sj_p1">电视热映</p>
						</router-link>
					</li>
					<li>
						<router-link to='/movie'>
						<i class="list_i3 list_i113">应用</i>
						<p class="sj_p1">图书热映</p>
						</router-link>
					</li>
					<li>
						<router-link to='/movie'>
						<i class="list_i1 list_i1111">东西</i>
						<p class="sj_p1">影院热映</p>
							</router-link>
					</li>
					<li><router-link to='/movie'>
						<i class="list_i2 list_i1112">FM</i>
						<p class="sj_p1">电视热映</p>
						</router-link>
					</li>
					<li>
						<router-link to='/movie'>
						<i class="list_i3 list_i1113">诗集</i>
						<p class="sj_p1">图书热映</p>
						</router-link>
					</li>				
			</ul>
		</div>
		<div class="footer">
			<ul class="sj_ul2">
				<li id="li1">
					<template v-if="aaa">
						<router-link to="" ><i class="sj_i2">{{aaa}}</i></router-link>
					</template>
					<template v-else>
						<router-link to='/Signin'><i class="sj_i2">注册账号</i></router-link>
					</template>
				</li>
				<li>
					<template v-if="aaa">
						<router-link to=""  @click.native="tc"><i class="sj_i2">退出登录</i></router-link>
					</template>
					<template v-else>
						<router-link to='/Login'><i class="sj_i2">登录豆瓣</i></router-link>
					</template>
				</li>
				<li><router-link to='/movie'><i class="sj_i2">使用桌面版</i></router-link></li>
				<li><router-link to='/movie'><i class="sj_i2">使用豆瓣App</i></router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	  name: 'caidan',
	  data () {
	    return {
	    	aaa:[]
	    }
	  },
	  mounted:function(){
	  	this.aaa = $.cookie("username");
	  },
	  methods:{
	  	tc(){
	  		$.cookie('username',''); 
	  		window.location.reload();
	  	}
	  }
}

</script>

<style scoped>

.sj_top1{
	width: 100%;
	padding-left: 0.3rem;
	height: 1rem;
	line-height: 1rem;
	background-color: #fff;
	position: relative;
	z-index: 2;
}
.top_i1{
	font-size: 0.26rem;
	color:#42bd56 ;
}
.top_txt1{
	background-color: #f3f3f3;
	border: none;
	width: 70%;
	margin: 0 auto;
	height: 0.4rem;
	background-image: url(../assets/ss1.png);
	background-repeat: no-repeat;
	background-size: 0.3rem;
	background-position: 50% 0.07rem;
	line-height: 0.4rem;
	margin-left: 0.5rem;
	
}

/*内容*/
.sj_list{
	width: 90%;
	margin: 0 auto;
	overflow: hidden;
}
.sj_ul1{
	margin-top: 0.2rem;
	width: 100%;
	float: left;
	overflow: hidden;
}
.sj_ul1>li{
	float: left;
	width: 29%;
	margin-right: 3%;
	text-align: center;
	margin-top: 0.3rem;
}

.list_i1{
	color: rgb(35, 132, 232);
	font-size: 0.34rem;
}
.list_i11{
	color: rgb(230, 70, 126);
}
.list_i111{
	color: rgb(159, 120, 96);
}
.list_i1111{
	color: rgb(225, 100, 77);
}

.list_i2{
	color:rgb(42, 184, 204);
	font-size: 0.34rem;
}
.list_i12{
	color: rgb(230, 70, 126);
}
.list_i112{
	color:rgb(87, 116, 197);
}
.list_i1112{
	color: rgb(89, 108, 221);
}
.list_i3{
	color:rgb(42, 184, 204);
	font-size: 0.34rem;
}
.list_i13{
	color:rgb(244, 143, 46);
	
}
.list_i113{
	color:rgb(89, 108, 221);
	
}
.list_i1113{
	color:rgb(66, 189, 86);
	
}
.sj_p1{
	font-size: 0.14rem;
	color: #ccc;
}
.sj_ul2{
	width: 80%;
	margin: 0.5rem auto;
	overflow: hidden;
}
.sj_ul2>li{
	float: left;
	width: 45%;
	margin-left: 5%;
	text-align: center;
	margin-top: 0.3rem;	
}
.sj_i2{
	color: #42bd56;
	font-size: 0.24rem;
}
</style>
<template>

  <div id="app">
  		<div class="top">
			<h1><router-link to='/'><i class="i0">豆瓣</i></router-link></h1>
			<ul class="top_ul1">
				<li class="top_li1"><router-link to='/movie'><i class="i1">电影</i></router-link></li>
				<li class="top_li2"><router-link to='/book'><i class="i2">图书</i></router-link></li>
				<li class="top_li3"><router-link to='/radio'><i class="i3">广播</i></router-link></li>
				<li class="top_li4"><i class="i4">小组</i></li>
				<li class="top_li5"><router-link to='/caidan'><img class="li5_img" src="../src/assets/ss.png" alt="" /></router-link></li>
			</ul>
		</div>
    	<router-view></router-view>
   </div>
</template>

	 	
<script>
export default {
  name: 'app'
}
</script>

<style>
	#app{
		width: 100%;
		overflow: hidden;
	}
	h1{margin:0;}
	/*标题*/
	.box{
		width: 100%;
		overflow: hidden;
	}
	.top{
		width: 100%;
		overflow: hidden;
		height: 0.65rem;
		line-height: 1rem;
		position: fixed;
		top: 0;
		background-color: #fff;
		border-bottom: 1px solid #f2f2f2;
	}
	.i0{
		float: left;
		color: #00b600;
		font-size:0.34rem;
		margin-left: 0.2rem;
		margin-top:0.15rem;
		font-weight: bolder;
	}
	.top_ul1{
		float: right;
	}
	.top_ul1>li{
		line-height: 0.65rem;
		height: 0.65rem;
		float:left;
		font-size:0.24rem;
		margin-right: 0.3rem;
	}
	.li5_img{
		width: 0.4rem;
	}
	.i1{
		color: #2384E8;
	}
	.i2{
		color: #9F7860;
	}
	.i3{
		color: #E4A813;
	}
	.i4{
		color: #2AB8CC;
	}

</style>

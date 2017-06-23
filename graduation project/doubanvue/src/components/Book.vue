<template>
	<div class="box">
		<div class="list">
			<p class="list_p1">最受关注的书丨虚构类<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul1">
			    <li v-for="article in articles">
			    	 <img :src="article.images.large" class="list_img1" />
			        {{article.title}}
			    </li>
			</ul>
		</div>
		
		<div class="list">
			<p class="list_p1">最受关注的书丨非虚构类<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul1">
			    <li v-for="article in articles">
			    	 <img :src="article.images.large" class="list_img1" />
			        {{article.title}}			        
			    </li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
  name: 'book',
  data () {
    return {
    	articles: []
    }
  },
  mounted: function() {
		    this.$http.jsonp('https://api.douban.com/v2/book/1220562?count=10', {}, {
		        headers: {},
		        emulateJSON: true
		    }).then(function(response) {
		        // 这里是处理正确的回调
//		      	var rl=response.body.subjects
//				 console.log(rl.length) 
//				 for(var i=0;i<rl.length;i++){
//				 	var oU=$('<ul></ul>')
//				 	oU.addClass('list_ul1')
//					$('<li></li>').text(rl[i].id).appendTo(oU)
////				 		$('<img />').src([i].images).appendTo(oU)
//					
//				 }
				console.log(response.body)
		     
		        this.articles = response.body
		        
		       
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
		}

}
</script>

<style>
		.box{
		width: 100%;
		overflow: hidden;
	}
	.list{
		width:90%;
		max-width: 650px;
		margin: 0.55rem auto 0 auto;
		overflow: hidden;
	}
	.list_p1{
		float: left;
		width: 100%;
		font-size: 0.26rem;
		margin-top: 0.15rem;
	}
	.list_p1>a{
		float: right;
		color: #42bd56;
		font-size: 0.22rem;
	}
	.list_ul1{
		float: left;
		width: 280%;
		margin-top: 0.2rem;
		overflow: hidden;
	}
	.list_ul1>li{
		float: left;
		width:1.5rem;
		margin-right:0.3rem;
		text-align: center;
	}
	.list_img1{
		width: 100%;
		height: 2.4rem;
		
	}
	.list_p2{
		width: 100%;
		text-align: center;
		color: #000;
		font-size: 0.22rem;
	}
	.list_p3{
		width: 100%;
		height: 0.3rem;
		line-height: 0.3rem;
	}
</style>
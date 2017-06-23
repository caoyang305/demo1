<template>
	<div class="box">
		<div class="list">
			<p class="list_p1">影院热映<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul11">
			    <li class="list_li11" v-for="article in articles">
			    	 <img :src="article.images.large" class="list_img1" />
			        {{article.title}}
			    </li>
			</ul>
		</div>
		
		<!--<div class="list">
			<p class="list_p1">免费在线观影<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul1">
			    <li v-for="article in articles">
			    	 <img :src="article.images.large" class="list_img1" />
			        {{article.title}}
			    </li>
			</ul>
		</div>-->
	</div>
</template>

<script>
	export default {
	  name: 'movies',
	  data () {
	    return {
	    	articles: []
	    }
	  },
	  mounted: function() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=8', {}, {
		        headers: {},
		        emulateJSON: true
		    }).then(function(response) {
		        // 这里是处理正确的回调
		      	var rl=response.body.subjects
//				 console.log(rl.length) 
				 for(var i=0;i<rl.length;i++){
				 	var oU=$('<ul></ul>')
				 	oU.addClass('list_ul1')
				 	
				 		$('<li></li>').text(rl[i].id).appendTo(oU)
//				 		$('<img />').src([i].images).appendTo(oU)

				 }
				console.log(response)
		     
		        this.articles = response.data.subjects
		        
		       
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
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
	}
	.list_p1>a{
		float: right;
		color: #42bd56;
		font-size: 0.22rem;
	}
	.list_ul11{
		float: left;
		/*white-space: nowrap;*/
		width:100%;
		margin-top: 0.2rem;
	}
	.list_ul11 .list_li11{
		float: left;
		width:1.7rem;
		margin-right:0.2rem;
		text-align: center;
	}
	.list_img1{
		width: 90%;
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
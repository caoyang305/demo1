<template>
	<div class="box">
		<div class="list">
			<p class="list_p1">影院热映<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul1">
				<li class="list_li1" v-for="article in articles">
				<router-link :to="'introduce/' + article.id">
					    <img :src="article.images.large" class="list_img1" />
					    <p class="list_p3">{{article.title}}</p>
					     <p class="list_p4">
					    	<Starbox :rating = "article.rating"></Starbox>
						</p>
				    </router-link>
				</li> 
				
			</ul>
		</div>
		
		<div class="list">
			<p class="list_p1">免费在线观影<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul1">
				<router-link to='/introduce'>
				    <li class="list_li1" v-for="article in articles">
				    	 <img :src="article.images.large" class="list_img1" />
				        <p class="list_p3">{{article.title}}</p>
				        <p class="list_p4">
					    	<Starbox :rating = "article.rating"></Starbox>
					    </p>
				    </li>
			    </router-link>
			</ul>
		</div>
		<div class="list">
			<p class="list_p1">新片速递<a href="javaScript:;">更多</a></p>
			<ul class="ul1 list_ul1">
			    	<router-link to='/introduce'>
					    <li class="list_li1" v-for="article in articles">
					    	 <img :src="article.images.large" class="list_img1" />
					        <p class="list_p3">{{article.title}}</p>
					        <p class="list_p4">
						    	<Starbox :rating = "article.rating"></Starbox>
						    </p>
					    </li>
			    </router-link>
			</ul>
		</div>
		<h2 class="m_h2">发现好电影</h2>
		<div class="bq">
			<ul class="list_ul2">
			 <li style="border-color: #FFAC2D;"><a href="https://m.douban.com/movie/classic" style="color: #FFAC2D;">同时入选IMDB250和豆瓣电影250的电影</a></li>
		      <li style="border-color: #FFC46C;"><a href="https://m.douban.com/movie/underrated" style="color: #FFC46C;">带你进入不正常的世界</a></li>
		      <li style="border-color: #42BD56;"><a href="https://m.douban.com/movie/doubantop" style="color: #42BD56;">用电【影】来祭奠逝去的岁月</a></li>
		      <li style="border-color: #2384E8;"><a href="https://m.douban.com/doulist/1125971/" style="color: #2384E8;">女孩们的故事【电影】</a></li>	      
		      <li style="border-color: #4F9DED;"><a href="https://m.douban.com/doulist/4253902/" style="color: #4F9DED;">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
		      <li style="border-color: #CC3344;"><a href="https://m.douban.com/doulist/121326/" style="color: #CC3344;">美国生活面面观</a></li>
		      <li style="border-color: #3BA94D;"><a href="https://m.douban.com/doulist/37479562/" style="color: #3BA94D;">2015终极期待</a></li>
		      <li style="border-color: #FF4055;"><a href="https://m.douban.com/doulist/458087/" style="color: #FF4055;">经典韩国电影——收集100部</a></li>
			</ul>
		</div>
		<h2 class="m_h2">分类浏览</h2>
		<div class="footer">
            <ul class="list_ul3">
                <li><a href="https://m.douban.com/movie/classic">经典<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">冷门佳片<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">豆瓣高分<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">动作<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">喜剧<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">爱情<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">悬疑<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">恐怖<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">科幻<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">治愈<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">文艺<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">成长<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">动画<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">华语<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">欧美<span>></span></a></li>
                <li><a href="https://m.douban.com/movie/classic">韩国<span>></span></a></li>
                <li><a href="/movie/japanese">日本<span>></span></a></li>
            </ul>
    </div>
	</div>
</template>

<script>
	import Starbox from '../components/Starbox.vue'
		export default {
	  name: 'movie',
	  data () {
	    return {
	    	articles: [],
	    	star:new Array()
	    }
	  },
	  mounted: function() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=10', {}, {
		        headers: {},
		        emulateJSON: true
		    }).then(function(response) {
		      	var rl=response.body.subjects
				console.log(response)	     	
		        this.articles = response.data.subjects
		        this.star = response.data.subjects.rating	       
		    }, function(response) {
		        console.log(response)
		    });
		},
		components:{
			Starbox
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
		margin-bottom: -0.5rem;
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
	.list_ul1{
		overflow-x:auto;
		white-space: nowrap;
		width: 285%;
		margin-top: 0.2rem;
	}
	.list_ul1 .list_li1{
		display: inline-block;
		width:1.8rem;
		margin-right:0.3rem;
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
		color: #000;
		font-size:16px;
	}
	.m_h2{
		padding-top: 0.8rem;
		width: 90%;
		margin: 0 auto;
	}
	.bq{
		overflow-x: auto;
		width: 90%;
		margin:0.2rem auto;
	}
	.list_ul2{
		width: 300%;
		float: left;
	}
	.list_ul2>li{
		border:0.01px solid green;
		border-radius: 0.1rem;
		height: 0.8rem;
		line-height: 0.8rem;
		float: left;
		padding: 0 0.2rem 0 0.2rem;
		margin: 0.1rem;
	}
	.footer{
		overflow: hidden;
		width: 100%;
		margin: 0 auto;
	}
	.list_ul3{
		float: left;
		width: 100%;
		margin-top: 0.2rem;
		border-top: 0.01rem solid #ccc;
			}
	.list_ul3>li{
		float: left;
		width: 50%;
		border: 0.01rem solid #ccc;
		border-top: none;
		border-left: none;
		box-sizing: border-box;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
	}
	.list_ul3>li>a{
		color:#00B600;
		font-size: 0.22rem;
	}
	.list_ul3>li>a>span{
		color: #ccc;
		float: right;
		font-size: 0.28rem;
		margin-right: 0.2rem;
	}
	.list_p4{
		padding-left: 0.2rem;
		height: 0.2rem;
		line-height: 0.2rem;
	}
	.list_p4>img{
		width: 0.13rem;
		float: left;
		margin-right: 0.06rem;
	}
	.list_p4>span{
		float: left;
		color: #ccc;
		font-size: 0.19rem;
	}
</style>
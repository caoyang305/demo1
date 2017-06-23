<template>
	<div class="box">		
		<!--内容-->
		<div class="content">
			<div class="con_div1">
					<ul class="con_ul1">
						<li>
							<router-link to='/movies'>
								<i class="con_i3">影院热映</i>
							</router-link>
						</li>
						<li><i class="con_i3">近期值得看的国产剧</i></a></li>
						<li><i class="con_i3">豆瓣时间</i></a></li>
						<li><i class="con_i3">使用豆瓣App</i></a></li>
					</ul>
			</div>
			<div class="con_div2">
				<ul class="con_ul2" id="con_ul2">
					<li id="con_li">
						
					</li>
				</ul>	
			</div>
			
			
		</div>
		
		
			
	</div>
</template>

<script>       
export default {
  name: 'hello',
  data () {
    return {
    	articles: []
    }
  },
	  mounted: function() {
		    this.$http.jsonp('https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1?count=100', {}, {
		        headers: {},
		        emulateJSON: true
		    }).then(function(response) {
		        // 这里是处理正确的回调
		      	var rl=response.body.recommend_feeds
				 console.log(rl.length) 
				 for(var i=0;i<rl.length;i++){
				 	var oLi=$('#con_li')
				 	var oDiv=$('<div></div>')
				 	var oP1=$('<p></p>')
				 	var oP2=$('<p></p>')
				 	var oH=$('<h2></h2>')
				 	var oA=$('<a></a>')
				 	var oA1=$('<a></a>')
				 	var oI1=$('<i></i>')
				 	var oI2=$('<i></i>')
				 	var oImg=$("<img src={{article[i].target.cover_url}}/>")
				 	oDiv.addClass('con_div3')
				 	oP1.addClass('con_p1')
				 	oP2.addClass('con_p2')
				 	oA.addClass('h_a1')
				 	oH.addClass('h_h2')
				 	oI1.addClass('con_i1')
				 	oI2.addClass('con_i2')
				 	
				 	
				 	
				 	console.log(oDiv.length)
				 	oH.appendTo(oDiv)
				 	oA1.text(rl[i].title).appendTo(oH)
				 	oP1.text(rl[i].target.desc).appendTo(oDiv)
				 	oI1.text(rl[i].target.author.name).appendTo(oP2)
				 	oI2.text(rl[i].source_cn).appendTo(oP2)
				 	
				 	
				 	oImg.appendTo(oA)
				 	oA.appendTo(oDiv)
				 	oP2.appendTo(oDiv)
				 	oDiv.appendTo(oLi)
				 	
//				 	console.log(oDiv.length)
				 	
				 }
				
//				console.log(response.body.recommend_feeds)    	
		       
		       this.articles = response.body.recommend_feeds
     
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(1)
		    });
    
		}

}
</script>

<style>
	/*内容*/
	.content{
		width:90%;
		max-width: 650px;
		margin: 0.70rem auto;
		overflow: hidden;
	}
	.con_div1{
		width: 100%;
		overflow: hidden;
	}
	.con_ul1{
		float: left;
		width: 100%;
	}
	.con_ul1>li{
		width: 44%;
		float: left;
		background-color: #f2f2f2;
		margin-left: 4%;
		margin-top: 1%;
		text-align: center;
		height: 0.58rem;
		line-height: 0.58rem;
	}
	.con_i3{
		color: #000;
		font-size: 0.20rem;
	}
	.con_div2{
		width: 100%;
		margin-top: 0.3rem;
		overflow: hidden;
	}
	.con_ul2{
		float: left;
		overflow: hidden;
	}
	.con_ul2>li{
		float: left;
		border-bottom: 1px solid #ccc;
		padding-bottom: 0.3rem;
	}
	.con_div3{
		overflow: hidden;
		width: 90%;
		margin: 0.2rem auto;
		border-bottom: 0.01rem solid #ccc;
		padding-bottom: 0.2rem;
	
	}
	.h_h2{
		width: 60%;
		
	}
	.h_h2>a{
		color: #000;
		font-size: 0.24rem;
		font-weight: normal;

	}
	.h_a1{
		float: right;
		display: block;
		width: 30%;
	}
	.con_p1{
		float: left;
		width: 60%;
		font-size: 0.14rem;
		color: #ccc;
	}
	.con_img1{
		width: 30%;
		float: right;
	}
	.con_p2{
		color: #ccc;
		float:left;
		width: 100%;
		margin-top: 0.1rem;
	}
	.con_i2{
		float:right;
	}
</style>

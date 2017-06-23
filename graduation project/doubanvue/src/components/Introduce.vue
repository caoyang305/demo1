<template>
	<div class="box1">
		<div class="i_top">
			<h2 class="i_h2">{{articles.title}}</h2>
			<div class="i_div1">
				
				<starbox class="i_i1" :rating = "articles.rating"></starbox>

				<p class="i_p1">
					<span v-for="(el,index) in articles.year">{{el}}</span>/
					<span v-for="(el,index) in articles.countries">{{el}}/</span>
					<span v-for="(el,index) in articles.genres">{{el}}/</span>
					<span v-for="(el,index) in articles.directors">{{el.name}}</span>/
					<span v-for="(el,index) in articles.casts">{{el.name}}/</span>	
				</p>
			</div>
			<div class="i_div2">
				<img :src="articles.images.large" alt="" />
			</div>
			<p class="i_p2"><a href="javaScript:;">用App查看影人资料</a></p>
			<div class="like">
				<template v-if="this.bbb">
					<router-link to="" @click.native="likepl" ><span>想看</span></router-link>
					<router-link to="" @click.native="lookedpl"><span>看过</span></router-link>
				</template>
				<template v-else>
					<router-link to="/Login"><span>想看</span></router-link>
					<router-link to="/Login"><span>看过</span></router-link>
				</template>
			</div>
			<div class="likepl">
				<div class="pltop">
					<span class="pltop_out" @click="plout">取消</span>
					<span class="pltitle">{{articles.title}}</span>
					<span class="pltop_ok" @click="plok">确定</span>
				</div>
				<div class="plstar">
					<img src="../assets/start-n.png" height="40" width="40" alt="" @click="changesrc(1)">
					<img src="../assets/start-n.png" height="40" width="40" alt="" @click="changesrc(2)">
					<img src="../assets/start-n.png" height="40" width="40" alt="" @click="changesrc(3)">
					<img src="../assets/start-n.png" height="40" width="40" alt="" @click="changesrc(4)">
					<img src="../assets/start-n.png" height="40" width="40" alt="" @click="changesrc(5)">
				</div>
				<div class="plbox">
					<textarea name="pl" id="pltext" ></textarea>
				</div>
			</div>
			<div class="plzhanshi">
				<h4 class="plh4"></h4>
				<div id="starbox"></div>
				<span class="pltxt"></span>
				<span class="plbtn">
					<a href="javascript:;" class="plbtn1"></a>
					<a href="javascript:;" class="plbtn2"></a>
				</span>
			</div>
		</div>
		<div class='i_list'>
			<h2 class="i_h22">{{articles.title}}的剧情简介</h2>
			<p class="i_p4">{{articles.summary}}</p>
			
			<ul class="i_ul4">
				<h2 class="i_h22">{{articles.title}}的影评(781)</h2>
				<li class="lits_li1">
					<h3>做正确的事远比把事情做正确要深远——细思极恐分析异形前传系列</h3>
					<p class="list_p5">
						大葱看电影
						<starbox class="i_i1" :rating="articles.rating"></starbox>
					</p >
					<p class="lits_p2">
                                   《异形》是我最喜欢的系列之一。 而最新的《契约》，让我苦等了5年！从《普罗米修斯》开始，就一直着迷着斯考特的异形前传三部曲（可能现在已经不是三部曲了）。总之，...
                    </p >
				</li>
			</ul>	
			
		</div>
	</div>
</template>

<script>
	import starbox from './Starbox.vue'
	export default {
	  name: 'introduce',
	  data () {
	    return {
	    	articles:new Array(),
	    	det:{images:{medium:''}},
	  		plstar:'',
	  		star:0,
	  		type:false,
	  		opentype:'',
	  		bbb:''
	    }
	  },
	  mounted: function() {
	  		this.bbb = $.cookie("username");

	  		const id = this.$route.params.id;
		    this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + id, {}, {
		        headers: {},
		        emulateJSON: true
		    }).then(function(response) {
		        // 这里是处理正确的回调
		  
				console.log(response)
		     	
		        this.articles = response.data
		       
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });

		    this.getpl();
		},
		components : {
			starbox
		},
	methods:{
		likepl(){
	    	$('.likepl').css('display','block');
	    	$('.plstar').css('display','none');
	    	this.opentype=1;
	    },
	    lookedpl(){
	    	this.opentype=2;
	    	$('.likepl').css('display','block');
	    	$('.plstar').css('display','block');
	    },
	    changesrc(n){
	    	this.star=n;
	    	for(var i=0;i<$('.plstar img').length;i++){
    			$('.plstar img').eq(i).attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=');
    		}
    		for(var i=0;i<n;i++){
    			$('.plstar img').eq(i).attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==');
    		}
	    },
	    plout(){
	    	$('.likepl').css('display','none');
	    	$('.plstar').css('display','none');
    		this.changesrc(this.star);
	    },
	    plok(){
	    	var _this=this;
	    	if(this.opentype==1){
	    		this.plstar='like';
	    		this.star=0;
	    	}else if(this.opentype==2){
	    		this.plstar='looked';
	    	}
	    	if(!this.type){
	    		$.ajax({
	    			url:'http://localhost:3000/addpl',
	    			type:'post',
	    			data:{
	    				movieid:this.$route.params.id,
	    				username:this.bbb,
	    				pltext:$('#pltext').val(),
	    				type:this.plstar,
	    				star:this.star
	    			},
	    			success:function(data){
	    				$('.likepl').css('display','none');  
	    				_this.star=0;
	    				_this.getpl();
	    			},
	    			error:function(err){
	    				console.log(err);
	    			}
	    		});
	    	}else if(this.type){
	    		$.ajax({
	    			url:'http://localhost:3000/updatepl',
	    			type:'post',
	    			data:{
	    				movieid:this.$route.params.id,
	    				username:this.bbb,
	    				pltext:$('#pltext').val(),
	    				type:this.plstar,
	    				star:this.star
	    			},
	    			success:function(data){
	    				$('.likepl').css('display','none'); 
	    				_this.getpl();
	    			},
	    			error:function(err){
	    				console.log(err);
	    			}
	    		});
	    	}
	    },
	    getpl(){
	    	console.log(this.type);
	    	$('#starbox').html('');
	    	var _this=this;
	    	if(this.bbb){
		  		$.ajax({
	    			url:'http://localhost:3000/getpl',
	    			type:'get',
	    			data:{
	    				movieid:this.$route.params.id,
	    				username:this.bbb
	    			},
	    			success:function(data){
	    				if(data[0].type=='like'){
	    					_this.type=true;
	    					$('.plh4').html('我想看的电影');
	    					$('.pltxt').html('');
	    					$('.pltxt').html(data[0].pltext);
	    					$('.plbtn1').text('( 修改 ');
	    					$('.plbtn2').text('删除 )');
	    					$('.like a').eq(0).addClass('notouch');
	    					$('.like a').eq(1).removeClass('notouch');
	    					$('.plbtn a').eq(0).click(function(){
	    						_this.plstar=data[0].type;
	    						$('.likepl').css('display','block');
	    					});
	    					$('.plbtn a').eq(1).click(function(){
	    						$.ajax({
	    							url:'http://localhost:3000/delpl',
	    							data:{
	    								movieid:_this.$route.params.id,
	    								username:_this.bbb
	    							},
	    							type:'post',
	    							success:function(data){
	    								console.log('删除成功')
	    								_this.type=false;
	    								window.location.reload();
	    							},
	    							error:function(err){
	    								console.log('删除失败')
	    							}
	    						})
	    					});
	    				}else if(data[0].type=='looked'){
	    					_this.type=true;
	    					$('.plh4').html('我看过的电影');
	    					var n=5-data[0].star;
	    					for(var i=0;i<data[0].star;i++){
	    						$('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==" alt="" width="15" height="15" />').appendTo($('#starbox'));
	    					}
	    					for(var i=0;i<n;i++){
	    						$('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=" alt="" width="15" height="15" />').appendTo($('#starbox'));
	    					}
	    					$('.pltxt').html(data[0].pltext);
	    					$('.plbtn1').text('( 修改 ');
	    					$('.plbtn2').text('删除 )');
	    					$('.like a').eq(1).addClass('notouch');
	    					$('.like a').eq(0).removeClass('notouch');
	    					$('.plbtn a').eq(0).click(function(){
	    						_this.plstar=data[0].type;
	    						$('.likepl').css('display','block');
	    						$('.plstar').css('display','block');
	    					});
	    					$('.plbtn a').eq(1).click(function(){
	    						$.ajax({
	    							url:'http://localhost:3000/delpl',
	    							data:{
	    								movieid:_this.$route.params.id,
	    								username:_this.bbb
	    							},
	    							type:'post',
	    							success:function(data){
	    								console.log('删除成功')
	    								_this.type=false;
	    								window.location.reload();
	    							},
	    							error:function(err){
	    								console.log('删除失败')
	    							}
	    						})
	    					});
	    				}

	    			},
	    			error:function(err){
	    				console.log(err);
	    			}
	    		});
		  	}
	    }
	}
}
</script>

<style>
	.disabled{
		/*pointer-events: none; */
		background: #000000;
	}
	.box1{
		margin-top: 1rem;
		width: 100%;
	}
	.i_top{
		width:90% ;
		margin: 0 auto;
	}
	.i_h2{
		font-size: 0.36rem;
		font-weight: normal;
		margin-bottom: 0.15rem;
	}
	.i_div1{
		float: left;
		width: 60%;
	}
	.i_div1>img{
		width: 0.25rem;
		
	}
	.i_i1{
		color: #ccc;
		font-size: 0.18rem;
	}
	.i_p1{
		margin-top: 0.2rem;
	}
	.i_div2{
		float: left;
		width: 40%;
		text-align: center;
	}
	.i_div2>img{
		width: 70%;
	}
	.i_p2>a{
		font-size: 0.22rem;
		color: #42bd56;
	}
	.i_p3{
		height: 0.5rem;
		line-height: 0.5rem;
		margin-top: 0.3rem;
		text-align: center;
	}
	.i_p3>a{
		float: left;
		width: 45%;
		text-align: center;
		border: 0.01rem solid #ffb712;
		margin-left: 2.5%;
		border-radius: 0.08rem;
		color: #ffb712;
	}
	.i_list{
		width: 90%;
		margin: 0.5rem auto;
		
	}
	.i_h22{
		color:#aaa ;
		font-size: 0.24rem;
		font-weight: normal;
	}
	.i_p4{
		font-size: 0.22rem;
		margin-top: 0.2rem;
	}
	
	/*like*/
	.plh4{
		color:#aaa;
		font-size: 16px;
		margin:10px 0;
		font-weight: normal;
	}
	.like{
		width:100%;
		margin-top:20px;
		display: flex;
	}
	.like a{
		flex: 1;
		line-height: 30px;
		height:30px;
		font-size: 16px;
		color:#ffb712;
		border:1px solid #ffb712;
		border-radius: 3px;
		text-align: center;
	}
	.like .notouch{
		border-color: #ccc;
		color:#ccc;
		pointer-events: none;
	}
	.like a:nth-child(1){
		margin-right:10px;
	}
	.likepl{
		display: none;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 20;
		background:#fff;
	}
	.pltop{
		border-bottom: 1px solid #f0f0f0;		
		padding:8px 18px ;
		text-align: center;
		font-size: 15px;
	}
	.pltop_out{
		float: left;
		margin-top: 2px;
		color:#42bd56;
	}
	.pltop_ok{
		float: right;
		margin-top: 2px;
		color:#42bd56;
	}
	.pltitle{
		font-size: 20px;
	}
	.biaoqian{
		padding:10px 18px;
		color:#ccc;
	}
	.biaoqian>h5{
		font-size:16px;
	}
	.plbox{
		padding:20px 18px;
	}
	#pltext{
		width:100%;
		height:100px;
	}
	.plstar{
		text-align: center;
		padding:10px 18px;
		border-bottom: 1px solid #f0f0f0;
	}
	.plh4{
		color:#aaa;
		font-size: 16px;
		margin:10px 0;
		font-weight: normal;
	}
	.plzhanshi h4{color:#aaa;
		font-size: 16px;
		margin:10px 0;
		font-weight: normal;}
</style>
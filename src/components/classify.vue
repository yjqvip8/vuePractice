<template>
	<div class="classify">
		<!--头部-->
		<div class="header">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner mui-row">
						<div class="mui-col-xs-3">
							<a href="#"><img src="../img/home/logo.png" ></a>
						</div>
						<div class="mui-col-xs-7">
							<input  type="text" >
							<i @click="Imperfect" class="mui-icon mui-icon-search"></i>
						</div>	
						<div class="mui-col-xs-2" v-if="!login">
							<a href="/#/login"><span>登录</span></a>
						</div>
						<div class="mui-col-xs-2" v-if="login">
							<a href="/#/login"><span class="mui-icon mui-icon-person"></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--内容-->
		<div class="content">
			<div class="nav">
				<ul>
					<li :class="{active:n1}" @click="li(1)">运动生活</li>
					<li :class="{active:n2}" @click="li(2)">休闲服装</li>
					<li :class="{active:n3}" @click="li(3)">时尚鞋品</li>
					<li :class="{active:n4}" @click="li(4)">快乐儿童</li>
					<li :class="{active:n5}" @click="li(5)">全球购</li>
					<li :class="{active:n6}" @click="li(6)">腕表首饰</li>
					<li :class="{active:n7}" @click="li(7)">家居家纺</li>
					<li :class="{active:n8}" @click="li(8)">家用电器</li>
					<li :class="{active:n9}" @click="li(9)">美妆个护</li>
					<li :class="{active:n10}" @click="li(10)">品牌馆</li>
				</ul>
			</div>
			<div class="shangnav">
				<!--运动-->
				<div class="yundong" :class="{none:!n1}">
					<!--运动牌子-->
					<div class="top">
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/yundong/top-1.jpg"></a></li>                                    
						</ul>
					</div>	
					<div class="xia">
						<!--运动鞋-->
						<p class="title">——运动鞋——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/yundong/yundongxie.jpg"><p>跑步鞋</p></a></li>
						</ul>
						<!--运动服-->
						<p class="title">——运动服——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/yundong/yundongfu.jpg"><p>运动T恤</p></a></li>
						</ul>
						<!--运动包配-->
						<p class="title">——运动包配——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/yundong/baopei.jpg"><p>运动背包</p></a></li>
						</ul>	
					</div>	
				</div>
				<!--休闲服装-->
				<div class="xuixian" :class="{none:!n2}">
					<!--休闲品牌-->
					<div class="top">
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/xuixian/top-1.png"></a></li>
						</ul>
					</div>
					<div class="xia">
						<!--休闲男装-->
						<p class="title">——男装——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/xuixian/nanzhuang.jpg"><p>POLO</p></a></li>
						</ul>
						<!--休闲女装-->
						<p class="title">——女装——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/xuixian/nvzhaung.jpg"><p>衬衫</p></a></li>
						</ul>
						<!--休闲户外服装-->
						<p class="title">——户外服装——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/xuixian/huwai.jpg"><p>T恤</p></a></li>
						</ul>
					</div>
				</div>
				<!--时尚鞋品-->
				<div class="shishang" :class="{none:!n3}">
					<div class="top">
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shishang/top-1.png"></a></li>
						</ul>
					</div>
					<div class="xia">
						<!--精品男鞋-->
						<p class="title">——精品男鞋——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shishang/nanxie.jpg"><p>休闲鞋</p></a></li>
						</ul>
						<!--潮流女鞋-->
						<p class="title">——潮流女鞋——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shishang/nvxie.jpg"><p>浅口鞋</p></a></li>
						</ul>
					</div>
				</div>
				<!--快乐儿童-->
				<div class="kuaile" :class="{none:!n4}">
					<!--快乐儿童品牌-->
					<div class="top">
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/kuaile/top-1.jpg"></a></li>
						</ul>
					</div>
					<div class="xia">
						<!--儿童鞋靴-->
						<p class="title">——儿童鞋靴——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/kuaile/xiexue.jpg"><p>儿童运动鞋</p></a></li>
						</ul>
						<!--儿童服饰-->
						<p class="title">——儿童服饰——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/kuaile/fushi.jpg"><p>儿童夹克</p></a></li>
						</ul>
					</div>
				</div>
				<!--全球购-->
				<div class="quanquigou" :class="{none:!n5}">
					<div class="xia">
						<!--全球购品牌-->
						<p class="title">——常用类目——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/quanquigou/quanbu.png"></a></li>
						</ul>
					</div>
				</div>
				<!--腕表首饰-->
				<div class="shoushi" :class="{none:!n6}">
					<div class="xia">
						<!--腕表-->
 						<p class="title">——腕表——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shoushi/biao.jpg"><p>男表</p></a></li>
						</ul>
						<!--首饰-->
						<p class="title">——首饰——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shoushi/shoulian.jpg"><p>手链/手镯</p></a></li>
						</ul>
						<!--轻奢皮具-->
						<p class="title">——轻奢皮具——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shoushi/piju.jpg"><p>单肩女包</p></a></li>
						</ul>
						<!--腕表首饰品牌墙-->
						<p class="title">——品牌墙——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/shoushi/pinpai.png"><p>潘多拉</p></a></li>
						</ul>
					</div>
				</div>
				<!--家居家纺-->
				<div class="jiaju" :class="{none:!n7}">
					<div class="xia">
						<!--家居鞋服-->
						<p class="title">——家居鞋服——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/jiaju/jiaju.jpg"><p>睡衣</p></a></li>
						</ul>
						<!--家纺床品-->
						<p class="title">——家纺床品——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/jiaju/jiafnag.jpg"><p>床品套件</p></a></li>
						</ul>
						<!--家居家纺品牌墙-->
						<p class="title">——品牌墙——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/jiaju/pinpai.jpg"><p>jockey</p></a></li>
						</ul>
					</div>
				</div>
				<!--家用电器-->
				<div class="dianqi" :class="{none:!n8}">
					<div class="xia">
						<!--热销类目-->
						<p class="title">——热销类目——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/dianqi/rexiao.jpg"><p>厨房电器</p></a></li>
						</ul>
						<!--家用电器品牌墙-->
						<p class="title">——品牌墙——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/dianqi/pinpai.jpg"><p>荣事达</p></a></li>
						</ul>
					</div>
				</div>
				<!--美妆个护-->
				<div class="meizhuang" :class="{none:!n9}">
					<div class="xia">
						<!--基础护肤-->
						<p class="title">——基础护肤——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/meizhuang/jichu.jpg"><p>面膜</p></a></li>
						</ul>
						<!--身体护理-->
						<p class="title">————身体护理</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/meizhuang/shenti.jpg"><p>口腔护理</p></a></li>
						</ul>
						<!--个性美妆-->
						<p class="title">——个性美妆——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/meizhuang/meizhuang.jpg"><p>口红</p></a></li>
						</ul>
						<!--美妆工具-->
						<p class="title">——美妆工具——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/meizhuang/gongju.jpg"><p>化妆棉</p></a></li>
						</ul>
						<!--健康养护-->
						<p class="title">——健康养护——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/meizhuang/jiankang.jpg"><p>口罩</p></a></li>
						</ul>
						<!--美妆个护品牌墙-->
						<p class="title">——品牌墙——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/meizhuang/pinpai.jpg"><p>迪奥</p></a></li>
						</ul>
					</div>
				</div>
				<!--品牌馆-->
				<div class="pinpai" :class="{none:!n10}">
					<div class="xia">
						<!--运动品牌-->
						<p class="title">——运动品牌——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/pinpai/yundong.jpg"></a></li>
						</ul>
						<!--服装品牌-->
						<p class="title">——服装品牌——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/pinpai/fuzhuang.jpg"></a></li>
						</ul>
						<!--男女鞋品牌-->
						<p class="title">——男女鞋品牌——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/pinpai/nannv.jpg"></a></li>
						</ul>
						<!--全球购品牌-->
						<p class="title">——全球购品牌——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/pinpai/quanquigou.jpg"></a></li>
						</ul>
						<!--户外品牌-->
						<p class="title">——户外品牌——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/pinpai/huwai.jpg"></a></li>
						</ul>
						<!--家用品牌-->
						<p class="title">——家电品牌——</p>
						<ul>
							<li><a href="/#/shop"><img src="../img/classify/pinpai/jiadian.png"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--尾部-->
		<div class="footer">
			<nav class="mui-bar mui-bar-tab">
				<a class="mui-tab-item" href="/#/home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
				</a>
				<a class="mui-tab-item" href="/#/classify">
					<span class="mui-icon mui-icon-list"></span>
					<span class="mui-tab-label">分类</span>
				</a>
				<a class="mui-tab-item" href="/#/sale">
					<span class="mui-icon mui-icon-extra mui-icon-extra-outline"></span>
					<span class="mui-tab-label">限时抢购</span>
				</a>
				<a class="mui-tab-item" href="/#/trolley">		
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
					<span class="mui-tab-label">购物车</span>
				</a>			
				<a class="mui-tab-item" href="/#/login">
					<span class="mui-icon mui-icon-person"></span>
					<span class="mui-tab-label">用户</span>
				</a>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				n1:true,n2:false,n3:false,n4:false,n5:false,n6:false,n7:false,n8:false,n9:false,n10:false,
				login:false
			};
		},
		methods:{
			li(n){
				if(n==1){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n1=true
					window.scrollTo(0,0)
				}else if(n==2){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n2=true
					window.scrollTo(0,0)
				}else if(n==3){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n3=true
					window.scrollTo(0,0)
				}else if(n==4){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n4=true
					window.scrollTo(0,0)
				}else if(n==5){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n5=true
					window.scrollTo(0,0)
				}else if(n==6){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n6=true
					window.scrollTo(0,0)
				}else if(n==7){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n7=true
					window.scrollTo(0,0)
				}else if(n==8){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n8=true
					window.scrollTo(0,0)
				}else if(n==9){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n9=true
					window.scrollTo(0,0)
				}else if(n==10){
					this.n1=this.n2=this.n3=this.n4=this.n5=this.n6=this.n7=this.n8=this.n9=this.n10=false
					this.n10=true
					window.scrollTo(0,0)
				}
			},
			logins(){
				if(sessionStorage["islogin"]=="true"){
					this.login=true
				}else{
					this.login=false
				}
			},
			Imperfect(){
				this.$toast("因数据库未完善，此功能暂无法使用！")
				console.log(123)
			}
		},
		created(){
			this.logins()
		}
	}
</script>

<style>
	/*头部*/
	.classify{
		position: relative;
	}
	.classify>.header{
		position: fixed;
		z-index: 50;
		width: 100%;
		top: 0;
	}
	.classify>.header>.mui-card{
		height: 50px;
	}
	.classify>.header>.mui-card>.mui-card-content>.mui-card-content-inner{
		background: #f5f5f5;
		padding: 0;
		height: 50px;
	}
	.classify>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(1)>a>img{
		height: 50px;
	}
	.classify>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(2){
		position: relative;
	}
	.classify>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(2)>input{
		width: 100%;
		height: 30px;
		margin: 0;
		margin-top: 10px;
		border-radius: 15px;
	}
	.classify>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(2)>i{
		position: absolute;
		right: 12px;
		top: 13px;
	}
	.classify>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(3)>a>span{
		line-height: 50px;
		margin-left: 30%;
		color: #111;
	}
	/*内容*/
	.classify>.content{
		margin-top: 50px;
		position: relative;
		margin-bottom: 50px;
	}
	.classify>.content>.nav{
		border-right: 1px solid #cccccc;
		box-sizing: border-box;
		position: fixed;
		background: #FFFFFF;
	}
	.classify>.content>.nav>ul{
		margin: 0;
	}
	.classify>.content>.nav>ul>li{
		font-size: 12px;
		width: 90px;
		height: 56.5px;
		text-align: center;
		line-height: 56.5px;
	}
	.classify>.content>.shangnav{
		overflow: hidden;
		margin-left: 90px;
		background: #FFFFFF;
	}
	.classify>.content>.shangnav .top{
		padding: 0 10px;
	}
	.classify>.content>.shangnav .top>ul{
		display: flex;
		padding-top: 15px;
		flex-wrap: nowrap;
	}
	.classify>.content>.shangnav .xia>.title{
		text-align: center;
		color: #000000;
		font-size: 16px;
		margin-top: 30px;
	}
	.classify>.content>.shangnav .xia>ul{
		display: flex;
		flex-wrap: wrap;
	}
	.classify>.content>.shangnav .xia>ul>li{
		width: 33.333%;
	}
	.classify>.content>.shangnav .xia>ul>li>a>img{
		width: 80%;
		margin-left: 10%;
	}
	.classify>.content>.shangnav .xia>ul>li>a{
		text-align: center;
	}
	
	/*底部*/
	.classify>.footer>.mui-bar>a:nth-child(2)>span{
		color: red;
	}
	/*导航激活*/
	.classify .active{
		font-size: 1rem !important;
		color: #FF5053;
	}
</style>

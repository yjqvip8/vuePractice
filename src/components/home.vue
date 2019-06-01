<template>
	<div class="home">
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
		
		<!--轮播-->
		<div class="lunbo">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-swipe :auto="4000">
							<mt-swipe-item v-for="item of lunbo" :key="item.id"><img :src="item.img" /></mt-swipe-item>
						</mt-swipe>
					</div>
				</div>
			</div>
		</div>
		
		<!--内容-->
		<div class="content">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!--分类-->
						<div class="fenlei">
							<div class="mui-row">
								<div class="mui-col-xs-6">
									<a href="/#/shop"><img src="../img/home/fenlei-1.jpg"></img></a>
								</div>
								<div class="mui-col-xs-3">
									<a href="/#/shop"><img src="../img/home/fenlei-2.jpg"></a>
								</div>
								<div class="mui-col-xs-3">
									<a href="/#/shop"><img src="../img/home/fenlei-3.gif"></a>
								</div>
							</div>
							<div class="mui-row">
								<div class="mui-col-xs-3">
									<a href="/#/shop"><img src="../img/home/fenlei-4.jpg"></a>
								</div>
								<div class="mui-col-xs-3">
									<a href="/#/shop"><img src="../img/home/fenlei-5.jpg"></a>
								</div>
								<div class="mui-col-xs-3">
									<a href="/#/shop"><img src="../img/home/fenlei-6.jpg"></a>
								</div>
								<div class="mui-col-xs-3">
									<a href="/#/shop"><img src="../img/home/fenlei-7.jpg"></a>
								</div>
							</div>
						</div>
						<!--秒杀-->
						<div class="miaosha"> 
							<ul>
								<li v-for="item in miaosha" :key="item.id">
									<a :href="item.href">
										<img :src="item.img_1">
										<img :src="item.img_2">
										<p>{{item.title}}</p>
										<p>￥{{item.price}}</p>
									</a>
								</li>
							</ul>
						</div>
						<!--商品-->
						<div class="shangpin">
							<div class="list">
								<ul>
									<li class="list1" @click="list(1)" :class="{listActive:!i1}">精选</li>
									<li class="list2" @click="list(2)" :class="{listActive:!i2}">运动</li>
									<li class="list3" @click="list(3)" :class="{listActive:!i3}">服饰</li>
									<li class="list4" @click="list(4)" :class="{listActive:!i4}">鞋靴</li>
									<li class="list5" @click="list(5)" :class="{listActive:!i5}">全球购</li>
									<li class="list6" @click="list(6)" :class="{listActive:!i6}">户外</li>
									<li class="list7" @click="list(7)" :class="{listActive:!i7}">儿童</li>
								</ul>
							</div>
							<!--精选-->
							<div class="shang1 jingxuan" :class="{none:i1}">
								<a v-for="item in jingxuan" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
							<!--运动-->
							<div class="shang2 yundong" :class="{none:i2}">
								<a v-for="item in yundong" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
							<!--服饰-->
							<div class="shang3 fushi" :class="{none:i3}">
								<a v-for="item in fushi" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
							<!--鞋靴-->
							<div class="shang4 xiexue" :class="{none:i4}">
								<a v-for="item in xiexue" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
							<!--全球购-->
							<div class="shang5 quanquigou" :class="{none:i5}">
								<a v-for="item in quanqiugou" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
							<!--户外-->
							<div class="shang6 huwai" :class="{none:i6}">
								<a v-for="item in huwai" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
							<!--儿童-->
							<div class="shang7 ertong" v-bind:class="{none:i7}">
								<a v-for="item in ertong" :key="item.id" :href="item.href">
									<img :src="item.img">
									<span>{{item.time}}</span>
									<p>
										<span>{{item.price}}</span>
										<span>{{item.title}}</span>
									</p>
								</a>
							</div>
						</div>
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
				i1:false,
				i2:true,
				i3:true,
				i4:true,
				i5:true,
				i6:true,
				i7:true,
				lunbo:[],
				miaosha:[],
				jingxuan:[],
				yundong:[],
				fushi:[],
				xiexue:[],
				quanqiugou:[],
				huwai:[],
				ertong:[],
				login:false
			}
		},
		methods:{
			list(i){
				if(i==1){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i1=false
				}else if(i==2){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i2=false
				}else if(i==3){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i3=false
				}else if(i==4){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i4=false
				}else if(i==5){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i5=false
				}else if(i==6){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i6=false
				}else if(i==7){
					this.i1=this.i2=this.i3=this.i4=this.i5=this.i6=this.i7=true
					this.i7=false
				}
			},
			shuju(){
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/lunbo"
				}).then((res)=>{
					this.lunbo=res.data
					console.log(this.lunbo)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeMiaosha"
				}).then((res)=>{
					this.miaosha=res.data
					console.log(this.miaosha)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeJingxuan"
				}).then((res)=>{
					this.jingxuan=res.data
					console.log(this.jingxuan)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeYundong"
				}).then((res)=>{
					this.yundong=res.data
					console.log(this.yundong)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeFushi",
				}).then((res)=>{
					this.fushi=res.data
					console.log(this.fushi)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeXiexue"
				}).then((res)=>{
					this.xiexue=res.data
					console.log(this.xiexue)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeQuanqiugou"
				}).then((res)=>{
					this.quanqiugou=res.data
					console.log(this.quanqiugou)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeHuwai"
				}).then((res)=>{
					this.huwai=res.data
					console.log(this.huwai)
				})
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/homeErtong"
				}).then((res)=>{
					this.ertong=res.data
					console.log(this.ertong)
				})
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
			this.shuju()
			this.logins()
		}
	}
</script>

<style>	
	ul{
		list-style: none;
		padding: 0;
	}
	.mui-card{
		margin: 0 !important;
		padding: 0;
	}
	.mui-card-content-inner{
		padding: 0 !important;
	}
	/*头部*/
	.home{
		position: relative;
	}
	.home>.header{
		position: fixed;
		z-index: 50;
		width: 100%;
		top: 0;
	}
	.home>.header>.mui-card{
		height: 50px;
	}
	.home>.header>.mui-card>.mui-card-content>.mui-card-content-inner{
		background: #f5f5f5;
		padding: 0;
		height: 50px;
	}
	.home>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(1)>a>img{
		height: 50px;
	}
	.home>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(2){
		position: relative;
	}
	.home>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(2)>input{
		width: 100%;
		height: 30px;
		margin: 0;
		margin-top: 10px;
		border-radius: 15px;
	}
	.home>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(2)>i{
		position: absolute;
		right: 12px;
		top: 13px;
	}
	.home>.header>.mui-card>.mui-card-content>.mui-card-content-inner>div:nth-child(3)>a>span{
		line-height: 50px;
		margin-left: 30%;
		color: #111;
	}
	/*轮播*/
	.home>.lunbo div.mint-swipe{
		height: 130px;
		margin-top: 50px;
	}
	.home>.lunbo div.mint-swipe img{
		width: 100%;
	}
	/*底部*/
	.home>.footer>.mui-bar>a:first-child>span{
		color: red;
	}
	/*内容*/
	.home>.content{
		margin-top: 10px;
		margin-bottom: 45px;
	}
	/*分类*/
	.home>.content .fenlei img{
		width: 100%;
		height: 100%;
	}
	.home>.content .miaosha{
		overflow-x: scroll;
		
	}
	.home>.content .miaosha>ul>li{
		float: left;
	}
	.home>.content .miaosha>ul{
		width: 720px;
		overflow-x: scroll;
	}
	.home>.content .miaosha>ul>li>a{
		display: block;
		width: 90px;
		height: 140px;
		padding: 9px;
		position: relative;
	}
	.home>.content .miaosha>ul>li>a>img:first-child{
		width: 100%;
	}
	.home>.content .miaosha>ul>li>a>img:nth-child(2){
		width: 40px;
		position: absolute;
		left: 9px;
		top: 9px;
	}
	.home>.content .miaosha>ul>li>a>p:nth-child(3){
		width: 72px;
		height: 30px;
		font-size: 12px;
		color: #000000;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
		line-height: 15px;
		margin: 0;
	}
	.home>.content .miaosha>ul>li>a>p:nth-child(4){
		color: #d70057;
		margin-bottom: 0;
	}
	/*商品*/
	.home>.content .shangpin>.list>ul{
		display: flex;
		margin: 5px 0;
		justify-content: space-around;
	}
	.home>.content .shangpin>.list>ul>li{
		padding: 5px 5px;
	}
	/*所有商品*/
	.home>.content .shangpin a{
		display: block;
		position: relative;
	}
	.home>.content .shangpin a>img{
		width: 100%;
	}
	.home>.content .shangpin a>span{
		padding: 1px 10px;
		background-color: rgba(0,0,0,.5);
		font-size: 12px;
		color: white;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
	}
	.home>.content .shangpin a>p{
		padding: 5px 10px;
	}
	.home>.content .shangpin a>p>span:nth-child(1){
		color: red;
		font-size: 16px;
	}
	.home>.content .shangpin a>p>span:nth-child(2){
		color: black;
		margin-left: 30px;
	}
	.listActive{
		color: #d20044;
		border-bottom: 2px solid #d20044;
	}
	/*隐藏*/
	.none{
		display: none;
	}
</style>

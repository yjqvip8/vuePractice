<template>
	<div class="sale">
		<!--头部-->
		<div class="header mui-row">
			<div class="mui-col-xs-3"></div>
			<div class="mui-col-xs-6"><span>限时抢购</span></div>
			<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
		</div>
		<!--内容-->
		<div class="content">
			<div class="nav">
				<ul>
					<li :class="{active:n1}" @click="nav(1)">今日特卖</li>
					<li :class="{active:n2}" @click="nav(2)">服装</li>
					<li :class="{active:n3}" @click="nav(3)">鞋靴</li>
					<li :class="{active:n4}" @click="nav(4)">儿童</li>
					<li :class="{active:n5}" @click="nav(5)">包配</li>
				</ul>
			</div>
			<div class="shangpin">
				<div class="temai" :class="{none:!n1}">
					<ul>
						<li v-for="item in temai"><a :href="item.img"><img :src="item.img"><p><span>{{item.price}}</span>{{item.title}}</p></a></li>
					</ul>
				</div>
				<div class="fuzhuang" :class="{none:!n2}">
					<ul>
						<li v-for="item in temai"><a :href="item.img"><img :src="item.img"><p><span>{{item.price}}</span>{{item.title}}</p></a></li>
					</ul>
				</div>
				<div class="xiexue" :class="{none:!n3}">
					<ul>
						<li v-for="item in temai"><a :href="item.img"><img :src="item.img"><p><span>{{item.price}}</span>{{item.title}}</p></a></li>
					</ul>
				</div>
				<div class="ertong"  :class="{none:!n4}">
					<ul>
						<li v-for="item in temai"><a :href="item.img"><img :src="item.img"><p><span>{{item.price}}</span>{{item.title}}</p></a></li>
					</ul>
				</div>
				<div class="baopei"  :class="{none:!n5}">
					<ul>
						<li v-for="item in temai"><a :href="item.img"><img :src="item.img"><p><span>{{item.price}}</span>{{item.title}}</p></a></li>
					</ul>
				</div>
			</div>
		</div>
		<!--底部-->
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
				n1:true,n2:false,n3:false,n4:false,n5:false,
				temai:[]
			};
		},
		methods:{
			nav(i){
				if(i==1){
					this.n1=this.n2=this.n3=this.n4=this.n5=false
					this.n1=true
					window.scrollTo(0,0)
				}else if(i==2){
					this.n1=this.n2=this.n3=this.n4=this.n5=false
					this.n2=true
					window.scrollTo(0,0)
				}else if(i==3){
					this.n1=this.n2=this.n3=this.n4=this.n5=false
					this.n3=true
					window.scrollTo(0,0)
				}else if(i==4){
					this.n1=this.n2=this.n3=this.n4=this.n5=false
					this.n4=true
					window.scrollTo(0,0)
				}else if(i==5){
					this.n1=this.n2=this.n3=this.n4=this.n5=false
					this.n5=true
					window.scrollTo(0,0)
				}
			},
			temais(){
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/sale"
				}).then((res)=>{
					this.temai=res.data
					console.log(this.temai)
				})
			}
		},
		created(){
			this.temais()
		}
	}
</script>

<style>
	/*头部*/
	.sale>.header{
		width: 100%;
		height: 50px;
		background: #f5f5f5;
		position: fixed;
		top: 0;
	}
	.sale>.header>div{
		height: 100%;
	}
	.sale>.header>div:nth-child(2){
		line-height: 50px;
		text-align: center;
	}
	.sale>.header>div:last-child>a{
		line-height: 50px;
		transform: scale(1.3);
		float: right;
		color: #333;
		margin-right: 20px;
	}
	/*内容*/
	.sale>.content{
		margin-top: 50px;
		margin-bottom: 50px;;
	}
	.sale>.content>.nav{
		background: #fff;
		width: 100%;
		height: 50px;
	}
	.sale>.content>.nav>ul{
		display: flex;
		justify-content: space-around;
		padding: 10px 0;
	}
	.sale>.content>.nav>ul>li{
		line-height: 30px;
		font-size: 14px;
		margin: 0;
	}
	.sale>.content>.shangpin ul{
		margin: 0;
	}
	.sale>.content img{
		width: 100%;
	}
	.sale>.content>.shangpin ul>li>a>p{
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #000000;
		margin: 0 20px;
		margin-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}
	.sale>.content>.shangpin ul>li>a>p>span{
		color: red;
		margin-right: 20px;
	}
	/*底部*/
	.sale>.footer>.mui-bar>a:nth-child(3)>span{
		color: red;
	}
	/*导航激活状态*/
	.sale .active{
		color: red;
		border-bottom: 1px solid red;
	}
</style>

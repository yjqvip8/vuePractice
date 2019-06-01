<template>
	<div class="trolley">
		<!--头部-->
		<div class="header mui-row">
			<div class="mui-col-xs-3"><a @click="back" class="mui-icon mui-icon-back"></a></div>
			<div class="mui-col-xs-6"><span>购物车</span></div>
			<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
		</div>
		<!--内容-->
		<div class="content">
			<div class="empty" v-if="!and">
				<p class="car"><img src="../img/trolley/cart.png"></p>
				<p class="wz">购物车还空着呢，快去选购商品吧</p>
				<p class="btn">
					<a href="/#/home"><span>去首页</span></a>
					<a href="#"><span>我的收藏</span></a>
				</p>
			</div>
			<div class="com" v-if="and">
				<div class="list">
					<p class="title"><span>特价</span> 耐克 秋冬特惠</p>
					<div class="mui-row">
						<div class="mui-col-xs-1">
							<div :class="{active:duihao}" @click="duihaos">√</div>
						</div>
						<div class="mui-col-xs-3">
							<img src="../img/trolley/5ba335124d91b1efdcf9d4045d70a982.jpg">
						</div>
						<div class="mui-col-xs-8">
							<p class="ti">Nike耐克男式篮球运动休闲连帽夹克外套</p>
							<p class="cm">尺码：XS</p>
							<p class="num"><span>￥466</span><span>X{{num}}</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="settle mui-row">
				<div class="mui-col-xs-6"></div>
				<div class="mui-col-xs-3">
					<p class="zj">总计：<span>￥{{price}}</span></p>
					<p class="yh">优惠：<span>￥0</span></p>
				</div>
				<div class="mui-col-xs-3" @click="jiesuan">去结算</div>
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
				<a class="mui-tab-item" href="#">		
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
				duihao:false,
				and:false,
				num:0,
				price:0
			};
		},
		methods:{
			back(){
				history.go(-1)
			},
			duihaos(){
				this.duihao=!this.duihao
				if(this.duihao){
					this.price=this.num*466
				}else{
					this.price=0
				}
			},
			ands(){
				if(sessionStorage["shop"]==undefined){
					this.and=false
				}else{
					this.and=true
					this.num=sessionStorage["shop"]
				}
			},
			jiesuan(){
				if(sessionStorage["islogin"]=="false"){
					this.$toast("请先登录")
				}else if(this.price==0){
					this.$toast("请选择商品")
				}else{
					this.$toast("支付成功！")
				}	
			}
		},
		created(){
			this.ands()
		}
	}
</script>

<style>
	/*头部*/
	.trolley>.header{
		width: 100%;
		height: 50px;
		background: #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 50;
	}
	.trolley>.header>div{
		height: 100%;
	}
	.trolley>.header>div:nth-child(2){
		line-height: 50px;
		text-align: center;
	}
	.trolley>.header>div:last-child>a{
		line-height: 50px;
		transform: scale(1.3);
		float: right;
		color: #333;
		margin-right: 20px;
	}
	.trolley .mui-icon-back{
		margin: 10px;
		font-size: 28px;
		color: #757575;
	}
	/*内容*/
	.trolley>.content{
		margin: 50px 0;
	}
	.trolley>.content>.empty>.car{
		text-align: center;
	}
	.trolley>.content>.empty>.car>img{
		width: 120px;
		margin-top: 50px;
		margin-bottom: 30px;
	}
	.trolley>.content>.empty>.wz{
		font-size: 14px;
		text-align: center;
	}
	.trolley>.content>.empty>.btn{
		margin: 30px 0;
		text-align: center;
	}
	.trolley>.content>.empty>.btn>a>span{
		display: inline-block;
		width: 130px;
		height: 35px;
		border: 1px solid #D70057;
		margin: 0 10px;
		border-radius: 5px;
		line-height: 35px;
		color: #D70057;
	}
	.trolley>.content>.com{
		padding: 10px 0;
	}
	.trolley>.content>.com>.list{
		margin: 10px 0;
		background: #FFFFFF;
		width: 100%;
		height: 160px;
		padding: 10px 7px;
	}
	.trolley>.content>.com>.list>.title{
		font-size: 12px;
		color: #000000;
	}
	.trolley>.content>.com>.list>.title>span{
		border: 1px solid #D70057;
		padding: 2px 3px;
		color: #D70057;
	}
	.trolley>.content>.com>.list>.mui-row>div{
		height: 120px;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-1>div{
		text-align: center;
		line-height: 25px;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 1px solid #E1E1E1;
		margin-top: 38px;
		color: white;
		padding-right: 3px;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-1>.active{
		background: #D70057;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-3>img{
		width: 100%;
		margin-top: 10px;
		border: 1px solid #E1E1E1;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-8>p{
		margin-bottom: 5px;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-8{
		padding: 10px 8px;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-8>.ti{
		color: #000000;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-8>.num{
		display: flex;
		justify-content: space-between;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-8>.num>span:first-child{
		color: #D70057;
	}
	.trolley>.content>.com>.list>.mui-row>.mui-col-xs-8>.num>span:last-child{
		color: #333;
	}
	/*结算*/
	.trolley>.content>.settle{
		position: fixed;
		bottom: 50px;
		width: 100%;
		height: 55px;
		background: #fff;
	}
	.trolley>.content>.settle>div{
		height: 55px;
	}
	.trolley>.content>.settle>.mui-col-xs-3>p{
		margin: 0;
	}
	.trolley>.content>.settle>.mui-col-xs-3>.zj{
		font-size: 10px;
		margin-top: 5px;
	}
	.trolley>.content>.settle>.mui-col-xs-3>.zj>span{
		color: #D70057;
	}
	.trolley>.content>.settle>.mui-col-xs-3>.yh{
		font-size: 10px;
	}
	.trolley>.content>.settle>.mui-col-xs-3:last-child{
		font-size: 16px;
		background: #D70057;
		color: white;
		text-align: center;
		line-height: 55px;
	}
	/*底部*/
	.trolley>.footer>.mui-bar>a:nth-child(4)>span{
		color: red;
	}
</style>

<template>
	<div class="detailed">
		<!--头部-->
		<div class="header mui-row">
			<div class="mui-col-xs-3"><a @click="back" class="mui-icon mui-icon-back"></a></div>
			<div class="mui-col-xs-6"><span>商品详情</span></div>
			<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
		</div>
		<!--内容-->
		<div class="content">
			<div class="lunbo">
				<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../img/detailed/detailed-1.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../img/detailed/detailed-2.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../img/detailed/detailed-3.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../img/detailed/detailed-4.jpg"></mt-swipe-item>
					<mt-swipe-item><img src="../img/detailed/detailed-5.jpg"></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="info">
				<p class="price">￥<span>59</span><s>￥699</s></p>
				<p class="title">女式 达达运动舒适休闲篮球鞋</p>
				<p class="haun"><span>换购</span> 达达特惠 （加1元换购袜子/运动包） >></p>
				<p class="text">颜色</p>
				<p class="yanse">
					<ul>
						<li><img src="../img/detailed/detailed-small-1.jpg"></li>
						<li><img src="../img/detailed/detailed-small-2.jpg"></li>
						<li><img src="../img/detailed/detailed-small-3.jpg"></li>
						<li><img src="../img/detailed/detailed-small-4.jpg"></li>
					</ul>
				</p>
				<p class="text">尺码</p>
				<p class="chima">
					<ul>
						<li>35.5</li>
						<li>36.5</li>
						<li>37.5</li>
						<li>38</li>
						<li>38.5</li>
						<li>39</li>
						<li>40</li>
						<li>40.5</li>
					</ul>
				</p>
			</div>
			<div class="pinpai">
				<img src="../img/detailed/pinpai.png">
				<span>DADA达达</span>
				<span>更多></span>
			</div>
			<div class="xiangqing">
				<ul class="nav">
					<li :class="{active:xiangqing}" @click="xq(1)">图文详情</li>
					<li :class="{active:!xiangqing}" @click="xq(2)">评价晒单(0)</li>
				</ul>
				<div class="tuwen" v-if="xiangqing">
					<tr><td>商品编号</td><td>17646202</td></tr>
					<tr><td>性别</td><td>女</td></tr>
					<tr><td>鞋面材质</td><td>合成材料</td></tr>
					<tr><td>季节</td><td>春、夏、秋、冬</td></tr>
					<tr><td>应季月份</td><td>全年</td></tr>
					<div class="tupian">
						<img src="../img/detailed/xiangqing-1.jpg">
						<img src="../img/detailed/xiangqing-2.jpg">
						<img src="../img/detailed/xiangqing-3.jpg">
						<img src="../img/detailed/xiangqing-4.jpg">
						<img src="../img/detailed/xiangqing-5.jpg">
						<img src="../img/detailed/xiangqing-6.jpg">
						<img src="../img/detailed/xiangqing-7.jpg">
						<img src="../img/detailed/xiangqing-8.jpg">
					</div>
				</div>
				<div class="pingjia" v-if="!xiangqing">
					<p>暂时没有评论</p>
				</div>
			</div>
		</div>
		<!--底部-->
		<div class="footer mui-row">
			<div class="mui-col-xs-3">
				<a href="/#/trolley">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
					<span>购物车</span>
				</a>	
			</div>
			<div class="mui-col-xs-3">
				<a href="#">
					<span class="mui-icon mui-icon-starhalf"></span>
					<span @click="sc">收藏</span>
				</a>
			</div>
			<div class="mui-col-xs-6" @click="shopping">加入购物车</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				xiangqing:true
			}
		},
		methods:{
			sc(){
				this.$toast("已收藏")
			},
			xq(i){
				if(i==1){
					this.xiangqing=true
				}else{
					this.xiangqing=false
				}
			},
			back(){
				history.go(-1)
			},
			shopping(){
				if(sessionStorage["shop"]==undefined){
					sessionStorage.setItem("shop",1)
					this.$toast("加入购物车成功！")
				}else{
					sessionStorage["shop"]++
					this.$toast("加入购物车成功！")
				}
			}
		}
	}
</script>

<style>
	/*头部*/
	.detailed>.header{
		width: 100%;
		height: 50px;
		background: #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 50;
	}
	.detailed>.header>div{
		height: 100%;
	}
	.detailed>.header>div:nth-child(2){
		line-height: 50px;
		text-align: center;
	}
	.detailed>.header>div:last-child>a{
		line-height: 50px;
		transform: scale(1.3);
		float: right;
		color: #333;
		margin-right: 20px;
	}
	.detailed .mui-icon-back{
		margin: 10px;
		font-size: 28px;
		color: #757575;
	}
	/*内容*/
	.detailed>.content{
		margin: 50px 0;
		
	}
	/*轮播*/
	.detailed>.content>.lunbo div.mint-swipe{
		height: 375px;
		border: 1px solid #e1e1e1;
	}
	.detailed>.content>.lunbo img{
		width: 100%;
	}
	.detailed>.content>.info{
		background: #fff;
		padding: 20px 10px;
		padding-bottom: 0;
	}
	.detailed>.content>.info>p{
		padding-bottom: 20px;
		margin: 0;
	}
	.detailed>.content>.info>.price{
		color: #d70057;
	}
	.detailed>.content>.info>.price>span{
		font-size: 22px;
	}
	.detailed>.content>.info>.price>s{
		margin-left: 15px;
		font-size: 10px;
		color: #999;
	}
	.detailed>.content>.info>.title{
		color: #333;
		font-size: 14px;
	}
	.detailed>.content>.info>.haun>span{
		padding: 3px 5px;
		background: #D70057;
		color: #fff;
		border-radius: 3px;
	}
	.detailed>.content>.info>.text{
		color: #000000;
		font-weight: 600;
	}
	.detailed>.content>.info>.yanse>ul{
		display: flex;
	}
	.detailed>.content>.info>.yanse>ul>li{
		border: 1px solid #E1E1E1;
		margin-right: 10px;
	}
	.detailed>.content>.info>.yanse>ul>li img{
		width: 39px;
	}
	.detailed>.content>.info>.chima>ul{
		display: flex;
		flex-wrap: wrap;
	}
	.detailed>.content>.info>.chima>ul>li{
		width: 60px;
		height: 40px;
		border-radius: 5px;
		margin-right: 10px;
		margin-bottom: 10px;
		text-align: center;
		line-height: 40px;
		background: #f1f1f1;
		color: #333;
		font-size: 12px;
	}
	.detailed>.content>.pinpai{
		margin: 15px 0;
		background: #FFFFFF;
		padding: 0 10px;
		height: 34px;
		position: relative;
	}
	.detailed>.content>.pinpai>img{
		width: 40px;
		height: 34px;
		position: absolute;
	}
	.detailed>.content>.pinpai>span{
		display: inline-block;
		height: 34px;
		line-height: 34px;
		font-size: 8px;
	}
	.detailed>.content>.pinpai>span:nth-child(2){
		margin-left: 50px;
	}
	.detailed>.content>.pinpai>span:nth-child(3){
		float: right;
		color: #757575;
	}
	.detailed>.content>.xiangqing{
		background: #FFFFFF;
		padding: 0 10px;
	}
	.detailed>.content>.xiangqing>.nav{
		display: flex;
	}
	.detailed>.content>.xiangqing>.nav>li{
		padding: 15px 0;
		width: 50%;
		text-align: center;
		border-bottom: 1px solid #e0e0e0;
		font-size: 16px;
	}
	.detailed>.content>.xiangqing>.tuwen>tr{
		height: 40px;
		line-height: 40px;
	}
	.detailed>.content>.xiangqing>.tuwen>tr>td:first-child{
		width: 150px;
	}
	.detailed>.content>.xiangqing>.tuwen>tr>td:last-child{
		width: 250px;
	}
	.detailed>.content>.xiangqing>.tuwen>tr>td{
		color: #757575;
		font-size: 14px;
		border-bottom: 1px solid #E1E1E1;
	}
	.detailed>.content>.xiangqing>.tuwen>.tupian>img{	
		width: 100%;
	}
	.detailed>.content>.xiangqing>.pingjia>p{
		padding: 20px 20px;
		color: #000000;
		font-size: 14px;
	}
	/*底部*/
	.detailed>.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		background: #FFFFFF;
	}
	.detailed>.footer{
		text-align: center;
	}
	.detailed>.footer>div{
		border-left: 1px solid #E1E1E1;
		height: 50px;
	}
	.detailed>.footer>.mui-col-xs-3{
		padding-top: 7px;
	}
	.detailed>.footer>.mui-col-xs-3>a>span{
		display: block;
		font-size: 14px;
		color: #555;
	}
	.detailed>.footer>.mui-col-xs-3>a>span:first-child{
		font-size: 20px;
	}
	.detailed>.footer>.mui-col-xs-6{
		line-height: 50px;
		background: #D70057;
		color: white;
	}
	/*激活*/
	.detailed>.content>.xiangqing>.nav>.active{
		color: #D70057;
		border-bottom: 1px solid #D70057;
	}
	
</style>

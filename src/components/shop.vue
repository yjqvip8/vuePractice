<template>
	<div class="shop">
		<!--头部-->
		<div class="header mui-row">
			<div class="mui-col-xs-3"><a @click="back" class="mui-icon mui-icon-back"></a></div>
			<div class="mui-col-xs-6"><span>商品列表</span></div>
			<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
		</div>
		<!--商品-->
		<div class="content">
			<div class="nav">
				<ul>
					<li>默认</li>
					<li>销量</li>
					<li>价格</li>
					<li>折扣</li>
					<li>筛选</li>
				</ul>
			</div>
			<div class="nav2">
				<ul>
					<li><span>分类</span><i class="mui-icon mui-icon-arrowdown"></i></li>
					<li><span>品牌</span><i class="mui-icon mui-icon-arrowdown"></i></li>
					<li><span>尺码</span><i class="mui-icon mui-icon-arrowdown"></i></li>
				</ul>
			</div>
			<div class="com">
				<div class="com-item" v-for="item in listurl">
					<a href="/#/detailed"><img :src="item.img"></a>
					<p class="des">{{item.des}}</p>
					<p class="title">{{item.title}}</p>
					<p class="price">￥{{item.price}}&nbsp;&nbsp;<span>{{item.cou}}折</span></p>
					<p class="tejia"><span>特价</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listurl:[]
			}
		},
		methods:{
			list(){
				this.$axios({
					method:"get",
					url:"http://127.0.0.1:80/shop"
				}).then((res)=>{
					this.listurl=res.data
				})
			},
			back(){
				history.go(-1)
			}
		},
		created(){
			this.list()
		}
	}
</script>

<style>
	/*头部*/
	.shop>.header{
		width: 100%;
		height: 50px;
		background: #f5f5f5;
		position: fixed;
		top: 0;
		z-index: 50;
	}
	.shop>.header>div{
		height: 100%;
	}
	.shop>.header>div:nth-child(2){
		line-height: 50px;
		text-align: center;
	}
	.shop>.header>div:last-child>a{
		line-height: 50px;
		transform: scale(1.3);
		float: right;
		color: #333;
		margin-right: 20px;
	}
	.shop .mui-icon-back{
		margin: 10px;
		font-size: 28px;
		color: #757575;
	}
	/*内容*/
	.shop ul{
		margin: 0;
	}
	.shop>.content{
		width: 100%;
		margin-top: 50px;
		background: #fff;
	}
	.shop>.content>.nav,.shop>.content>.nav2{
		width: 100%;
		height: 40px;
	}
	.shop>.content>.nav>ul{
		display: flex;
		justify-content: space-around;
		line-height: 40px;
		border-bottom: 1px solid #dedede;
	}
	.shop>.content>.nav>ul>li{
		font-size: 14px;
	}
	.shop>.content>.nav2>ul{
		height: 40px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #dedede;
	}
	.shop>.content>.nav2>ul>li{
		text-align: center;
		line-height: 26px;
		font-size: 12px;
		width: 22%;
		height: 26px;
		background: #e1e1e1;
		margin-top: 5px;
	}
	.shop>.content>.nav2>ul>li>i{
		transform: scale(.7);
	}
	.shop>.content>.com{
		display: flex;
		flex-wrap: wrap;
	}
	.shop>.content>.com>.com-item{
		width: 50%;
		padding: 10px;
	}
	.shop>.content>.com>.com-item>a>img{
		width: 100%;
		display: block;
	}
	.shop>.content>.com>.com-item>p{
		margin: 5px 0;
	}
	.shop>.content>.com>.com-item>.des{
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1; 
		line-height: 15px;
		margin: 0;
		font-size: 12px;
	}
	.shop>.content>.com>.com-item>.title{
		background: #e1e1e1;
		color: #000;
		font-size: 12px;
		padding: 0 5px;
	}
	.shop>.content>.com>.com-item>.price{
		color: #d70057;
		font-size: 18px;
	}
	.shop>.content>.com>.com-item>.price>span{
		font-size: 12px;
		border: 1px solid #d70057;	
	}
	.shop>.content>.com>.com-item>.tejia>span{
		background: #d70057;
		color: white;
		padding: 3px;
	}
	
</style>

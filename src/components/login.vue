<template>
	<div class="indiv">
		<div class="login" v-if="!islogins">
			<!--头部-->
			<div class="header mui-row">
				<div class="mui-col-xs-3"><a @click="back" class="mui-icon mui-icon-back"></a></div>
				<div class="mui-col-xs-6"><span>登录</span></div>
				<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
			</div>
			<!--内容-->
			<div class="content">
				<form class="user" :class="{none:f1}">
					<input type="text" placeholder="请输入用户名" v-model="user">
					<input type="password" placeholder="请输入4-16个字符,数字及字母组合" v-model="upwd">
				</form>
				<form class="shouji" :class="{none:f2}">
					<input type="text" placeholder="请输入手机号" v-model="phone">
					<input type="password" placeholder="请输入验证码" v-model="yzm">
					<span @click="openBottom()">发送验证码</span>
				</form>
				<div class="select">
					<span><input type="radio" name="fangshi" value="1" checked @click="dl(1)">密码登录</span>
					<span><input type="radio" name="fangshi" value="2" @click="dl(2)">手机号登录</span>
				</div>
				<p id="login-cw">{{err}}</p>
				<p class="btn"><input type="button" value="登录" id="login-upwd" @click="login"></p>
				<p class="mian"><input type="checkbox" value="1" name="mian" checked>一个月内免登陆</p>
				<p class="wang"><a href="#" @click="wj">忘记密码？</a><a href="/#/register">立即注册</a></p>
				<ul class="qita">
					<li><a href="#" @click="not"><img src="../img/login/QQ.png"><span>QQ</span></a></li>
					<li><span>|</span></li>
					<li><a href="#" @click="not"><img src="../img/login/weibo.png"><span>微博</span></a></li>
					<li><span>|</span></li>
					<li><a href="#" @click="not"><img src="../img/login/zhifubao.png"><span>支付宝</span></a></li>
				</ul>
			</div>
		</div>
		<div class="info" v-if="islogins">
			<!--头部-->
			<div class="header mui-row">
				<div class="mui-col-xs-3"><a @click="back" class="mui-icon mui-icon-back"></a></div>
				<div class="mui-col-xs-6"><span>我的好乐买</span></div>
				<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
			</div>
			<!--内容-->
			<div class="content">
				<div class="name">
					<div class="mui-row">
						<div class="mui-col-xs-3">
							<div>
								<img src="../img/login/info/userphoto.png">
							</div>
						</div>
						<div class="mui-col-xs-9">
							<span>{{z_user}}</span>
						</div>
					</div>
				</div>
				<div class="dingdan">
					<div class="my">
						我的订单
						<span class="mui-icon mui-icon-arrowright"></span>
					</div>
					<div class="xinxi">
						<div>
							<p class="mui-icon-extra mui-icon-extra-card"></p>
							<p>待支付</p>
						</div>
						<div>
							<p class="mui-icon-extra mui-icon-extra-gift"></p>
							<p>代发货</p>
						</div>
						<div>
							<p class="mui-icon-extra mui-icon-extra-express"></p>
							<p>代签收</p>
						</div>
						<div>
							<p class="mui-icon-extra mui-icon-extra-custom"></p>
							<p>退换货</p>
						</div>
					</div>
				</div>
				<div class="gongneng">
					<a href="#">
						<p><img src="../img/login/info/ulike.png"></p>
						<p>我的收藏</p>
					</a>
					<a href="#">
						<p><img src="../img/login/info/uinvite.png"></p>
						<p>邀请好友得优惠</p>
					</a>
					<a href="#">
						<p><img src="../img/login/info/uconpon.png"></p>
						<p>优惠券</p>
					</a>
					<a href="#">
						<p><img src="../img/login/info/uaddress.png"></p>
						<p>收货地址</p>
					</a>
					<a href="#">
						<p><img src="../img/login/info/urealname.png"></p>
						<p>实名认证</p>
					</a>
					<a href="#">
						<p><img src="../img/login/info/usafe.png"></p>
						<p>账户安全</p>
					</a>
					<a href="#">
						<p><img src="../img/login/info/uhelp.png"></p>
						<p>帮助中心</p>
					</a>
				</div>
				<p class="tuichu"><input type="button" value="退出登录" @click="tuichu"></p>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				f1:false,
				f2:true,
				err:"",
				user:"",
				upwd:"",
				phone:"",
				yzm:"",
				islogins:false,
				z_user:""
			};
		},
		methods:{
			openBottom(){
				this.$toast('验证码：888888')
			},
			not(){
				this.$toast('暂时未开发，敬请期待')
			},
			login(){
				if(this.f1==false){
					let users=/\w{6,16}/
					let upwds=/\w{4,16}/
					if(users.test(this.user)==false){
						this.err="用户名格式错误！"
					}else if(!upwds.test(this.upwd)){
						this.err="密码格式错误！"
					}else{  //ajax
						this.err=""
						let u=this.user
						let p=this.upwd
						let postData=this.$qs.stringify({
							user:u,
							upwd:p
						})
						this.$axios({
							method:"post",
							url:"http://127.0.0.1:80/login",
							data:postData
						}).then((res)=>{
							this.$toast(res.data.msg)
							sessionStorage.setItem("islogin",true)
							sessionStorage.setItem("user",this.user)
							this.islogins=true
							this.z_user=sessionStorage["user"]
							console.log(this.islogins)
						})
					}
				}else{
					let phones=/^1[34578]\d{9}$/
					if(!phones.test(this.phone)){
						this.err="手机号格式错误!"
					}else if(!(this.yzm=="888888")){
						this.err="验证码错误！"
					}else{  
						this.err=""	
						let p=this.phone
						let postData=this.$qs.stringify({
							phone:p
						})
						this.$axios({
							method:"post",
							url:"http://127.0.0.1:80/phone",
							data:postData
						}).then((res)=>{
							this.$toast(res.data.msg)
							sessionStorage.setItem("islogin",true)
							sessionStorage.setItem("user",this.phone)
							this.islogins=true
							this.z_user=sessionStorage["user"]
							console.log(this.islogins)
						})
					}
				}
			},
			dl(n){
				if(n==1){
					this.f1=false,this.f2=true
				}else if(n==2){
					this.f1=true,this.f2=false
				}
			},
			wj(){
				this.$toast("暂不支持找回密码，我会努力完善的")
			},
			tuichu(){
				sessionStorage.setItem("islogin",false)
				this.islogins=false
				console.log(this.islogins)
				location.reload() 
			},
			islogin(){
				if(sessionStorage["islogin"]=="true"){
					this.islogins=true
				}else{
					this.islogins=false
				}
				this.z_user=sessionStorage["user"]
			},
			back(){
				history.go(-1)
			}
		},
		created(){	
			this.islogin()
			console.log(this.islogins)
		}
	}
</script>

<style>
	/*头部*/
	.indiv .header{
		width: 100%;
		height: 50px;
		background: #f5f5f5;
		position: fixed;
		top: 0;
	}
	.indiv .header>div{
		height: 100%;
	}
	.indiv .header>div:nth-child(2){
		line-height: 50px;
		text-align: center;
		font-size: 14px;;
	}
	.indiv .header>div:last-child>a{
		line-height: 50px;
		transform: scale(1.3);
		float: right;
		color: #333;
		margin-right: 20px;
	}
	.indiv .mui-icon-back{
		margin: 10px;
		font-size: 28px;
		color: #757575;
	}
	/*内容*/
	.indiv>.login>.content{
		margin-top: 50px;
	}
	.indiv>.login>.content>form{
		padding-top: 10px;
	}
	.indiv>.login>.content>form>input{
		margin: 0;
		font-size: 14px;
		color: #333;
		height: 50px;
		border: 1px solid #f1f1f1;
	}
	.indiv>.login ::-webkit-input-placeholder {
	  color: #c1c1c1;
	}
	.indiv>.login>.content>.select{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		padding: 0 10px;
	}
	.indiv>.login>.content>#login-cw{
		padding: 10px;
		color: red;
		margin: 20px 0;
	}
	.indiv>.login>.content>.btn{
		margin: 0 10px;
	}
	.indiv>.login>.content>.btn>input{
		width: 100%;
		height: 40px;
		background-color: #d70057;
		color: white;
	}
	.indiv>.login>.content>.mian{
		margin: 20px 10px;
		font-size: 14px;
	}
	.indiv>.login>.content>.wang{
		margin: 0 15px;
		display: flex;
		justify-content: space-between;
	}
	.indiv>.login>.content>.wang>a{
		font-size: 14px;
		color: #666;
	}
	.indiv>.login>.content>.qita{
		margin: 100px 50px;
		display: flex;
		justify-content: space-around;
	}
	.indiv>.login>.content>.qita>li{
		height:50px;
	}
	.indiv>.login>.content>.qita img{
		width: 25px;
		display: inline-block;
	}
	.indiv>.login>.content>.qita span{
		font-size: 16px;
		display: inline-block;
		color: #666;
		margin-top: 10px;
	}
	.indiv>.login>.content>.shouji>input:nth-child(2){
		width: 70%;
	}
	.indiv>.login>.content>.shouji{
		position: relative;
	}
	.indiv>.login>.content>.shouji>span{
		background: #ffffff;
		display: inline-block;
		width: 30%;
		height: 50px;
		position: absolute;
		top: 60px;
		font-size: 14px;
		right: 0;
		border: 1px solid #f1f1f1;
		line-height: 50px;
		text-align: center;
		color: red;
	}
	/*个人信息*/
	.indiv>.info>.content>.name{
		background: url(../img/login/info/memberbg.jpg);
		width: 100%;
		height: 100px;
		margin-top: 50px;
	}
	.indiv>.info>.content>.name>.mui-row>.mui-col-xs-3>div{
		border-radius: 50%;
		background: #fff;
		width: 60px;
		height: 60px;
		margin-top: 20px;
		margin-left: 30px;
	}
	.indiv>.info>.content>.name>.mui-row>.mui-col-xs-3>div>img{
		width: 100%;
	}
	.indiv>.info>.content>.name>.mui-row>.mui-col-xs-9>span{
		line-height: 100px;
		margin-left: 20px;
		font-size: 16px;
		font-weight: 600;
		color: white;
	}
	.indiv>.info>.content>.dingdan{
		background: white;
		margin-top: 10px;
		width: 100%;
	}
	.indiv>.info>.content>.dingdan>.my{
		padding: 10px 20px;
		font-size: 14px;
		color: #757575;
		border-bottom: 1px solid #e1e1e1;
	}
	.indiv>.info>.content>.dingdan>.my>span{
		float: right;
		font-size: 18px;
	}
	.indiv>.info>.content>.dingdan>.xinxi{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: space-around;
	}
	.indiv>.info>.content>.dingdan>.xinxi>div>p{
		text-align: center;
	}
	.indiv>.info>.content>.dingdan>.xinxi>div>p:nth-child(1){
		margin-top: 20px;
		font-size: 30px;
		width: 100%;
	}
	.indiv>.info>.content>.dingdan>.xinxi>div>p:nth-child(2){
		font-size: 14px;
	}
	.indiv>.info>.content>.gongneng{
		margin-top: 10px;
		width: 100%;
		background: white;
		margin-top: 10px;
	}
	.indiv>.info>.content>.gongneng>a{
		display: inline-block;
		width: 25%;
		height: 100px;
		text-align: center;
		padding: 25px 0;
	}
	.indiv>.info>.content>.gongneng>a:nth-child(1),.indiv>.info>.content>.gongneng>a:nth-child(2),.indiv>.info>.content>.gongneng>a:nth-child(3),.indiv>.info>.content>.gongneng>a:nth-child(4){
		border-bottom: 1px solid #e1e1e1;
	}
	.indiv>.info>.content>.gongneng>a>p{
		margin: 0;
		font-size: 12px;
		color: #333;
	}
	.indiv>.info>.content>.gongneng>a>p>img{
		width: 25px;
	}
	.indiv>.info>.content>.tuichu{
		margin: 20px 10px;
	}
	.indiv>.info>.content>.tuichu>input{
		background: #d70057;
		color: white;
		width: 100%;
		height: 40px;
	}
	
</style>

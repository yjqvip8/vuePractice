<template>
	<div class="register">
		<!--头部-->
		<div class="header mui-row">
			<div class="mui-col-xs-3"><a @click="back" class="mui-icon mui-icon-back"></a></div>
			<div class="mui-col-xs-6"><span>注册</span></div>
			<div class="mui-col-xs-3"><a href="/#/home" class="mui-icon mui-icon-home"></a></div>
		</div>
		<div class="content">
			<div class="text">
				<input type="text" placeholder="请输入十一位手机号" v-model="phone">
				<input type="text" placeholder="请输入短信验证码" v-model="yzm">
				<input type="text" placeholder="请输入6-16位用户名" v-model="user">
				<input type="password" placeholder="请输入4-16位数的密码" v-model="upwd">
				<input type="password" placeholder="请再次输入密码" v-model="upwdd">
				<span @click="yzms">发送验证码</span>
			</div>
			<p class="err">{{err}}</p>
			<p class="btn"><input type="button" value="注册" @click="reg"></p>
			<p class="sm">*点击注册代表同意<a href="#" @click="sm">《好乐买软件隐私声明》</a></p>
			<p class="yy"><a href="/#/login">已有账号？去登录</a></p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone:"",
				yzm:"",
				err:"",
				upwd:"",
				user:"",
				upwdd:""
			};
		},
		methods:{
			sm(){
				this.$toast("私人练习，娱乐而已")
			},
			yzms(){
				this.$toast("验证码：888888")
			},
			back(){
				history.go(-1)
			},
			reg(){
				let phones=/^1[34578]\d{9}$/
				let upwds=/\w{4,16}/
				let users=/\w{6,16}/
				if(!phones.test(this.phone)){
					this.err="手机号格式错误！"
				}else if(!(this.yzm==888888)){
					this.err="验证码错误！"
				}else if(!users.test(this.user)){
					this.err="用户名格式错误！"
				}else if(!upwds.test(this.upwd)){  
					this.err="密码格式错误！"
				}else if(!(this.upwd==this.upwdd)){
					this.err="两次密码必须相同"
				}else{
					this.err=""
					let ph=this.phone
					let up=this.upwd
					let us=this.user
					let postData=this.$qs.stringify({
						phone:ph,
						upwd:up,
						user:us
					})
					this.$axios({
						method:"post",
						url:"http://127.0.0.1:80/register",
						data:postData
					}).then((res)=>{
						this.$toast(res.data.msg)
						this.$router.push("/login")	
					})
				}
			}
		}
	}
</script>

<style>
	/*头部*/
	.register>.header{
		width: 100%;
		height: 50px;
		background: #f5f5f5;
		position: fixed;
		top: 0;
	}
	.register>.header>div{
		height: 100%;
	}
	.register>.header>div:nth-child(2){
		line-height: 50px;
		text-align: center;
	}
	.register>.header>div:last-child>a{
		line-height: 50px;
		transform: scale(1.3);
		float: right;
		color: #333;
		margin-right: 20px;
	}
	.register .mui-icon-back{
		margin: 10px;
		font-size: 28px;
		color: #757575;
	}
	/*内容*/
	.register>.content{
		margin-top: 50px;
	}
	.register>.content>.text{
		top: 10px;
		position: relative;
	}
	.register>.content>.text>input{
		width: 100%;
		font-size: 14px;
		margin: 0;
		border: 1px solid #f1f1f1;
		height: 50px;
	}
	.register>.content>.text ::-webkit-input-placeholder {
		color: #c1c1c1;
	  }
	.register>.content>.text>input:nth-child(2){
		 width: 70%;
	}
	.register>.content>.text>span{
		background: #ffffff;
		display: inline-block;
		width: 30%;
		height: 50px;
		position: absolute;
		top: 50px;
		font-size: 14px;
		right: 0;
		border: 1px solid #f1f1f1;
		line-height: 50px;
		text-align: center;
		color: red;
	}
	.register>.content>.btn{
		margin: 20px 10px;
	}
	.register>.content>.btn>input{
		width: 100%;
		background: #d70057;
		color: white;
		height: 40px;
	}
	.register>.content>.sm{
		margin: 0 10px;
		font-size: 12px;
	}
	.register>.content>.sm>a{
		color: red;
	}
	.register>.content>.err{
		margin: 20px 20px;
		color: red;
	}
	.register>.content>.yy{
		margin: 10px 15px;
	}
	.register>.content>.yy>a{
		float: right;
		color: #316ac0;
	}
</style>

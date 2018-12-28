<template>
  <div>
	
	<form action="/register" method="post">
		<input type="text" ref="aaa" placeholder="手机号" name="username" class="user" @blur="handleBlur1()"><br>
		<p class="one"></p>
		<input type="text" placeholder="邮箱" name="email" class="box" ><br>
		<p class="two"></p>
		<input type="password" placeholder="密码" name="password" class="pass" @blur="handleBlur2()"><br>
		<p class="three"></p>
		<button :disabled="dis" @click="handleClick()">注册</button>
	</form>
	<router-view></router-view>    
  	
  </div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
			   users:false,
			   dis:true
			}
		},
		methods:{
			handleBlur1(){
					var username = /1[3-9]\d{9}/;
					var user = document.querySelector(".user").value;
					var one = document.querySelector('.one')
					console.log(user)
					// console.log(this.$refs.aaa.value)
					if(username.test(user)){
						one.innerHTML='手机号可用'
						axios({
							url:'/register/check',
							method:'post',
							data:{
								username:user
							}
						}).then(res=>{
								if(res.ok===1){
								  one.innerHTML('✔')
								  this.users = true
								}else{
									one.innerHTML ='手机号已被注册'

								}
							})
					}else{
						one.innerHTML='手机号不可用'
					}
				},
				handleBlur2(){
					var password = /\S{6,20}/;
					var pass = document.querySelector('.pass').value;
					var three = document.querySelector('.three');

					if(password.test(pass)){
						three.innerHTML='密码格式正确'
						this.dis=false

						
					}else{
						three.innerHTML='密码格式错误'
						this.dis="aaa"
					}
				},
				handleClick(){
				var user = document.querySelector(".user").value;
				var email = document.querySelector('.box').value;
				var pass = document.querySelector('.pass').value;
				if(this.users===false){
					return
				}else{
						axios({
							url:'/register/check',
							method:'post',
							data:{
								username:user,
								email:email,
								password:pass
							}
						})
					}
				}
			}
			

			}
			
		
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	input{
		outline: none;
		border: 1px solid #ccc;
		width: 300px;
		height: 40px;
		margin-left: 20px;
		margin-top: 25px;
		padding-left: 20px;
		border-radius: 5px;
	}
	input:nth-of-type(1){
		margin-top: 60px
	}
	button{
		width: 320px;
		height: 50px;
		margin-left: 20px;
		margin-top: 20px;
		background-color: #000;
		color: #fff;
		outline: none;
		text-shadow:1px 1px 1px #333;
		border: none;
	}

	p{	
		margin-top: 5px;
		font-size: 14px;
		color:red;
		margin-left: 20px
	}
</style>

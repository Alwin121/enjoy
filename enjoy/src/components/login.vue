<template>
  <div>
	
		<input type="text" placeholder="手机号" name="username" class="user"><br>
		<input type="password" placeholder="密码" name="password" class="pass"><br>
		<button :disabled="dis" @click="handleClick()">登录</button>
	<router-view></router-view>    
  	
  </div>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				dis:false
			 }
			},
			methods:{
				handleClick(){
					var user = document.querySelector('.user').value;
					var pass = document.querySelector('.pass').value;
					if(user === '' || pass === ''){
						alter('请输入手机号或密码')
						this.dis=true
					}else{
						axios({
							url:'/login/check',
							method:'post',
							data:{
								username:user,
								password:pass
							}
						}).then(res=>{
							if(res.ok === 0){
								alert('手机号与密码不匹配')
								this.dis=true
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
		margin-top: 20px;
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
		text-shadow:1px 1px 1px #333;
		border: none;
	}
</style>

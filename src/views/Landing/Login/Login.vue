<template>
	<div class="login-container">
		<form>
			<p class="auth-title">Login</p>
			<div class="form-div">
				<label>Email Address</label>
				<input type="text" name="" v-model="formData.email">
			</div>
			<div class="form-div">
				<label>Password</label>
				<input type="password" name="" v-model="formData.password">
			</div>
			<div class="form-div btn-container txt-right">
				<button class="btn btn-submit" v-on:click="submitLogin( formData )">Submit</button>
				<p class="txt-center txt-underline">
					<router-link tag="a" :to="{ name : 'Register' }">
						Don't have an account? Register now!
					</router-link>
				</p>
				
			</div>
		</form>
  </div>
  
</template>

<script>
	import Login from './function.vue'
	export default Login
</script>

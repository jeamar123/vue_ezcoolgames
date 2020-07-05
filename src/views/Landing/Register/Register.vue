<template>
	<div class="signup-container">
		<form>
			<p class="auth-title">Register</p>
			<div class="form-div">
				<label>User Type</label>
				<select v-model="formData.user_type">
					<option value="customer">Customer</option>
					<option value="tenant">Tenant</option>
				</select>
			</div>
			<div class="form-div">
				<label>Full Name</label>
				<input type="text" name="" v-model="formData.name">
			</div>
			<div class="form-div">
				<label>Email Address</label>
				<input type="text" name="" v-model="formData.email">
			</div>
			<div class="form-div">
				<label>Mobile Number</label>
				<input type="text" name="" v-model="formData.mobile">
			</div>
			<div class="form-div">
				<label>Password</label>
				<input type="password" name="" v-model="formData.password">
			</div>
			<div class="form-div">
				<label>Confirm Password</label>
				<input type="password" name="" v-model="formData.confirm_password">
			</div>
			<div class="form-div btn-container txt-right">
				<button class="btn btn-submit" v-on:click="submitRegister( formData )">Submit</button>

				<p class="txt-center txt-underline">
					<router-link tag="a" :to="{ name : 'Login' }">
						Already have an account? Login now!
					</router-link>
				</p>
			</div>
		</form>
  </div>
  
</template>

<script>
	import Register from './function.vue'
	export default Register
</script>

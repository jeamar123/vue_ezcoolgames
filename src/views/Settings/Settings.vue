<template>
	<div class="settings-container" >
		<p class="section-title">Settings</p>

		<div class="profile-update-container">
			<p class="box-title">Update your profile</p>
			<form>
				<div class="form-div">
					<label>Fullname</label>
					<input type="text">
				</div>
				<div class="form-div">
					<label>Email</label>
					<input type="text">
				</div>
				<div class="form-div">
					<label>Mobile Number<span>(Optional)</span></label>
					<input type="text">
				</div>
				<!-- <div class="form-div">
					<label>Referral Code<span>(Optional)</span></label>
					<input type="text">
				</div> -->
				<div class="btn-container">
					<button class="btn-update">Update</button>
				</div>
			</form>
		</div>

		<div class="referral-details-container">
			<p>Invite friends to join! You can get 20 points after they register and another 10 points when they get their first 100 points.</p>
			<label>Code: RC3xYz90</label>
		</div>

		<div class="password-update-container">
			<p class="box-title">Change your Password</p>
			<form>
				<div class="form-div">
					<label>New Password</label>
					<input type="text">
				</div>
				<div class="form-div">
					<label>Confirm Password</label>
					<input type="text">
				</div>
				<div class="btn-container">
					<button class="btn-update">Update</button>
				</div>
			</form>
		</div>
		
  </div>
  
</template>

<script>
	import Settings from './function.vue'
	export default Settings
</script>

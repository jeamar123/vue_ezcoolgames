<template>
	<div class="landing-page-container">
		<div class="header-container">
			<div class="navbar">
				<div class="logo-container">
					<label>EZC</label>
				</div>
				<ul class="navbar-right">
					<li class="nav-item"><a href="/">Home</a></li>
					<li class="nav-item"><a href="#">Leaderboards</a></li>
					<li class="nav-item"><a href="#">News</a></li>
					<li class="nav-item"><a href="#">Blog</a></li>
					<li class="nav-item"><a href="#">About</a></li>
					<li class="nav-item"><a href="#">FAQ</a></li>
					<li class="nav-item"><a href="#">Contact</a></li>
					<li class="nav-item sign-in-nav">
						<router-link tag="a" :to="{ name : 'Login' }">
							Play Now
						</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div class="body-content">
			<router-view></router-view>
		</div>
	</div>
  
</template>

<script>
	import LandingContainer from './function.vue'
	export default LandingContainer
</script>

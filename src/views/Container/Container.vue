<template>
	<div id="main-content" v-bind:class="{'isSideMenuOpen' : isSideMenuOpen}">
		<section class="block-container">
		  <div class="navbar">
				<ul class="navbar-main">
					<li>
						<a v-on:click="toggleSideMenu()">
							<!-- <i class="fa fa-bars"></i> -->
							<span class="oi" data-glyph="menu" title="menu" aria-hidden="true"></span>
						</a>
					</li>
				</ul>

		  	<ul class="navbar-right">
					<li>
						<a v-on:click="logout()">
							<i class="fa fa-power-off"></i> 
						</a>
					</li>
		  	</ul>
		  </div>
		  <div class="dashboard-container">
			  <div class="side-menu-content">
			  	<div class="side-menu-container">
			  		<div class="top-logo-container">
			  			<div class="logo-icon">
								<span>{{ isSideMenuOpen ? 'EZ COOL GAMES' : 'EZC' }}</span>
							</div>
			  		</div>
			  		<div class="profile-container">
			  			<div class="img-wrapper">
			  				<img :src="'../assets/img/avatar2.png'">
			  				<!-- <img :src="user_details.photo"> -->
			  			</div>
			  		</div>

			  		<div class="menu-links-container">
							<router-link tag="a" :to="{ name : 'Home' }">
								<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'Home'}">
									<div class="item-icon">
										<span class="oi" data-glyph="layers" title="layers" aria-hidden="true"></span>
									</div>
									<div class="item-name">Dashboard</div>
								</div>
							</router-link>
							
							<router-link tag="a" :to="{ name : 'Games' }">
								<!--  v-on:click="goToPage('Games')" -->
								<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'Games'}">
									<div class="item-icon">
										<i class="fa fa-gamepad"></i>
									</div>
									<div class="item-name">Games</div>
								</div>
							</router-link>

							<router-link tag="a" :to="{ name : 'Convert' }">
								<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'Convert'}">
									<div class="item-icon">
										<i class="fa fa-gift"></i>
									</div>
									<div class="item-name">Convert Points</div>
								</div>
							</router-link>

							<router-link tag="a" :to="{ name : 'Game Points' }">
								<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'Game Points'}">
									<div class="item-icon">
										<i class="fa fa-star-o"></i>
									</div>
									<div class="item-name">Game Points</div>
								</div>
							</router-link>

							<router-link tag="a" :to="{ name : 'Settings' }">
								<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'Settings'}">
									<div class="item-icon">
										<span class="oi" data-glyph="cog" title="cog" aria-hidden="true"></span>
									</div>
									<div class="item-name">Settings</div>
								</div>
							</router-link>
			  		</div>

			  	</div>
			  </div>

			  <div class="child-content">
			  	<router-view></router-view>
			  </div>
		  </div>
	  </section>

	  <transition name="fade">		
		  <div v-if="showLoader" class="main-loader">
				<div class="circle-loader">
					<div class="preloader-container">
						<div class="preloader-wrapper big active">
					    <div class="spinner-layer spinner-blue-only">
					      <div class="circle-clipper left">
					        <div class="circle"></div>
					      </div><div class="gap-patch">
					        <div class="circle"></div>
					      </div><div class="circle-clipper right">
					        <div class="circle"></div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</transition>
  </div>
  
</template>

<script>
	import Container from './function.vue'
	export default Container
</script>

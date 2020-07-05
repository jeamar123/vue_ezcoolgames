<template>
	<div class="home-container" >
		<p class="section-title">Your Dashboard</p>
		
		<div class="progress-wrapper">
			
			<div class="item-wrapper">
				<div class="row-div">
					<div class="img-wrapper">
						<img v-if="false" src="" alt="">
						<i class="fa fa-inbox"></i>
					</div>
					<div class="value">
						<span>99</span>
					</div>
				</div>
				<div class="row-div w-border-top">
					<p>Points</p>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="row-div">
					<div class="img-wrapper">
						<img v-if="false" src="" alt="">
						<i class="fa fa-inbox"></i>
					</div>
					<div class="value">
						<span>$</span>
						<span>99.00</span>
					</div>
				</div>
				<div class="row-div w-border-top">
					<p>Balance</p>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="row-div">
					<div class="img-wrapper">
						<img v-if="false" src="" alt="">
						<i class="fa fa-inbox"></i>
					</div>
					<div class="value">
						<span>$</span>
						<span>99.00</span>
					</div>
				</div>
				<div class="row-div w-border-top">
					<p>Total Earnings</p>
				</div>
			</div>
			<div class="item-wrapper">
				<div class="row-div">
					<div class="img-wrapper">
						<img v-if="false" src="" alt="">
						<i class="fa fa-inbox"></i>
					</div>
					<div class="value">
						<span>99</span>
					</div>
				</div>
				<div class="row-div w-border-top">
					<p>Referalls</p>
				</div>
			</div>
		</div>

		<p class="section-title">Your Activity</p>

		<div class="activity-wrapper">
			<div class="item-wrapper">
				<p>You Played <b>Rock, Paper, Scissors</b> and lost.</p>
				<p class="time-date">2 hours ago</p>
			</div>
			<div class="item-wrapper">
				<p>You Played <b>Rock, Paper, Scissors</b> and Won 3 points.</p>
				<p class="time-date">Yesterday 12:13pm</p>
			</div>
			<div class="item-wrapper">
				<p>You Played <b>Rock, Paper, Scissors</b> and Won 3 points.</p>
				<p class="time-date">12/12/20 2:00pm</p>
			</div>
		</div>

  </div>
  
</template>

<script>
	import Home from './function.vue'
	export default Home
</script>

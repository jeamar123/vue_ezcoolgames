<template>
	<div class="games-container">
		
		<div v-if="isGameListShow == true" class="games-grid">

			<div v-for="list in [1]" :key="list.index" class="game-box">
				<div class="img-wrapper">
					<img :src="'../assets/img/black-game-controller.png'">
				</div>
				<div class="game-info">
					<div class="game-title">Rock, Paper, Scissors</div>
					<div class="game-description">
						<p>A hand game usually played between two people, in which each player select one of three shapes with an outstretched hand. These shapes are "rock", "paper", and "scissors".</p>
					</div>

					<div class="btn-container">
						<button class="btn" v-on:click="showGame(1)">
							Play
							<i class="fa fa-play"></i>
						</button>
					</div>
				</div>
			</div>

		</div>

		<div v-if="isGameSelected" class="game-wrapper">
			<RockPaperScissors :closeGame="closeGames"/>
		</div>

  </div>
  
</template>

<script>
	import Games from './function.vue'
	export default Games
</script>

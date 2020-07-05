<template>
	<div class="rock-paper-scissors">

		<div v-if="!isStartGame" class="instructions-wrapper">
			<a class="close-icon" v-on:click="closeGame()">
				<i class="fa fa-times"></i>
			</a>
			<div class="game-title">
				<p>Rock, Paper, Scissors</p>
				<i class="fa fa-gamepad"></i>
			</div>
			<div class="game-instructions">
				<p><b>Instructions</b></p>
				<p>The game is played where players select hand signals that will represent the elements of the game; rock, paper and scissors. 
				<p>You should select a pick within 5 seconds or you will lose. Get 3 points to win the game. </p>
				
				<p>The outcome of the game is determined by 3 simple rules:</p>
				<ul>
					<li>Rock wins against scissors.</li>
          <li>Scissors win against paper.</li>
					<li>Paper wins against rock.</li>
				</ul>
				<p>Prize: <b>5 points</b> <i class="fa fa-check"></i></p>
				<div class="btn-container">
					<button class="btn-play" v-on:click="startGame()">Start Game</button>
					<!-- <button class="btn-play">VS</button> -->
				</div>
			</div>
		</div>

		<div v-if="isStartGame" class="game-box-wrapper">
			<a class="close-icon" v-on:click="closeGame(true)">
				<i class="fa fa-times"></i>
			</a>

			<div class="player-container">
				<p class="user-name">You</p>

				<div class="user-bg-box">
					<div class="selection-grid">
						<div class="col rock" v-bind:class="{'active' : userSelection == 'rock'}" v-on:click="userSelectOpt('rock')">
							Rock
						</div>
						<div class="col paper" v-bind:class="{'active' : userSelection == 'paper'}" v-on:click="userSelectOpt('paper')">
							Paper
						</div>
						<div class="col scissors" v-bind:class="{'active' : userSelection == 'scissors'}" v-on:click="userSelectOpt('scissors')">
							Scissors
						</div>
					</div>

					<div class="user-selected">
						<!-- <img v-if="userSelection == 'rock'" :src="'../assets/img/rock.png'">
						<img v-if="userSelection == 'paper'" :src="'../assets/img/paper.png'">
						<img v-if="userSelection == 'scissors'" :src="'../assets/img/scissors.png'"> -->
						<i v-if="userSelection == 'rock' || userJumbleAnimation == 'rock'" class="fa fa-hand-rock-o"></i>
						<i v-if="userSelection == 'paper' || userJumbleAnimation == 'paper'" class="fa fa-hand-paper-o"></i>
						<i v-if="userSelection == 'scissors' || userJumbleAnimation == 'scissors'" class="fa fa-hand-peace-o"></i>
					</div>
					<!-- <Loading v-if="userSelection == null"></Loading> -->
				</div>
				
				<p class="status-text">
					{{ userStatusText }}
					<!-- You Picked Rock -->
				</p>

				<div class="score">
					<div class="dot">
						<i class="fa" v-bind:class="{'fa-circle-o' : userScore < 1, 'fa-check-circle' : userScore > 0 }"></i>
					</div>
					<div class="dot">
						<i class="fa" v-bind:class="{'fa-circle-o' : userScore < 2, 'fa-check-circle' : userScore > 1 }"></i>
					</div>
					<div class="dot">
						<i class="fa" v-bind:class="{'fa-circle-o' : userScore < 3, 'fa-check-circle' : userScore > 2 }"></i>
					</div>
				</div>
			</div>

			<div class="vs-separator">
				<div class="game-title">
					<p>Rock, Paper, Scissors</p>
					<i class="fa fa-gamepad"></i>
				</div>
				
				<div class="round-status">Round {{ roundCtr }}</div>
				<div class="vs">VS</div>

				<div class="game-status">
					<button v-if="isGameDone" class="btn-play" v-on:click="resetGame()">
						Play Again
					</button>
					<div v-if="gameStatus == 0">
						{{ isCountdown ? countdownCtr : 'Waiting..' }}
					</div>
					<div v-if="gameStatus == 1" class="win">You Win!</div>
					<div v-if="gameStatus == 2" class="lose">You Lose!</div>
					<div v-if="gameStatus == 3" class="tie">It's a Tie!</div>
					<div v-if="gameStatus == 4" class="lose">You did not pick. You lose!</div>
				</div>
					<!-- You Lose! -->
					<!-- It's a Tie! -->
			</div>

			<div class="player-container">
				<p class="user-name">Your Opponent</p>

				<div class="user-bg-box">
					<div class="selection-box">
						{{ isShowOpponentPick == false ? 'Loading..' : opponentSelection }}
					</div>
					<div class="user-selected">

						<i v-if="(opponentSelection == 'rock' && isShowOpponentPick == true) || (opponentJumbleAnimation == 'rock' && isShowOpponentPick == false)" class="fa fa-hand-rock-o"></i>
						<i v-if="(opponentSelection == 'paper' && isShowOpponentPick == true) || (opponentJumbleAnimation == 'paper' && isShowOpponentPick == false)" class="fa fa-hand-paper-o"></i>
						<i v-if="(opponentSelection == 'scissors' && isShowOpponentPick == true) || (opponentJumbleAnimation == 'scissors' && isShowOpponentPick == false)" class="fa fa-hand-peace-o"></i>
						<i v-if="isShowOpponentPick == false && opponentJumbleAnimation == null" class="fa fa-clock-o"></i>
					</div>
				</div>

				<p class="status-text">
					{{ opponentStatusText }}
					<!-- Your Opponent made a Pick -->
				</p>

				<div class="score">
					<div class="dot">
						<i class="fa" v-bind:class="{'fa-circle-o' : opponentScore < 1, 'fa-check-circle' : opponentScore > 0 }"></i>
					</div>
					<div class="dot">
						<i class="fa" v-bind:class="{'fa-circle-o' : opponentScore < 2, 'fa-check-circle' : opponentScore > 1 }"></i>
					</div>
					<div class="dot">
						<i class="fa" v-bind:class="{'fa-circle-o' : opponentScore < 3, 'fa-check-circle' : opponentScore > 2 }"></i>
					</div>
				</div>
			</div>
		</div>

  </div>
</template>

<script>
	import RockPaperScissors from './function.vue'
	export default RockPaperScissors
</script>

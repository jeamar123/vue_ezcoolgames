<script>
	// import axios from 'axios'
	import _ from 'lodash';
	import { Loading } from '../Loading';

	var RockPaperScissors = {
		components: {
			Loading,
		},
		props: {
			closeGame: Function,
		},
		data() {
			return {
				isStartGame: false,
				isDisablePicking: true,
				roundCtr: 1,

				userJumbleAnimation: 'rock',
				userSelection: null,
				userStatusText: 'Pick One',
				userScore: 0,

				opponentJumbleAnimation: 'rock',
				opponentSelection: null,
				opponentStatusText: 'Opponent is Picking..',
				opponentScore: 0,
				isShowOpponentPick: false,

				gameStatus: 0,
				isCountdown: true,
				countdownCtr: 3,
				isOpponentComputer: true,
				isGameDone: false,

				userLoopInterval: null,
				gameCountDown: null,
			}
		},
		created() {
			
		},
		methods: {
			checkOpponent(){
				if(this.isOpponentComputer){
					this.computerPick();
				}
			},
			userSelectOpt(opt){
				if(this.isDisablePicking == false){
					clearInterval(this.userLoopInterval);
					clearInterval(this.gameCountDown);
					this.userJumbleAnimation = null;
					this.userSelection = opt;
					this.isShowOpponentPick = true;
					this.isDisablePicking = true;
					this.userStatusText = `You picked ${opt}`;
					this.getWinner();
				}
			},
			opponentSelectOpt(opt){
				this.opponentSelection = opt;
				this.opponentStatusText = `Opponent made a pick`;
				clearInterval(this.opponentLoopInterval);
				this.opponentJumbleAnimation = null;
			},
			computerPick(){
				// setTimeout(() => {
					let list = ['rock','paper','scissors'];
					let pick = _.sample(list);
					this.opponentSelectOpt(pick);
				// }, 1500);
			},
			getWinner(){
				if(this.userSelection == null){
					this.opponentScore += 1;
					this.gameStatus = 4;
				}
				if(this.userSelection == 'rock'){
					if( this.opponentSelection == 'rock' ){
						this.gameStatus = 3;
					}
					if(this.opponentSelection == 'paper'){
						this.gameStatus = 2;
						this.opponentScore += 1;
					}
					if(this.opponentSelection == 'scissors'){
						this.gameStatus = 1;
						this.userScore += 1;
					}
				}
				if(this.userSelection == 'paper'){
					if( this.opponentSelection == 'rock' ){
						this.gameStatus = 1;
						this.userScore += 1;
					}
					if(this.opponentSelection == 'paper'){
						this.gameStatus = 3;
					}
					if(this.opponentSelection == 'scissors'){
						this.gameStatus = 2;
						this.opponentScore += 1;
					}
				}
				if(this.userSelection == 'scissors'){
					if( this.opponentSelection == 'rock' ){
						this.gameStatus = 2;
						this.opponentScore += 1;
					}
					if(this.opponentSelection == 'paper'){
						this.gameStatus = 1;
						this.userScore += 1;
					}
					if(this.opponentSelection == 'scissors'){
						this.gameStatus = 3;
					}
				}
				
				if( this.userScore == 3 || this.opponentScore == 3 ){
					this.isGameDone = true;
					this.showResult(this.userScore, this.opponentScore);
				}else{
					setTimeout(() => {
						this.roundCtr += 1;
						this.resetPicks();
					}, 2000);
				}
			},
			resetPicks(){
				this.userSelection = null;
				this.userStatusText = 'Pick One';

				this.opponentSelection = null;
				this.opponentStatusText = 'Opponent is Picking..';
				this.isShowOpponentPick = false;

				this.gameStatus = 0;
				this.isCountdown = false;
				this.countdownCtr = 1;
				this.isDisablePicking = false;

				this.checkOpponent();
				this.jumbleChoices();
				this.userCountdown();
			},
			resetGame(){
				this.roundCtr = 1;
				this.isDisablePicking = true;
				this.userSelection = null;
				this.userStatusText = 'Pick One';
				this.userScore = 0;
				this.opponentSelection = null;
				this.opponentStatusText = 'Opponent is Picking..';
				this.opponentScore = 0;
				this.gameStatus = 0;
				this.isCountdown = false;
				this.countdownCtr = 1;
				this.isOpponentComputer = true;
				this.isGameDone = false;
				this.isStartGame = false;
				this.checkOpponent();
				this.jumbleChoices();
				this.userCountdown();
			},
			showResult(user, opponent){
				let val	=	{
					title: null,
					text: null,
					type: null,
				}

				if(user == 3){
					val	=	{
						title: 'Nice!',
						text: 'Congratulations! You won 3 points.',
						type: 'success',
					}
				}else if(opponent == 3){
					val	=	{
						title: 'Ooops!',
						text: 'Sorry! Better luck next time.',
						type: 'error',
					}
				}
				this.$swal({
					title: val.title,
					text: val.text,
					icon: val.type,
					// confirmButtonColor: '#25306c',
					confirmButtonText: 'Confirm',
					allowOutsideClick: true,
				}).then((result) => {
					if (result) {
						this.closeGame();
					}
				});
			},
			startGame(){
				this.isStartGame = true;

				let interval = setInterval(() => {
					this.countdownCtr -= 1;
					console.log(this.countdownCtr);
					if(this.countdownCtr == 0){
						this.countdownCtr = 'GO';
						clearInterval(interval);
						setTimeout(() => {
							this.countdownCtr = 0;
							this.isDisablePicking = false;
							this.checkOpponent();
							this.jumbleChoices();
							this.userCountdown();
						}, 500);
					}
				}, 1000);
			},
			jumbleChoices(){
				let ctr = 0;
				let ctr2 = 0;
				this.userLoopInterval = setInterval(() => {
					let arr = ['rock','paper','scissors'];
					if(this.userSelection == null){
						this.userJumbleAnimation = arr[ctr];
						ctr += 1;
					}
					if(ctr == 3){
						ctr = 0;
					}
				}, 100);
				this.opponentLoopInterval = setInterval(() => {
					let arr = ['rock','paper','scissors'];
					if(this.opponentSelection == null){
						this.opponentJumbleAnimation = arr[ctr2];
						ctr2 += 1;
					}
					if(ctr2 == 3){
						ctr2 = 0;
					}
				}, 100);
			},
			userCountdown(){
				this.countdownCtr = 1;
				this.isCountdown = true;
				let countCtr = 1;
				this.gameCountDown = setInterval(() => {
					this.countdownCtr += 1;
					countCtr += 1;
					console.log(countCtr);
					if(countCtr == 5){
						clearInterval(this.gameCountDown);
						// this.countdownCtr = 1;
						this.isCountdown = false;
						this.isShowOpponentPick = true;

						// if(this.userSelection == null){
						// 	this.$swal({
						// 		title: 'Confirm',
						// 		text: 'Are you sure you want to exit the game? Changes will not be saved.',
						// 		icon: 'warning',
						// 		confirmButtonText: 'Yes',
						// 		showCancelButton: true,
						// 		allowOutsideClick: true,
						// 	}).then((result) => {
						// 		if (result) {
						// 			this.isGameListShow = true;
						// 			this.isGameSelected = false;
						// 			this.isRockPaperScissorsShow = false;
						// 			this.$forceUpdate();
						// 		}
						// 	});
							
								// this.$swal('Oops!', 'Looks like you did not pick. You lose', 'error');
							this.countdownCtr = 'Looks like you did not pick. You lose.';
							this.getWinner();
						// }
					}
					
				}, 1200);
			},
    }
	}

	export default RockPaperScissors
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>
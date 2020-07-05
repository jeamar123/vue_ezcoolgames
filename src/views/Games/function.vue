<script>
	// import axios from 'axios'
	import { RockPaperScissors } from '../../common/components/RockPaperScissors';

	var Games = {
		components:{
			RockPaperScissors
		},
		data() {
			return {
				isGameListShow: true,
				isGameSelected: false,
				isRockPaperScissorsShow: false,
			}
		},
		created() {
		},
		methods: {
      showGame(game){
				this.isGameListShow = false;
				this.isGameSelected = true;
				this.isStartGame = false;
				if(game == 1){
					this.isRockPaperScissorsShow = true;
				}
				this.$forceUpdate();
			},
			closeGames(opt){
				if(opt == true){
					this.$swal({
						title: 'Confirm',
						text: 'Are you sure you want to exit the game? Changes will not be saved.',
						icon: 'warning',
						confirmButtonText: 'Yes',
						showCancelButton: true,
						allowOutsideClick: true,
					}).then((result) => {
						if (result) {
							this.isGameListShow = true;
							this.isGameSelected = false;
							this.isRockPaperScissorsShow = false;
							this.$forceUpdate();
						}
					});
				}else{
					this.isGameListShow = true;
					this.isGameSelected = false;
					this.isRockPaperScissorsShow = false;
					this.$forceUpdate();
				}
			},
    }
	}

	export default Games
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>
<script>
	// import axios from 'axios'

	var LandingHome = {
		data() {
			return {
				showLoader : false,
			}
		},
		created() {
			// this.getUserDetails();
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},1000);
      },
    }
	}

	export default LandingHome
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>
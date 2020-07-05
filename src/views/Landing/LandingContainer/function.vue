<script>
	// import axios from 'axios'

	var LandingContainer = {
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

	export default LandingContainer
</script>

<style lang="scss" scoped>
	@import "./././public/assets/css/navbar.scss";
	@import "./style.scss";
</style>
<script>
	import axios from 'axios'

	var Container = {
		data() {
			return {
				showLoader : false,
				user_details: {},
				isSideMenuOpen: false,
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
      goToPage( page_name ) {
				this.$router.push({ name: page_name });
      },
      logout(){
      	this.$swal({
				  title: 'Confirm',
				  text: "Are you sure you want to logout?",
				  icon: 'warning',
				  showCancelButton: true,
				  // confirmButtonColor: '#3085d6',
				  // cancelButtonColor: '#d33',
				}).then((res) => {
				  if (res.value) {
				    localStorage.user_id = null;
      			this.$router.push({ name: 'Login' });
				  }
				})
      },
      getUserDetails(){
      	axios.get( axios.defaults.serverUrl + '/api/user/' + localStorage.user_id )
					.then(res => {
						console.log( res );
						this.hideLoading();
						if( res.data.status ){
							this.user_details = res.data.user;
							if( this.user_details.activated == 0 ){
								if( this.$route.name != 'Settings' ){
									this.$router.push({ name: 'Settings' });
 								}
							}
						}else{
							this.$swal( 'Error!', res.data.message, 'error');
						}
					})
					.catch(err => {
						console.log( err );
						this.hideLoading();
					});
			},
			toggleSideMenu(){
				this.isSideMenuOpen = this.isSideMenuOpen ? false : true;
			},
    }
	}

	export default Container
</script>

<style lang="scss" scoped>
	@import "./././public/assets/css/navbar.scss";
	@import "./style.scss";
</style>
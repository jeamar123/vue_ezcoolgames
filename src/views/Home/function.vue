<script>
	// import axios from 'axios';
	// import moment from "moment";

	// import dateFilter from '@/components/custom-plugin/dateFilter';

	var Home = {
		components: {
			// dateFilter,
		},
		data() {
			return {
				showLoader : false,
			}
		},
		created() {
			
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

	export default Home
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>
<script>
	// import axios from 'axios';
	// import moment from "moment";

	// import dateFilter from '@/components/custom-plugin/dateFilter';

	var Withdraw = {
		components: {
			// dateFilter,
		},
		data() {
			return {
				showLoader : false,
				withdrawList: [
					{
						id: 'TGC1A4C',
					}
				],
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
			toggleOptionsDrop(list)	{
				console.log(list);
				list.isShowOptionsDrop = list.isShowOptionsDrop ? false : true;
				this.$forceUpdate();
			},
			closeAllOptionsDrop()	{
				this.withdrawList.map((value) => {
          value.isShowOptionsDrop = false;
				});
				this.$forceUpdate();
			},
    }
	}

	export default Withdraw
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>
<template>
	<div class="withdraw-container" >
		<p class="section-title">Withdrawal History</p>

		<div class="withdraw-table-container">
			<table class="tbl">
				<thead>
					<tr>
						<th>Trasaction ID</th>
						<th>Type</th>
						<th>Notes</th>
						<th>Date</th>
						<th>Status</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(list, index) in withdrawList" :key="list.index">
						<td>{{index}}GC87AB1</td>
						<td>Gcash</td>
						<td>Thanks</td>
						<td>12/12/20 2:00pm</td>
						<td>
							<div class="status pending">Pending</div>
							<div v-if="false" class="status approved">Approved</div>
							<div v-if="false" class="status rejected">Rejected</div>
						</td>
						<td>
							<div v-click-outside="closeAllOptionsDrop" class="options-drop-container">
								<i class="fa fa-cog" v-on:click="toggleOptionsDrop(list)"></i>
								<div v-if="list.isShowOptionsDrop == true" class="options-wrapper">
									<ul>
										<li><a href="#">Edit Transaction</a></li>
										<li><a href="#">Cancel</a></li>
									</ul>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
  </div>
  
</template>

<script>
	import Withdraw from './function.vue'
	export default Withdraw
</script>

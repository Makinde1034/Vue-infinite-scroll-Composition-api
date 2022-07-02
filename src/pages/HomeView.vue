<template>
	<div class="flex items-center justify-center px-5 w-full">
		<div class="max-w-screen-2xl mx-auto px:5 lg:px-20 pb-12">
			<nav class="text-center text-3xl py-6">Most <span class="text-purp font-bold">starred </span>github repos</nav>
			<div
				class="sm:grid-cols-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
			>
				<div v-for="(item, index) in data" :key="index">
					<RepoInfo
						:avartar="item.owner.avatar_url"
						:name="item.name"
						:description="item.description"
						:url="item.html_url"
						:stars="item.stargazers_count"   
						:forks="item.forks"
						:visibility="item.visibility"
					/>
				</div>
			</div>

			<div class="flex justify-center" v-if="loading === true">
				<div class="w-8 loading rounded-full b border-4 border-l-white h-8 border-purp">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import fetchDataAndPaginate from "../composables/dataPagination";
import RepoInfo from "../components/RepoInfo.vue";

export default {
	components: { RepoInfo },
	setup() {
		const { loading, getData, data, getNextDataSet } = fetchDataAndPaginate();

		return { loading, getData, data, getNextDataSet };
	},
};
</script>

<style scoped>
	.loading{
		animation: circ 0.5s linear infinite  ;
	}
	@keyframes circ {
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
</style>

<template>
	<div class="bg-white flex shadow-md p-5  rounded-md">
		<div class="h-52 mr-6 w-60">
			<img
				class="h-full rounded-xl w-full object-cover border border-grey"
				:src="avartar"
				alt=""
			/>
		</div>
		<div class="lg:w-3/6 w-full">
			<p class="mb-2 font-semibold text-lg">{{ name }}</p>
			
			<div class="flex mt-2 items-center mb-2">
				<p class="text-sm text-purp font-semibold mr-2">Stars :</p>
				<p class="text-sm ">{{ stars }}</p>
			</div>
            <div class="flex mt-2 items-center mb-2">
				<p class="text-sm text-purp font-semibold mr-2">Forks :</p>
				<p class="text-sm ">{{ forks }}</p>
			</div>
            <div class="flex mt-2 items-center mb-2">
				<p class="text-sm text-purp font-semibold mr-2">Visibility :</p>
				<p class="text-sm ">{{ visibility }}</p>
			</div>
			<a :href="url"
				><button class="bg-purp shadow w-32 py-2 text-white rounded-md mt-2">
					Visit
				</button></a
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		avartar: String,
		name: String,
		description: String,
		url: String,
		stars: Number,
        forks:Number,
        visibility:String
	},
    mounted(){
       console.log(this.url)
    }
};
</script>

<style></style>

<template>
	<div
		class="galleries"
		v-bind:id="galleryObj.id"
		v-bind:style="{
			backgroundImage: 'url(' + data.website.image.backgroundGalleries + ')',
		}"
	>
		<!-- art -->

		<div
			class="galleries-art align-center"
			v-for="art in galleryObj.arts"
			v-bind:key="art.id"
			v-bind:id="art.id"
			v-bind:class="art.classDisplay"
		>
			<img
				class="setting-shadow--motion"
				loading="auto"
				v-bind:src="art.img1"
				v-bind:srcset="art.img2"
			/>
			<div class="galleries-art-plaque setting-shadow--motion">
				<h5 class="align-center">{{ art.title }}</h5>
				<h6 class="align-center">{{ art.type }} - {{ art.size }}</h6>
			</div>
		</div>
		<!-- /art -->

		<!-- nav & buttons -->
		<div class="galleries-nav align-center">
			<router-link
				to="/galleries/paintings"
				class="button button-small button-base--ghost button-block"
				>Peintures</router-link
			>
			<router-link
				to="/galleries/watercolors"
				class="button button-small button-base--ghost button-block"
				>Aquarelles</router-link
			>
			<router-link
				to="/galleries/drawings"
				class="button button-small button-base--ghost button-block"
				>Dessins</router-link
			>
		</div>
		<button
			class="button button-white--ghost button-special galleries-arrowleft"
			v-on:click="smoothscrollLeft"
		>
			<icon-arrowleft class="icon"></icon-arrowleft>
		</button>
		<button
			class="button button-white--ghost button-special galleries-arrowright"
			v-on:click="smoothscrollRight"
		>
			<icon-arrowright class="icon"></icon-arrowright>
		</button>
		<!-- /nav & buttons -->
	</div>
</template>

<script>
	import IconArrowleft from "./IconArrowleft.vue";
	import IconArrowright from "./IconArrowright.vue";

	export default {
		data() {
			return {
				galleryObj: Object(),
			};
		},
		components: {
			IconArrowleft,
			IconArrowright,
		},
		methods: {
			refreshProject() {
				// to be able to use "this" page within the loop (bubble)
				const self = this;
				// loop (bubble)
				this.data.galleries.forEach((galleryTemp) => {
					if (galleryTemp.id === this.$route.params.galleryId) {
						self.galleryObj = galleryTemp;
					}
				});
			},
			smoothscrollRight() {
				document.getElementById(this.galleryObj.id).scrollBy({
					top: 0,
					left: 600,
					behavior: "smooth",
				});
			},
			smoothscrollLeft() {
				document.getElementById(this.galleryObj.id).scrollBy({
					top: 0,
					left: -600,
					behavior: "smooth",
				});
			},
		},
		created() {
			// do this at launch
			this.refreshProject();
		},
		watch: {
			// do this if something changes
			// $route: "refreshProject",
			$route() {
				this.refreshProject();
			},
		},
	};
</script>

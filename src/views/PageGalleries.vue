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
				v-bind:srcset="art.img2 + ' 2x'"
			/>
			<div class="galleries-art-plaque setting-shadow--motion">
				<h5 class="align-center">{{ art.title }}</h5>
				<h6 class="align-center">{{ art.type }} - {{ art.size }}</h6>
			</div>
		</div>
		<!-- /art -->

		<!-- arrows -->
		<button
			id="galleries-arrowleft"
			class="button button-white--ghost button-special galleries-arrows"
			v-on:click="smoothscrollLeft"
		>
			<icon-arrowleft class="icon"></icon-arrowleft>
		</button>
		<button
			id="galleries-arrowright"
			class="button button-white--ghost button-special galleries-arrows"
			v-on:click="smoothscrollRight"
		>
			<icon-arrowright class="icon"></icon-arrowright>
		</button>
		<!-- /arrows -->

		<!-- nav -->
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
		<!-- /nav -->
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
		// functions
		methods: {
			// @created()
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
			// @created()
			leftarrowScrollBehavior() {
				if (window.scrollX > 100) {
					document
						.querySelector("#galleries-arrowleft")
						.classList.add("visibility-visible");
				} else {
					document
						.querySelector("#galleries-arrowleft")
						.classList.remove("visibility-hidden");
				}
			},
			// on:click
			smoothscrollRight() {
				document.getElementById(this.galleryObj.id).scrollBy({
					top: 0,
					left: 600,
					behavior: "smooth",
				});
			},
			// on:click
			smoothscrollLeft() {
				document.getElementById(this.galleryObj.id).scrollBy({
					top: 0,
					left: -600,
					behavior: "smooth",
				});
			},
		},
		// do this at launch
		created() {
			this.refreshProject();
			window.addEventListener("scroll", this.leftarrowScrollBehavior);
		},
		// stop this at launch
		unmount() {
			window.removeEventListener("scroll", this.leftarrowScrollBehavior);
		},
		// do this if something changes
		watch: {
			// $route: "refreshProject",
			$route() {
				this.refreshProject();
			},
		},
	};
</script>

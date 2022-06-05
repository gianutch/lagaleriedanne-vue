<template>
	<div
		id="paintings"
		class="gallery"
		v-bind:style="{
			backgroundImage: 'url(' + data.website.image.backgroundGallery + ')',
		}"
	>
		<!-- art -->
		<div
			class="gallery-art align-center"
			v-for="painting in data.gallery.paintings"
			v-bind:key="painting.id"
			v-bind:id="painting.id"
			v-bind:class="painting.classDisplay"
		>
			<!-- classDisplay used to hide specific art in data -->
			<img
				class="setting-shadow--motion"
				loading="auto"
				v-bind:src="painting.image.img1"
				v-bind:srcset="painting.image.img2"
			/>
			<div class="gallery-art-plaque setting-shadow--motion">
				<h5 class="align-center">{{ painting.title }}</h5>
				<h6 class="align-center">
					{{ painting.type }} - {{ painting.size }}
				</h6>
			</div>
		</div>
		<!-- /art -->

		<!-- nav & buttons -->
		<div class="gallery-nav align-center">
			<module-gallery-nav></module-gallery-nav>
		</div>
		<button
			class="button button-white--ghost button-special gallery-arrowleft"
			v-on:click="smoothscrollLeft"
		>
			<icon-arrowleft class="icon"></icon-arrowleft>
		</button>
		<button
			class="button button-white--ghost button-special gallery-arrowright"
			v-on:click="smoothscrollRight"
		>
			<icon-arrowright class="icon"></icon-arrowright>
		</button>
		<!-- /nav & buttons -->
	</div>
</template>

<script>
	import Json from "../data/data.json";
	import ModuleGalleryNav from "./ModuleGalleryNav.vue";
	import IconArrowleft from "./IconArrowleft.vue";
	import IconArrowright from "./IconArrowright.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			ModuleGalleryNav,
			IconArrowleft,
			IconArrowright,
		},
		methods: {
			smoothscrollRight() {
				document.getElementById("watercolors").scrollBy({
					top: 0,
					left: 500,
					behavior: "smooth",
				});
			},
			smoothscrollLeft() {
				document.getElementById("watercolors").scrollBy({
					top: 0,
					left: -500,
					behavior: "smooth",
				});
			},
		},
	};
</script>

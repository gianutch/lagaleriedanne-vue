<template>
	<div
		id="watercolors"
		class="gallery"
		v-bind:style="{ backgroundImage: 'url(' + data.website.imgGallery + ')' }"
	>
		<!-- preload -->
		<img
			class="display-none"
			loading="eager"
			v-bind:src="data.website.imgGallery"
		/>

		<!-- art -->
		<div
			class="gallery-art align-center"
			v-for="watercolor in data.gallery.watercolors"
			v-bind:key="watercolor"
			v-bind:id="watercolor.name"
			v-bind:class="watercolor.classDisplay"
		>
			<img
				class="setting-shadow--motion"
				loading="lazy"
				v-bind:src="watercolor.image.path1"
				v-bind:srcset="watercolor.image.path2"
			/>
			<div class="gallery-art-note setting-shadow--motion">
				<h5 class="align-center">{{ watercolor.title }}</h5>
				<h6 class="align-center">
					{{ watercolor.type }} - {{ watercolor.size }}
				</h6>
			</div>
		</div>
		<!-- /art -->

		<div class="gallery-buttons align-center">
			<router-link
				to="/paintings"
				class="button button-small button-base--ghost button-block"
				>Peintures</router-link
			>
			<router-link
				to="/watercolors"
				class="button button-small button-base--ghost button-block"
				>Aquarelles</router-link
			>
			<router-link
				to="/drawings"
				class="button button-small button-base--ghost button-block"
				>Dessins</router-link
			>
		</div>

		<button
			class="button button-white--ghost button-special gallery-arrowright"
			v-on:click="smoothscrollRight"
		>
			<icon-arrowright class="icon"></icon-arrowright>
		</button>
	</div>
</template>

<script>
	import Json from "../data/data.json";
	import IconArrowright from "../icons/IconArrowright.vue";
	import mixinScrollLateral from "../mixins/mixinScrollLateral.js";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			IconArrowright,
		},
		mixins: [mixinScrollLateral],
	};
</script>

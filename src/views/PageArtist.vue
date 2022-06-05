<template>
	<div id="artist">
		<!-- hero -->
		<div
			id="artist-hero"
			class="align-center"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.image.backgroundHero + ')',
			}"
		>
			<h1
				class="text-secondary align-center setting-anim--fadeinup setting-anim--delayed"
			>
				L'artiste
			</h1>
		</div>
		<!-- /hero -->

		<div class="container section align-center">
			<img
				class="image-responsive"
				loading="lazy"
				v-bind:src="data.website.image.photoArtistA1"
				v-bind:srcset="data.website.image.photoArtistA2"
			/>
			<br />
			<p class="text-justify">
				{{ data.website.text.txt1 }}
			</p>
			<br />
			<img
				class="image-responsive setting-shadow--motion"
				loading="lazy"
				v-bind:src="data.website.image.photoArtistB1"
				v-bind:srcset="data.website.image.photoArtistB2"
			/>
			<br />
			<p class="text-justify">
				{{ data.website.text.txt2 }}
			</p>
			<br />
			<p class="text-justify">
				{{ data.website.text.txt3 }}
			</p>
		</div>
	</div>
</template>

<script>
	import Json from "../data/data.json";

	export default {
		data() {
			return {
				data: Json,
			};
		},
	};
</script>

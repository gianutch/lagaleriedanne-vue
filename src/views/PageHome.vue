<template>
	<div id="home">
		<!-- preload -->
		<link rel="preload" v-bind:href="data.website.image.backgroundHero" />
		<!-- /preload -->
		<!-- prefetch -->
		<link
			rel="prefetch"
			v-bind:href="data.website.image.backgroundGalleries"
		/>
		<!-- /prefetch -->

		<!-- hero -->
		<div
			id="home-hero"
			class="align-center"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.image.backgroundHero + ')',
			}"
		>
			<icon-logo
				class="logo setting-anim--fadeinup setting-anim--delayed"
			></icon-logo>
		</div>
		<!-- /hero -->

		<div class="section">
			<div class="container subsection">
				<h5 class="text-bold" style="margin-left: 1.5%">CATÉGORIES</h5>
				<span v-for="gallery in data.galleries" v-bind:key="gallery.id">
					<router-link
						v-bind:to="'/galleries/' + gallery.id"
						class="home-card setting-shadow--motion background-theme fluid column"
					>
						<img
							class="image-responsive"
							loading="eager"
							v-bind:src="gallery.pvw1"
							v-bind:srcset="gallery.pvw2"
							width="500"
							height="333"
						/>

						<p class="link link-base">{{ gallery.title }}</p>

						<h5>{{ gallery.description }}</h5>
					</router-link>
				</span>
			</div>

			<div class="container subsection">
				<h5 class="text-bold" style="margin-left: 1.5%">ÉVÉNEMENTS</h5>
				<span v-for="event in data.events" v-bind:key="event.id">
					<router-link
						v-bind:to="'/events#' + event.id"
						class="home-card setting-shadow--motion one-half-tablet one-fourth-laptop one-sixth-desktop column"
						v-bind:class="event.classDisplay"
					>
						<!-- classDisplay shows event depending of display size-->
						<img
							class="image-responsive"
							loading="eager"
							v-bind:src="event.image.pvw1"
							v-bind:srcset="event.image.pvw2"
							width="400"
							height="400"
						/>
						<div style="min-height: 65px">
							<p class="link link-base">{{ event.title }}</p>
						</div>
						<div style="min-height: 40px">
							<h5>{{ event.date }}</h5>
						</div>
					</router-link>
				</span>
			</div>

			<div class="container subsection">
				<h5 class="text-bold" style="margin-left: 1.5%">L'ARTISTE</h5>
				<div class="row">
					<div class="one-half-tablet one-third-laptop column">
						<router-link to="/artist" class="home-card">
							<img
								class="image-responsive"
								loading="lazy"
								v-bind:src="data.website.image.artistOutside1"
								v-bind:srcset="data.website.image.artistOutside2"
						/></router-link>
					</div>
					<div class="one-half-tablet two-third-laptop column">
						<p style="vertical-align: middle">
							{{ data.website.text.description1.slice(0, 500) }}...
							<!-- slice shows the first  x characters -->
							<router-link to="/artist" class="link link-primary"
								>Lire la suite ></router-link
							>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import IconLogo from "./IconLogo.vue";

	export default {
		components: {
			IconLogo,
		},
	};
</script>

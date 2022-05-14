<template>
	<div id="home">
		<!-- preload -->
		<img
			class="display-none"
			loading="eager"
			v-bind:src="data.website.imgHomeHero"
		/>
		<img
			class="display-none"
			loading="eager"
			v-bind:src="data.website.imgGallery"
		/>

		<!-- hero -->
		<div
			id="home-hero"
			class="align-center"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.imgHomeHero + ')',
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
				<span
					v-for="category in data.website.categories"
					v-bind:key="category"
				>
					<router-link
						v-bind:to="'/' + category.name"
						class="home-card setting-shadow--motion background-theme fluid column"
					>
						<img
							class="image-responsive"
							loading="eager"
							v-bind:src="category.preview1"
							v-bind:srcset="category.preview2"
							width="500"
							height="333"
						/>

						<p class="link link-base">{{ category.title }}</p>

						<h5>{{ category.description }}</h5>
					</router-link>
				</span>
			</div>

			<div class="container subsection">
				<h5 class="text-bold" style="margin-left: 1.5%">ÉVÉNEMENTS</h5>
				<span v-for="event in data.events" v-bind:key="event">
					<router-link
						v-bind:to="'/events#' + event.name"
						class="home-card setting-shadow--motion one-half-tablet one-fourth-laptop one-sixth-desktop column"
						v-bind:class="event.classDisplay"
					>
						<img
							class="image-responsive"
							loading="eager"
							v-bind:src="event.preview1"
							v-bind:srcset="event.preview2"
							width="400"
							height="400"
						/>
						<div style="min-height: 65px">
							<p class="link link-base">{{ event.title }}</p>
						</div>
						<div style="min-height: 73px">
							<h5>{{ event.type }} du {{ event.date }}</h5>
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
								v-bind:src="data.website.artist.photoA1"
								v-bind:srcset="data.website.artist.photoA2"
						/></router-link>
					</div>
					<div class="one-half-tablet two-third-laptop column">
						<p style="vertical-align: middle">
							D’origine Charentaise, j’ai toujours été passionnée de
							peinture et inspirée par l’univers de la puissance
							émotionnelle des couleurs et de ses contrastes, comme en
							ont témoigné les peintres impressionnistes et post-
							impressionnistes...
							<router-link to="/artist" class="link link-primary"
								>Lire la suite</router-link
							>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Json from "../data/data.json";
	import IconLogo from "../icons/IconLogo.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			IconLogo,
		},
	};
</script>

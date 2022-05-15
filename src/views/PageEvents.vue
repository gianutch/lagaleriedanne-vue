<template>
	<div id="events">
		<!-- hero -->
		<div
			id="events-hero"
			class="align-center"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.image.backgroundHero + ')',
			}"
		>
			<h1
				class="text-secondary align-center setting-anim--fadeinup setting-anim--delayed"
			>
				Événements
			</h1>
		</div>
		<!-- /hero -->

		<div class="container">
			<div class="section">
				<div
					class="events-event align-center"
					v-for="event in data.events"
					v-bind:key="event.id"
				>
					<span v-bind:id="event.id"></span>
					<br />
					<br />
					<h3 class="align-center">{{ event.title }}</h3>
					<h5 class="align-center">{{ event.type }} - {{ event.date }}</h5>
					<h5 class="align-center">
						<a
							class="link link-primary"
							v-bind:href="event.url"
							target="_blank"
							>{{ event.address }}</a
						>
					</h5>
					<br />
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.image.path1"
						v-bind:srcset="event.image.path2"
					/>
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.image.photoA1"
						v-bind:srcset="event.image.photoA2"
					/>
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.image.photoB1"
						v-bind:srcset="event.image.photoB2"
					/>
					<img
						class="image-responsive setting-shadow--soft"
						loading="lazy"
						v-bind:src="event.image.photoC1"
						v-bind:srcset="event.image.photoC2"
					/>
					<hr class="background-base--background" />
				</div>
			</div>
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

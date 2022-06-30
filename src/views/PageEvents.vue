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
					<h5 class="align-center">{{ event.date }}</h5>
					<h5 class="align-center">
						<a
							class="link link-primary"
							v-bind:href="event.url"
							target="_blank"
							>{{ event.address }}</a
						>
					</h5>
					<br />
					<span v-for="photo in event.image.photos" v-bind:key="photo.id">
						<img
							class="image-responsive setting-shadow--motion"
							loading="lazy"
							v-bind:src="photo.img1"
							v-bind:srcset="photo.img2 + ' 2x'"
						/>
					</span>

					<hr class="background-base--background" />
				</div>
			</div>
		</div>
	</div>
</template>

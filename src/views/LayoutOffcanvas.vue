<template>
	<div id="oncanvas" class="overlay" v-on:click="offcanvasClose()"></div>
	<div
		id="offcanvas"
		class="overlay background-base--opaque"
		v-on:click="offcanvasClose()"
	>
		<a
			id="offcanvas-close"
			class="link link-theme"
			v-on:click="offcanvasClose()"
			>&times;</a
		>
		<ul class="nav-vertical">
			<layout-nav-main></layout-nav-main>
		</ul>
	</div>
</template>

<script>
	import LayoutNavMain from "./LayoutNavMain.vue";

	export default {
		components: {
			LayoutNavMain,
		},
		methods: {
			offcanvasClose() {
				document.getElementById("offcanvas").style.height = "0%";

				// OFFCANVAS SIDE
				// set width of side navigation to 0px
				// document.querySelector('#offcanvas').style.width = '0';
				// remove overlay to #oncanvas
				// document.querySelector('#oncanvas').classList.remove('background-base--strong');
				// set left margin of page content to 0px (if you want oncanvas to be put back)
				// document.querySelector('#oncanvas').style.marginRight = '0';
			},
		},
	};
</script>

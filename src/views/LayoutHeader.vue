<template>
	<header id="header">
		<div class="container-fluid">
			<nav role="navigation">
				<!-- logo -->
				<router-link
					id="header-logo"
					class="float-left link link-theme text-secondary"
					to="/"
					>Anne's Gallery</router-link
				>

				<!-- menu desktop -->
				<ul
					id="header-nav-laptop"
					class="nav-horizontal nav-small float-right display-laptop display-desktop"
				>
					<layout-nav></layout-nav>
				</ul>

				<!-- menu mobile -->
				<ul
					id="header-nav-mobile"
					class="nav-horizontal nav-small float-right display-mobile display-tablet"
					v-on:click="offcanvasOpen()"
				>
					<li class="link link-theme">
						Menu
						<icon-caret class="icon icon-mini"></icon-caret>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	import Json from "../data/data.json";
	import LayoutNav from "./LayoutNav.vue";
	import IconCaret from "../icons/IconCaret.vue";

	export default {
		data() {
			return {
				data: Json,
			};
		},
		components: {
			LayoutNav,
			IconCaret,
		},
		methods: {
			offcanvasOpen() {
				document.getElementById("offcanvas").style.height = "100%";

				// OFFCANVAS SIDE
				// set width of side navigation to 240px
				// document.querySelector('#offcanvas').style.width = '240px';
				// add overlay to #oncanvas
				// document.querySelector('#oncanvas').classList.add('background-base--strong');
				// set left margin of page content to 240px (if you want oncanvas to be pushed)
				// document.querySelector('#oncanvas').style.marginRight = '240px';
			},
		},
	};
</script>

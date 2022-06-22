<template>
	<header id="header">
		<div class="container-full">
			<nav role="navigation">
				<!-- logo -->
				<router-link
					id="header-logo"
					class="float-left link link-theme text-secondary"
					to="/"
					>La galerie d'Anne</router-link
				>

				<!-- menu desktop -->
				<ul
					id="header-nav-laptop"
					class="nav-horizontal nav-small float-right display-laptop display-desktop"
				>
					<module-nav></module-nav>
				</ul>

				<!-- menu phone -->
				<ul
					id="header-nav-phone"
					class="nav-horizontal nav-small float-right display-phone display-tablet"
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
	import ModuleNav from "./ModuleNav.vue";
	import IconCaret from "./IconCaret.vue";

	export default {
		components: {
			ModuleNav,
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

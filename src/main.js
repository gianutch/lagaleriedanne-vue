import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import LayoutOffcanvas from "./views/LayoutOffcanvas.vue";
import LayoutHeader from "./views/LayoutHeader.vue";
import LayoutFooter from "./views/LayoutFooter.vue";
import LayoutContact from "./views/LayoutContact.vue";
import PageHome from "./views/PageHome.vue";
import PagePaintings from "./views/PagePaintings.vue";
import PageWatercolors from "./views/PageWatercolors.vue";
import PageDrawings from "./views/PageDrawings.vue";
import PageEvents from "./views/PageEvents.vue";
import PageArtist from "./views/PageArtist.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			components: {
				default: PageHome,
				offcanvas: LayoutOffcanvas,
				header: LayoutHeader,
				footer: LayoutFooter,
				contact: LayoutContact,
			},
		},
		{
			path: "/paintings",
			name: "paintings",
			components: {
				default: PagePaintings,
				offcanvas: LayoutOffcanvas,
				header: LayoutHeader,
			},
		},
		{
			path: "/watercolors",
			name: "watercolors",
			components: {
				default: PageWatercolors,
				offcanvas: LayoutOffcanvas,
				header: LayoutHeader,
			},
		},
		{
			path: "/drawings",
			name: "drawings",
			components: {
				default: PageDrawings,
				offcanvas: LayoutOffcanvas,
				header: LayoutHeader,
			},
		},
		{
			path: "/events",
			name: "events",
			components: {
				default: PageEvents,
				offcanvas: LayoutOffcanvas,
				header: LayoutHeader,
				footer: LayoutFooter,
				contact: LayoutContact,
			},
		},
		{
			path: "/artist",
			name: "artist",
			components: {
				default: PageArtist,
				offcanvas: LayoutOffcanvas,
				header: LayoutHeader,
				footer: LayoutFooter,
				contact: LayoutContact,
			},
		},
		{
			path: "/:notFound(.*)",
			redirect: { name: "home" },
		},
	],
	linkAciveClass: "active", //set the native vue-router class '.router-link-active' to just '.active'
	scrollBehavior(to, from, savedPosition) {
		console.log(to, from, savedPosition);
		// if saved position exist, go back where you were
		if (savedPosition) {
			return savedPosition;
		}
		// else scroll to top
		return { left: 0, top: 0 };
	},
});

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
	app.mount("#app");
});

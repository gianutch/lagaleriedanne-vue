import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ModuleOffcanvas from "./views/ModuleOffcanvas.vue";
import ModuleHeader from "./views/ModuleHeader.vue";
import ModuleFooter from "./views/ModuleFooter.vue";
import ModuleContact from "./views/ModuleContact.vue";
import PageHome from "./views/PageHome.vue";
import PageGalleryPaintings from "./views/PageGalleryPaintings.vue";
import PageGalleryWatercolors from "./views/PageGalleryWatercolors.vue";
import PageGalleryDrawings from "./views/PageGalleryDrawings.vue";
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
				offcanvas: ModuleOffcanvas,
				header: ModuleHeader,
				footer: ModuleFooter,
				contact: ModuleContact,
			},
		},
		{
			path: "/paintings",
			name: "paintings",
			components: {
				default: PageGalleryPaintings,
				offcanvas: ModuleOffcanvas,
				header: ModuleHeader,
			},
		},
		{
			path: "/watercolors",
			name: "watercolors",
			components: {
				default: PageGalleryWatercolors,
				offcanvas: ModuleOffcanvas,
				header: ModuleHeader,
			},
		},
		{
			path: "/drawings",
			name: "drawings",
			components: {
				default: PageGalleryDrawings,
				offcanvas: ModuleOffcanvas,
				header: ModuleHeader,
			},
		},
		{
			path: "/events",
			name: "events",
			components: {
				default: PageEvents,
				offcanvas: ModuleOffcanvas,
				header: ModuleHeader,
				footer: ModuleFooter,
				contact: ModuleContact,
			},
		},
		{
			path: "/artist",
			name: "artist",
			components: {
				default: PageArtist,
				offcanvas: ModuleOffcanvas,
				header: ModuleHeader,
				footer: ModuleFooter,
				contact: ModuleContact,
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
		if (to.hash) {
			return { selector: to.hash };
		} else {
			return { x: 0, y: 0 };
		}
	},
});

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
	app.mount("#app");
});

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ComponentOffcanvas from "./views/ComponentOffcanvas.vue";
import ComponentHeader from "./views/ComponentHeader.vue";
import ComponentFooter from "./views/ComponentFooter.vue";
import ModuleContact from "./views/ModuleContact.vue";
import PageHome from "./views/PageHome.vue";
import PageGalleries from "./views/PageGalleries.vue";
import PageEvents from "./views/PageEvents.vue";
import PageArtist from "./views/PageArtist.vue";
import mixinData from "./mixins/mixinData.js";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			components: {
				default: PageHome,
				offcanvas: ComponentOffcanvas,
				header: ComponentHeader,
				footer: ComponentFooter,
				contact: ModuleContact,
			},
		},
		{
			path: "/galleries/:galleryId",
			name: "galleries",
			components: {
				default: PageGalleries,
				offcanvas: ComponentOffcanvas,
				header: ComponentHeader,
			},
		},
		{
			path: "/events",
			name: "events",
			components: {
				default: PageEvents,
				offcanvas: ComponentOffcanvas,
				header: ComponentHeader,
				footer: ComponentFooter,
				contact: ModuleContact,
			},
		},
		{
			path: "/artist",
			name: "artist",
			components: {
				default: PageArtist,
				offcanvas: ComponentOffcanvas,
				header: ComponentHeader,
				footer: ComponentFooter,
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
		} else {
			// start at the top
			return { left: 0, top: 0 };
		}
		// if (to.hash) {
		// 	return { selector: to.hash };
		// } else {
		// 	return { x: 0, y: 0 };
		// }
	},
});

const app = createApp(App);

app.mixin(mixinData);
app.use(router);

router.isReady().then(() => {
	app.mount("#app");
});

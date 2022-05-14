export default {
	methods: {
		smoothscrollRight() {
			document.getElementById("paintings").scrollBy(200, 0);
		},
		smoothscrollLeft() {
			document.getElementById("paintings").scrollBy(-200, 0);
		},
	},
};

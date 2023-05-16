// Tramite una chiamata ad una API, stampiamo a schermo un numero casuale.

const app = Vue.createApp({
	data() {
		return {
			randomNumber: 0,
		}
	},
	methods: {
		getRandomNumber() {
			axios.get('https://flynn.boolean.careers/exercises/api/random/int')
				.then(serverResponse => this.randomNumber = serverResponse.data.response);
		},
	},
	created() {
		this.getRandomNumber();
	},
});

app.mount('#app');

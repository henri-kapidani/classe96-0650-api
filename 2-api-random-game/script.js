// Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc.
// Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.

const app = Vue.createApp({
	data() {
		return {
			userNumber: null,
			computerNumber: null,
		};
	},
	methods: {
		play() {
			this.userNumber = null,
			this.computerNumber = null,
			axios.get('https://flynn.boolean.careers/exercises/api/random/int')
				.then(serverResponse => this.userNumber = serverResponse.data.response);
			axios.get('https://flynn.boolean.careers/exercises/api/random/int')
				.then(serverResponse => this.computerNumber = serverResponse.data.response);
		},
	},
	computed: {
		result() {
			if (this.userNumber > this.computerNumber) {
				return 'Hai vinto';
			}
			if (this.userNumber < this.computerNumber) {
				return 'Hai perso';
			}
			return 'Pareggio';
		},
		isResultReady() {
			return this.userNumber !== null && this.computerNumber !== null;
		},
	},
});

app.mount('#app');
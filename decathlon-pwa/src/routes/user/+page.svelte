<script>
	
	const publicVapidKey = 'BAYcVFHJQDtc1W2Tqdqv5P8K6IX6T86iXmx63bxeoBCdYHTHM49aRsEMhth34WVjuJv_JFP3ASgeACpQV9xTNK8';

	/**
     * @param {string | any[]} base64string
     */
	function urlBase64ToUint8Array(base64string) {
		const padding = '='.repeat((4 - base64string.length % 4) % 4);
		const base64 = (base64string + padding)
			.replace(/\-/g, '+')
			.replace(/_/g, '/');
	
		const rawData = window.atob(base64);
		const outputArray = new Uint8Array(rawData.length);
	
		for (let i = 0; i < rawData.length; ++i) {
			outputArray[i] = rawData.charCodeAt(i);
		}
		return outputArray;
	}

	async function notifyMe() {
		const registration = await navigator.serviceWorker.register("/service-worker.js", {
				scope: "/"
			});
		const subscription = await registration.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
		});
		postToServer('https://192.168.0.40:3000/notify-me', { endpoint: subscription.endpoint });
	}

	/* Utility functions. */

	/**
     * @param {String} url
     * @param {Object} data
     */
	async function postToServer(url, data) {
	let response = await fetch(url, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	}

	async function randomNotification() {
		notifyMe();
		/*
		const register = await navigator.serviceWorker.register("/service-worker.js", {
				scope: "/"
			});
		
		// Register Push
		console.log("Registering Push...");
		const subscription = await register.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
		});
		console.log("Push Registered...");

		// Send Push Notification
		console.log("Sending Push...");
		await fetch("https://192.168.0.40:3000/subscribe", {
			method: "POST",
			body: JSON.stringify(subscription),
			headers: {
			"content-type": "application/json"
			}
		}).catch(err => alert(err));
		console.log("Push Sent...");
		*/
	}

	var alerts = [
		{
			image: "https://contents.mediadecathlon.com/p2139584/k$22ce76d6d63de8ebb305f16bb74d7a23/sq/surpantalon-pluie-velo-ville-100-noir.jpg?format=auto&f=969x969",
			id: 1,
			price: 10,
			quantity: 1,
			name: "SURPANTALON PLUIE VELO VILLE 100 NOIR",
			link: "https://www.decathlon.fr/p/surpantalon-pluie-velo-ville-100-noir/_/R-p-169380?mc=8402040&c=NOIR"
		},
		{
			image: "https://contents.mediadecathlon.com/p1691723/k$76339ac8f2a8cdd63d1f1685646bd279/sq/sous-vetement-de-ski-homme-bl-100-haut-noir.jpg?format=auto&f=969x969",
			id: 1,
			price: 10,
			quantity: 1,
			name: "SOUS-VÊTEMENT DE SKI HOMME - BL 100 HAUT - NOIR",
			link: "https://www.decathlon.fr/p/sous-vetement-de-ski-homme-bl-100-haut/_/R-p-302821?mc=8510029&c=NOIR"
		},
		{
			image: "https://contents.mediadecathlon.com/p1666421/k$1c92f05e5fd78647488be900606991af/sq/sac-a-dos-de-trekking-et-voyage-40-l-cabine-travel-100.jpg?format=auto&f=969x969",
			id: 1,
			price: 10,
			quantity: 1,
			name: "SAC À DOS DE TREKKING ET VOYAGE 40 L CABINE - TRAVEL 100",
			link: "https://www.decathlon.fr/p/sac-a-dos-de-trekking-et-voyage-40-l-cabine-travel-100/_/R-p-303040?mc=8554561&c=BORDEAUX"
		},
	];

</script>

<main>
	<div class="cart">
		<div class="cart__header">
			<div class="cart__header__title">
				<h1>Mes alertes</h1>
			</div>
		</div>
		<div class="cart__content">
			<div class="cart__content__items">
				{#each alerts as item}
					<div class="cart__content__item">
						<div class="cart__content__item__image">
							<img src={item.image} alt={item.name} />
						</div>
						<div class="cart__content__item__description">{item.name}</div>
						<a href={item.link}>
						<div class="cart__content__item__name">
							<span>Acheter</span>
						</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	
	.cart {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		height: 100%;
		font-family: "Roboto Condensed", sans-serif;
		font-weight: 800;
		text-transform: uppercase;
		padding: 5%;
	}

	.cart__header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 10%;
	}

	.cart__header__title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart__header__title h1 {
		font-size: 2rem;
	}

	.cart__header__actions {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart__content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90%;
	}

	.cart__content__items {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90%;
	}

	.cart__content__item__description {
			padding: 5px;
	}

	.cart__content__item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 10%;
		margin-top: 50px;
		background-color: aliceblue;
	}

	.cart__content__item__image {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart__content__item__image img {
		width: 200px;
		height: 200px;
	}

	.cart__content__item__name {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 200px;
		background-color: #ffea28;
		color: black;
		font-size: 1rem;
		padding: 0 50px;
		cursor: pointer;
	}

	.cart__content__item__name h2 {
		font-size: 1.5rem;
	}

	.cart__content__item__price {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart__content__item__price h2 {
		font-size: 1.5rem;
	}

	.cart__content__item__quantity {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cart__content__item__quantity h2 {
		font-size: 1.5rem;
	}

	.cart__content__total {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		height:auto
	}

	@media (max-width: 768px) {
		.cart__content__item__image img {
			width: 100px;
			height: 100px;
		}

		.cart__content__item__name {
			height: 100px;
			font-size: .75rem;
		}

		.cart__content__item__description {
			font-size: .75rem;
		}
	}
</style>

<!--<button on:click={randomNotification}>Push notification</button>-->
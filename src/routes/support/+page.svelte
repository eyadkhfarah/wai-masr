<script>
	// @ts-nocheck

	export let data

	let env = data.env

	import H1 from '../../lib/Components/Text/H1.svelte';

	import og from '../../lib/images/main.png';

	let title = 'وعي مصر :: أدعمنا';
	let desc = 'ادعم فريق وعي مصر ماديا';

	let amount = 1.62;

	console.log(amount);

	import { loadScript } from '@paypal/paypal-js';

	console.log(env)

	loadScript({ clientId: env })
		.then((paypal) => {
			paypal
				.Buttons({
					style: {
						color: 'blue',
						shape: 'pill'
					},
					createOrder: function (data, actions) {
						// Set up the transaction
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										value: amount
									}
								}
							]
						});
					},
					onApprove: async function (data, actions) {
						// Capture order after payment approved
						const details = await actions.order.capture();
						alert('Payment successful!');
					},
					onError: function (err) {
						// Log error if something goes wrong during approval
						alert('Something went wrong');
						console.log('Something went wrong', err);
					}
				})
				.render('#paypal-button-container')
				.catch((error) => {
					console.error('failed to render the PayPal Buttons', error);
				});
		})
		.catch((error) => {
			console.error('failed to load the PayPal JS SDK script', error);
		});

	// @ts-ignore
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section class="md:grid lg:grid-cols-2 gap-7">
	<div class="grid gap-3 h-fit">
		<H1>أدعمنا</H1>
		<p>حابب اننا نكبر ونكبر معاك؟ تقجر تتبرع لنا دلوقتي</p>
	</div>

	<div class="bg-red grid gap-4 text-sm p-4 md:m-0 mt-5 border-2">
		<div class="flex gap-4 justify-around">
			<button
				class:text-black={amount === 0.32}
				class={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					amount === 0.32 ? 'bg-primary' : ''
				} `}
				on:click={() => amount = 0.32}
			>
				10 جنيه
			</button>
			<button
				on:click={() => {
					amount = 1.62;
				}}
				class:text-black={amount === 1.62}
				class={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					amount === 1.62 ? 'bg-primary' : ''
				} `}
				on:click={() => amount = 1.62}
			>
				50 جنيه
			</button>
			<button
				on:click={() => {
					amount = 3.24;
				}}
				class:text-black={amount === 3.24}
				class={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					amount === 3.24 ? 'bg-primary' : ''
				} `}
				on:click={() => amount = 3.24}
			>
				100 جنيه
			</button>
		</div>
		<div id="paypal-button-container" />
	</div>
</section>

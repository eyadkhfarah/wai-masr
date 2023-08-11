<script>
	// @ts-nocheck

	import Donate from '../../lib/Components/Donate.svelte';
	import H1 from '../../lib/Components/Text/H1.svelte';

	import og from '../../lib/images/main.png';

	let title = 'وعي مصر :: أدعمنا';
	let desc = 'ادعم فريق وعي مصر ماديا';

	import { PAYPAL_CLIENT_API } from '$env/static/private';

	let amount = 50;

	import { loadScript } from '@paypal/paypal-js';

	const CLIENT_ID = PAYPAL_CLIENT_API;

	loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
		paypal.Buttons({
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
		}).render("#paypal-button-container");

		//
		//   .render();
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
	<div class="grid gap-3">
		<H1>أدعمنا</H1>
		<p>حابب اننا نكبر ونكبر معاك؟ تقجر تتبرع لنا دلوقتي</p>
	</div>

	<div class="bg-red grid gap-4 text-sm p-4 md:m-0 mt-5 border-2">
		<div class="flex gap-4 justify-around">
			<button
				class:text-black={amount === 10}
				class={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					amount === 10 ? 'bg-primary' : ''
				} `}
				on:click={() => (amount = 10)}
			>
				10 جنيه
			</button>
			<button
				class:text-black={amount === 50}
				class={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					amount === 50 ? 'bg-primary' : ''
				} `}
				on:click={() => (amount = 50)}
			>
				50 جنيه
			</button>
			<button
				class:text-black={amount === 100}
				class={`p-4 h-fit w-fit font-black text-lg cursor-pointer ${
					amount === 100 ? 'bg-primary' : ''
				} `}
				on:click={() => (amount = 100)}
			>
				100 جنيه
			</button>
		</div>
		<div id="paypal-button-container" />
	</div>
</section>

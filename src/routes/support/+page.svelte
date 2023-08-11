<script>
	// @ts-nocheck

	import Donate from '../../lib/Components/Donate.svelte';
	import H1 from '../../lib/Components/Text/H1.svelte';

	import og from '../../lib/images/main.png';
	let title = 'وعي مصر :: أدعمنا';
	let desc = 'ادعم فريق وعي مصر ماديا';

	let amount = 100;
	let succeeded = false;
	let paypalErrorMessage = '';
	let orderID = false;
	let billingDetails = '';

	// const createOrder = (data, actions) => {
	// 	return actions.order
	// 		.create({
	// 			purchase_units: [
	// 				{
	// 					amount: {
	// 						value: amount
	// 					}
	// 				}
	// 			],

	// 			// remove the applicaiton_context object if you need your users to add a shipping address
	// 			application_context: {
	// 				shipping_preference: 'NO_SHIPPING'
	// 			}
	// 		})
	// 		.then((orderID) => {
	// 			setOrderID(orderID);
	// 			return orderID;
	// 		});
	// };

	// // handles when a payment is confirmed by paypal
	// const onApprove = (data, actions) => {
	// 	return actions.order.capture().then(function (details) {
	// 		const { payer } = details;
	// 		setBillingDetails(payer);
	// 		setSucceeded(true);
	// 	});
	// };

	// // handles when a payment is declined
	// const onError = (data, actions) => {
	// 	setPaypalErrorMessage('Something went wrong with your payment');
	// };

	// Paypal.Buttons({
	//     // Order is created on the server and the order id is returned
	//     createOrder() {
	//       return fetch("/my-server/create-paypal-order", {
	//         method: "POST",
	//         headers: {
	//           "Content-Type": "application/json",
	//         },
	//         // use the "body" param to optionally pass additional order information
	//         // like product skus and quantities
	//         Body: JSON.stringify({
	//           Cart: [
	//             {
	//               Sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
	//               Quantity: "YOUR_PRODUCT_QUANTITY",
	//             },
	//           ],
	//         }),
	//       })
	//       .then((response) => response.json())
	//       .then((order) => order.id);
	//     },
	//     // Finalize the transaction on the server after payer approval
	//     onApprove(data) {
	//       return fetch("/my-server/capture-paypal-order", {
	//         method: "POST",
	//         headers: {
	//           "Content-Type": "application/json",
	//         },
	//         Body: JSON.stringify({
	//           orderID: data.orderID
	//         })
	//       })
	//       .then((response) => response.json())
	//       .then((orderData) => {
	//         // Successful capture! For dev/demo purposes:
	//         Console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
	//         const transaction = orderData.purchase_units[0].payments.captures[0];
	//         Alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
	//       });
	//     }
	//   }).render("#paypal-button-container");

	// @ts-ignore
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:image" content={og} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
</svelte:head>

<section class="md:grid grid-cols-2 gap-7">
	<div class="grid gap-3">
		<H1>أدعمنا</H1>
		<p>حابب اننا نكبر ونكبر معاك؟ تقجر تتبرع لنا دلوقتي</p>
	</div>

	<div class="bg-red grid gap-4 p-4 md:m-0 mt-5 border-2">
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

<script>
	import { writable } from 'svelte/store';

	import { page } from '$app/stores';

	const analyticsStore = writable([]);
	/* eslint-disable */
	$: {
		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag('config', 'G-ZX7H2KPXNZ', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

	analyticsStore.subscribe((queue) => {
		let next = queue && queue.length && queue.shift();
		let retries = 3;
		let previousExecutedOperationId;
		while (next) {
			const { type, event, data, id } = next;
			if (!type || !event || !data || !id) {
				console.log('Incorrect analytics event data');
				next = queue.shift();
				continue;
			}
			// if current id is not equal to previous id then reassign retries to 3
			if (id && id !== previousExecutedOperationId) retries = 3;
			previousExecutedOperationId = id;
			// @ts-ignore
			if (typeof gtag !== 'undefined') {
				// @ts-ignore
				gtag(type, event, data);
				console.log('event created with data', next);
			} else {
				// gtag not found, retry till retries become 0
				if (retries > 0) {
					retries--;
					continue;
				} else {
					console.log('Analytics event failed to reach server with: ', next);
				}
			}
			next = queue.shift();
		}
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID"></script>
	<script type="text/partytown" >
		try {
			if (typeof window !== 'undefined' && window) {
				window.dataLayer = window.dataLayer || [];
				function gtag() {
					dataLayer.push(arguments);
				}
				gtag('js', new Date());
				gtag('config', 'G-ZX7H2KPXNZ');
			}
		} catch (err) {
			console.log('Error setting up google analytics ', err);
		}
	</script>
</svelte:head>

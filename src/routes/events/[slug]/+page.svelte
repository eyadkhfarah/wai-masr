<script>
	// @ts-nocheck

	import H1 from '$lib/Components/Text/H1.svelte';
	import Email from '$lib/Components/Email.svelte';
	import { JsonLd } from 'svelte-meta-tags';

	export let data;
	let events = data.event;
</script>

<JsonLd
	schema={{
		'@type': 'Event',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://w3ieg.com/events'
		},
		name: events.fields.name,
		description: events.fields.description,
		image: ['https:' + events.fields.image.fields.file.url],
		startDate: events.fields.date,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
		location: [
			{
				'@type': 'VirtualLocation',
				url: ''
			},
			{
				'@type': 'Place',
				name: events.fields.location,
				address: {
					'@type': 'PostalAddress',
					streetAddress: '',
					addressLocality: '',
					postalCode: '',
					addressCountry: 'EG'
				}
			}
		],
	}}
/>

<svelte:head>
	<title>{events.fields.name} :: وعي - مصر</title>
	<meta name="description" content={events.fields.description} />

	<meta property="og:title" content={events.fields.name} />
	<meta property="og:description" content={events.fields.description} />
	<meta property="og:image" content={`https:${events.fields.image.fields.file.url}`} />
	<!-- Twitter -->
	<meta property="twitter:title" content={events.fields.name} />
	<meta property="og:description" content={events.fields.description} />
	<meta property="og:image:alt" content={events.fields.description} />
	<meta name="twitter:creator" content="@w3i.masr" />
	<meta property="og:type" content="" />

	<script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": {`"${event.fields.name}"`},
          "description": {`"${}"`},
          "image": {`"${events.fields.image.fields.file.url}"`},
          "startDate": {`"${events.fields.date}"`},
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "location": [{
            "@type": "VirtualLocation",
            "url": ""
          },{		
            "@type": "Place",
            "name": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "",
              "postalCode": "",
              "addressCountry": "EG"
            }
          }],
          "performer": {
            "@type": "Person",
            "name": ""
          }
        }
	</script>
</svelte:head>

<section class="grid gap-5 md:grid-cols-3">
	<div class="col-span-2 grid gap-5">
		<H1>{events.fields.name}</H1>

		<p class="font-black text-xl">
			<span class="text-red">الموعد</span> | {new Date(events.fields.date).toLocaleDateString(
				'ar-EG',
				{
					month: 'short',
					day: 'numeric'
				}
			)} -

			{new Date(events.sys.createdAt).toLocaleDateString('ar-arab', {
				calendar: 'coptic',
				day: 'numeric'
			})}
			{new Date(events.sys.createdAt).toLocaleDateString('ar-arab', {
				calendar: 'coptic',
				month: 'short'
			})}
		</p>
		<img
			src={events.fields.image.fields.file.url}
			alt={events.fields.name}
			class="object-cover h-full w-full"
		/>

		<p>{events.fields.description}</p>
	</div>

	<Email />
</section>

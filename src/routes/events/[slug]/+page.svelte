<script>
	// @ts-nocheck

	import Email from '../../../lib/Components/Email.svelte';

	export let data;
	let events = data.event;
</script>

<svelte:head>
	<script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": {`"${event.fields.name}"`},
          "description": {`"${events.fields.description}"`},
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
		<div class="flex gap-3 h-fit">
			<div class="w-2 bg-red rounded-3xl" />
			<h1 class="m-0">{events.fields.name}</h1>
		</div>

		<p class="font-black text-xl">
			<span class="text-red">الموعد</span> | {new Date(events.fields.date).toLocaleDateString(
				'ar-EG',
				{
					month: 'short',
					day: 'numeric'
				}
			)}
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

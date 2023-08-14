<script>
// @ts-nocheck

	export let event;
</script>

<a href={`/events/${event.fields.slug}`} aria-label={event.fields.title} class="w-full">
	<div class="grid gap-7">
		<div class="h-80 w-full col-span-2 bg-rose-950 text-white relative">
			<img
				src={`https:${event.fields.image.fields.file.url}`}
				alt={event.fields.name}
				class="object-cover h-80 w-full"
			/>
			<div class="grid gap-5 absolute bottom-0 md:p-10 p-5 bg-gradient-to-t from-black w-full">
				<h2>{event.fields.name}</h2>
				<p class="opacity-75">
					الميعاد: {new Date(event.fields.date).toLocaleDateString('ar-EG', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}
				</p>
			</div>
		</div>
	</div>
</a>

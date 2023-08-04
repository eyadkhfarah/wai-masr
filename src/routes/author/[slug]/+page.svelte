<script>
    // /** @type {import('./$types').PageData} */
    export let data;

    let author = data.author
</script>

<section>
    <div class="flex gap-3 h-fit">
		<div class="w-2 bg-red rounded-3xl" />
		<h1 class="m-0">{author.fields.name}</h1>
	</div>
</section>
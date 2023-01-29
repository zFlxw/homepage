<script lang="ts">
	import jQuery from 'jquery';
	import { onMount } from 'svelte/internal';

	export let entries: string[];

	onMount(() => {
		let current = 1;
		let height = jQuery('#roles').height()!;
		let numberDivs = jQuery('#roles').children().length;
		let first = jQuery('#roles div:nth-child(1)');
		setInterval(() => {
			let number = current * -height;
			first.css('margin-top', number -1 + 'px');
			if (current === numberDivs) {
				first.css('margin-top', '0px');
				current = 1;
			} else current++;
		}, 5000);
	});
</script>

<div class="mt-12 text-2xl md:text-4xl font-medium">
	<div id="roles" class="h-8 md:h-10 overflow-hidden align-middle">
		{#each entries as entry}
			<div class="transition-all ease-in-out duration-1000">{entry}</div>
		{/each}
	</div>
</div>

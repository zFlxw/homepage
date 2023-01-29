<script>
	import { Copy } from 'lucide-svelte';

	function copyUsername() {
        navigator.clipboard.writeText('Flxw#7928');
    }
</script>

<div
	class="absolute -top-20 left-1/2 -translate-x-1/2 text-arctic text-xl bg-neutral-1100 rounded-xl p-3 "
>
	<span
		class="absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-t-[12px] border-t-neutral-1100 border-r-[10px] border-r-transparent"
	/>
	<div class="flex flex-row gap-2 items-center w-full">
		<p class="px-4 py-1 bg-neutral-1050 rounded-lg">Flxw#7928</p>
		<div
			class="bg-neutral-600 p-2 rounded-xl cursor-pointer"
            on:click={copyUsername}
            on:keydown={copyUsername}
		>
			<Copy size={16} />
		</div>
	</div>
</div>

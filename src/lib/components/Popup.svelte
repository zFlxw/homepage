<script>
	import { Copy } from 'lucide-svelte';

	function copyUsername() {
        navigator.clipboard.writeText('Flxw#7928');
    }
</script>

<div
	class="absolute -top-20 left-1/2 -translate-x-1/2 text-arctic text-xl bg-neutral-900 rounded-xl p-3"
>
	<span
		class="absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-t-[12px] border-t-neutral-900 border-r-[10px] border-r-transparent"
	/>
	<div class="flex flex-row gap-5 items-center w-full bg-neutral-850 px-4 py-1 rounded-md">
		<p>Flxw#7928</p>
		<div
			class="bg-neutral-800 p-2 rounded-xl cursor-pointer"
            on:click={copyUsername}
            on:keydown={copyUsername}
		>
			<Copy size={16} />
		</div>
	</div>
</div>

<script lang="ts">
	export let title: string;
	export let color: string;
</script>

<div
	class="text-white font-semibold text-2xl {color} w-fit px-14 py-4 rounded-2xl cursor-pointer transition-all ease-in-out"
>
	<p>{title}</p>
</div>

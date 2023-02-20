<script lang="ts">
	export let title: string;
	export let color: string;
</script>

<div
	class="text-white font-semibold text-lg sm:text-xl {color} hover:-translate-y-1 hover:shadow-md w-fit px-9 py-3 rounded-lg cursor-pointer transition-all ease-linear"
>
	<p>{title}</p>
</div>

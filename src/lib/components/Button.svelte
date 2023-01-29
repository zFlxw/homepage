<script lang="ts">
	export let title: string;
	export let color: string;
</script>

<div
	class="text-white font-semibold text-xl sm:text-2xl {color} hover:scale-105 hover:shadow-md w-fit px-14 py-4 rounded-2xl cursor-pointer transition-all ease-linear"
>
	<p>{title}</p>
</div>

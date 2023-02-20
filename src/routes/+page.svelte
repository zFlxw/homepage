<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/views/Hero.svelte';
	import About from '$lib/views/About.svelte';
	import Projects from '$lib/views/Projects.svelte';
	import Footer from '$lib/views/Footer.svelte';
	import { onMount } from 'svelte';

	$: loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<!-- {#if !loaded}
	<div class="flex flex-col justify-center w-fit h-screen mx-auto transition-all duration-500">
		<h1 class="text-7xl">Loading ...</h1>
		<div class="animate-spin">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="128px"
				height="128px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
				style="margin-right:-2px;display:block;background-repeat-y:initial;background-repeat-x:initial;animation-play-state:paused"
				><circle
					cx="50"
					cy="50"
					fill="none"
					stroke="#93dbe9"
					stroke-width="10"
					r="35"
					stroke-dasharray="164.93361431346415 56.97787143782138"
					transform="matrix(1,0,0,1,0,0)"
					style="transform:matrix(1, 0, 0, 1, 0, 0);animation-play-state:paused"
				/></svg
			>
		</div>
	</div>
{:else} -->
	<div class="transition-all duration-500">
		<Navbar />
		<Hero />
		<About />
		<Projects />
		<Footer />
	</div>
<!-- {/if} -->

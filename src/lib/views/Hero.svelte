<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import { Mouse } from 'lucide-svelte';
</script>

<div id="hero" class="hero-bg h-screen bg-cover flex justify-center items-center -z-20">
	<div class="h-full flex items-center">
		<img src="assets/avatar.jpg" alt="Avatar" class="w-96 h-96 rounded-full shadow-2xl" />
	</div>
	<div class="ml-12">
		<h1 class="text-white text-6xl font-semibold">EHLO Maik</h1>
		<h3 class="text-white mt-5 text-3xl w-full max-w-5xl">
			My name is Maik and I create stuff. Oh, you want to know what stuff? <br/> Find out here!
		</h3>
		<div class="mt-14 flex gap-6">
			<a href="#about-me"><Button title="About Me" color="bg-primary" /></a>
			<a href="#my-projects"><Button title="Projects" color="bg-secondary" /></a>
		</div>
	</div>
	<div class="absolute bottom-12 left-50 -translate-x-1/2 z-10">
		<Mouse size={48} strokeWidth={1} color="#fff"  />
	</div>
</div>

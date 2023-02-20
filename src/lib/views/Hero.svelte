<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import { Mouse } from 'lucide-svelte';
</script>

<div id="hero" class="hero-bg py-12 min-h-screen bg-cover bg-center xs:px-20 flex flex-col xl:flex-row justify-center items-center gap-12 -z-20">
	<div class="xl:h-full flex items-center">
		<img src="assets/avatar_eyes.png" alt="Avatar" class="w-64 h-64 2xs:w-80 2xs:h-80 2xl:w-[32rem] 2xl:h-[32rem]" />
	</div>
	<div class="text-center xl:text-left px-4">
		<h1 class="text-white text-4xl 2xl:text-5xl font-semibold">EHLO Maik</h1>
		<h3 class="text-white mt-5 text-2xl 2xl:text-2xl w-full max-w-5xl">
			My name is Maik and I create stuff. Oh, you want to know what stuff? <br/> Find out here!
		</h3>
		<div class="mt-8 sm:mt-14 flex flex-col sm:flex-row gap-1 sm:gap-6 justify-center items-center xl:justify-start">
			<a href="#about-me"><Button title="About Me" color="bg-primary" /></a>
			<a href="#my-projects"><Button title="Projects" color="bg-secondary" /></a>
		</div>
	</div>
	<div class="hidden xl:block absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
		<Mouse size={48} strokeWidth={1} color="#fff"  />
	</div>
</div>

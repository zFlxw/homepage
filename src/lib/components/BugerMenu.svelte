<script>
	import { Home, Layers, User } from 'lucide-svelte';
	import { burgerMenuStore } from '$lib/stores/burger-menu.store';

	function closeBurgerMenu() {
		burgerMenuStore.set(false);
	}
</script>

<div class="fixed w-full h-screen bg-neutral-1000 z-40">
	<div class="relative inline-block w-full h-1/6 mt-16">
		<h1 class="text-arctic text-5xl font-semibold mt-6 text-center cool-hr">Navigation</h1>
	</div>
	<ul
		class="w-full h-5/6 text-arctic text-center text-3xl flex flex-col justify-center gap-12 items-center"
	>
		<li class="w-full flex justify-center border-y-2 border-neutral-975 py-4">
			<a class="flex flex-row gap-2 items-center" href="#hero" on:click={closeBurgerMenu}
				><Home size={32} /> Home</a
			>
		</li>
		<li class="w-full flex justify-center border-y-2 border-neutral-975 py-4">
			<a class="flex flex-row gap-2 items-center" href="#about-me" on:click={closeBurgerMenu}
				><User /> About Me</a
			>
		</li>
		<li class="w-full flex justify-center border-y-2 border-neutral-975 py-4">
			<a class="flex flex-row gap-2 items-center" href="#my-projects" on:click={closeBurgerMenu}
				><Layers /> My Projects</a
			>
		</li>
	</ul>
</div>

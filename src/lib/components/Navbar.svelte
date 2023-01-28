<script lang="ts">
	import { Home, User, Layers } from 'lucide-svelte';
	import { onMount } from 'svelte/internal';

	const iconSize = 24;
	let scrollY: number;
	let solidNavbar: boolean;
	let handleScroll: () => void;

	const transparentBarClasses =
		'fixed bg-white w-screen h-16 bg-opacity-0 bg-blend-overlay shadow-md backdrop-blur-md';
	const solidBarClasses = 'fixed bg-neutral-900 w-screen h-16 z-10';

	onMount(() => {
		handleScroll = () => {
			const heroElement = document.getElementById('hero');
			const rect = heroElement!.getBoundingClientRect();
			solidNavbar = !(0 <= window.scrollY && rect.height > window.scrollY);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
	});
</script>

<nav class={!solidNavbar ? transparentBarClasses : solidBarClasses}>
	<ul class="flex justify-center gap-24 h-full items-center text-2xl text-white font-semibold">
		<li>
			<a
				class="flex flex-row items-center gap-3 hover:text-primary transition-all ease-in-out"
				href=""><Home size={iconSize} />Home</a
			>
		</li>
		<li>
			<a
				class="flex flex-row items-center gap-3 hover:text-primary transition-all ease-in-out"
				href=""><User size={iconSize} />About Me</a
			>
		</li>
		<li>
			<a
				class="flex flex-row items-center gap-3 hover:text-primary transition-all ease-in-out"
				href=""><Layers size={iconSize} />My Projects</a
			>
		</li>
	</ul>
</nav>

<svelte:window bind:scrollY />

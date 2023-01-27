<script lang="ts">
    import { Home, User, Layers } from 'lucide-svelte';

    const iconSize = 36;
</script>

<nav
	class="fixed bg-arctic w-screen h-24 bg-opacity-[25%] bg-blend-overlay shadow-md backdrop-blur-md"
>
	<ul class="flex justify-center gap-24 h-full items-center text-4xl text-white font-semibold">
		<li><a class="flex flex-row items-center gap-3" href=""><Home size={iconSize}/>Home</a></li>
		<li><a class="flex flex-row items-center gap-3" href=""><User size={iconSize} />About Me</a></li>
		<li><a class="flex flex-row items-center gap-3" href=""><Layers size={iconSize} />My Projects</a></li>
	</ul>
</nav>

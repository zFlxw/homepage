<script lang="ts">
	import Button from '../components/Button.svelte';
	import CyclingObject from '../components/CyclingObject.svelte';

	const age = Math.abs(
		new Date(Date.now() - new Date('2005-01-23').getTime()).getUTCFullYear() - 1970
	);
	const codingStart = Math.abs(
		new Date(Date.now() - new Date('2017-02-04').getTime()).getUTCFullYear() - 1970
	);
</script>

<div id="about-me" class="h-screen bg-arctic mt-24 w-full text-center">
	<div class="relative inline-block ">
		<h1 class="text-7xl font-semibold mt-12 text-center block cool-hr">About Me</h1>
	</div>
	<CyclingObject entries={['Developer', 'Student', 'Gamer', 'Idiot']} />
	<div class="flex flex-col gap-24 text-left mx-auto mt-24 w-full max-w-6xl">
		<div>
			<h3 class="font-bold text-4xl">Introduction</h3>
			<p class="mt-4 text-2xl leading-9">
				My name is Maik and I am a student and hobby-developer from Germany. At the moment you are
				reading this, I am <strong title="23. Jan. 2005" class="cursor-help">{age} years old</strong
				>. I started coding
				<strong title="04. Feb. 2017" class="cursor-help">{codingStart} years ago</strong>, at the
				age of 12. Coding has always been my passion and I am looking forward to study computer
				science after my Abitur.
			</p>
		</div>
		<div>
			<h3 class="font-bold text-4xl">My Early Years Of Coding</h3>
			<div class="relative">
				<p class="mt-4 text-2xl leading-9">
					My coding journey started with Minecraft Spigot plugins. I was 12 years old and I wanted to create
					my own plugins, so I started watching some tutorials on YouTube. As I had no knowledge of Java nor
					any other programming language at this points, the plugins were pretty
				</p>
				<div class="absolute top-0 left-0 bg-gradient-to-t from-white to-transparent w-full h-full"></div>
			</div>
		</div>
		<div class="-mt-8">
			<Button title="Learn More" color="bg-primary" />
		</div>
	</div>
</div>

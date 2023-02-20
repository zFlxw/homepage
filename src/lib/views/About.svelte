<script lang="ts">
	import Button from '../components/Button.svelte';

	let extended = false;

	const age = Math.abs(
		new Date(Date.now() - new Date('2005-01-23').getTime()).getUTCFullYear() - 1970
	);
	const codingStart = Math.abs(
		new Date(Date.now() - new Date('2017-02-04').getTime()).getUTCFullYear() - 1970
	);

	function extend() {
		extended = true;
	}
</script>

<div id="about-me" class="min-h-fit py-16 bg-arctic w-full text-center">
	<div class="relative inline-block ">
		<h1 class="text-5xl md:text-6xl font-semibold mt-6 md:mt-12 text-center block cool-hr">About Me</h1>
	</div>
	<h2 class="text-2xl mt-12">Learn about my journey here!</h2>
	<div class="flex flex-col gap-24 text-left mx-auto mt-16 md:mt-24 w-full max-w-6xl px-8 xl:px-0">
		<div>
			<h3 class="font-bold text-2xl md:text-3xl">Introduction</h3>
			<p class="mt-4 text-xl md:text-2xl leading-9">
				My name is Maik and I am a student and hobby-developer from Germany. At the moment you are
				reading this, I am <strong title="23. Jan. 2005" class="cursor-help">{age} years old</strong
				>. I started coding
				<strong title="04. Feb. 2017" class="cursor-help">{codingStart} years ago</strong>, at the
				age of 12. Coding has always been my passion and I am looking forward to study computer
				science after my Abitur.
			</p>
		</div>
		<div>
			<h3 class="font-bold text-2xl md:text-3xl">My Early Years Of Coding (2017 - 2019)</h3>
			<div class="relative">
				{#if !extended}
					<p class="mt-4 text-xl md:text-2xl leading-9">
						My coding journey started with Minecraft Spigot plugins. I was 12 years old and I wanted
						to create my own plugins, so I started watching some tutorials on YouTube. As I had no
						knowledge of Java nor any other programming language at this points, the plugins were
						pretty
					</p>
					<div
						class="absolute top-0 left-0 bg-gradient-to-t from-white to-transparent w-full h-full"
					/>
				{:else}
					<p class="mt-4 text-xl md:text-2xl leading-9">
						My coding journey started with Minecraft Spigot plugins. I was 12 years old and I wanted
						to create my own plugins, so I started watching some tutorials on YouTube. As I had no
						knowledge of Java nor any other programming language at this points, the plugins were
						pretty bad and I had to learn a lot. <br /><br />
						After a few months of only creating plugins, I started to learn the
						<strong>Java</strong> language. It was a harsh start, I tried multiple times and failed every
						time. After each try, there were multiple breaks from coding at all, but I started over and
						over again.
					</p>

					<h3 class="font-bold text-2xl md:text-3xl mt-24">The First Milestone: Melion (2020 - 2021)</h3>
					<p class="mt-4 text-xl md:text-2xl leading-9">
						After my gradution from middle school, I wanted to finally restart my coding journey. I
						found YouTube tutorials on making Discord bots in Java made by <a
							href="https://www.youtube.com/@CoasterFreakDE"
							target="_blank"
							rel="noreferrer">CoasterFreakDE</a
						>. After watching these videos, I joined his Discord server and eventually became a
						developer for the Minecraft and Discord project
						<a href="https://devsky.one" target="_blank" rel="noreferrer">Melion</a>. <br /><br />
						Melion was a very important project for me as a developer, as I met multiple people who helped
						me improve my skills. Special thanks to
						<a href="https://github.com/DreamTexX" target="_blank" rel="noreferrer">DreamTexX</a>,
						<a href="https://github.com/zFl4wless" target="_blank" rel="noreferrer">Fl4wless</a>,
						<a href="https://github.com/cheetahbyte" target="_blank" rel="noreferrer">Leo</a>, and
						<a href="https://github.com/Morazzer" target="_blank" rel="noreferrer">Morazzer</a>! I
						learned way more than just creating Discord bots or Minecraft plugins. For example I was
						first exposed to administrating a server, working with websockets and databases and also
						I learned a lot about API and coding principles. To sum it up, I learned more in this
						six months than in the prevoius three years.
					</p>

					<h3 class="font-bold text-2xl md:text-3xl mt-24">New Track Unlocked: Web Development (2022)</h3>
					<p class="mt-4 text-xl md:text-2xl leading-9">
						The time at Melion (and especially the time with <i>DreamTexX</i>) showed me that I was
						more interested in web development than in Minecraft plugins. I had some basic
						understanding of <strong>HTML</strong> and <strong>CSS</strong>, but I wanted to improve
						this knowledge. My first project of 2022 was
						<a href="https://github.com/zFlxw/vocab-trainer" target="_blank" rel="noreferrer"
							>vocab-trainer</a
						>, a simple vocabulary trainer made with
						<a href="https://vuejs.org" target="_blank" rel="noreferrer">VueJS</a>
						and <a href="https://expressjs.com" target="_blank" rel="noreferrer">ExpressJS</a>. Even
						though this project was never finished, it was a great start into web development.
						<br /><br />
						Around June, <i>Fl4wless</i> and I decided to create a new project together—<a
							href="https://metahond.codes"
							target="_blank"
							rel="noreferrer">Metahond</a
						>. Our first project was a Discord bot, but we quickly realised that we both wanted to
						focus more on web development and a fews weeks after this, the idea of Hondicard came
						up. We started developing
						<a href="https://hondicard.metahond.codes" target="_blank" rel="noreferrer">Hondicard</a
						> around August and on the 21st of January 2023, our first prototype version was finally
						released.
					</p>

					<h3 class="font-bold text-2xl md:text-3xl mt-24">What's Next? (2023)</h3>
					<p class="mt-4 text-xl md:text-2xl leading-9">
						2023 will be dedicated to the development of Hondicard. I am very excited to further
						improve my journey as a web developer and I am looking forward to the future. I am also
						trying to gain some knowledge in <strong>game development</strong> and
						<strong>3D-Modelling</strong>, but my main focus will be web development. One thing to
						mention here: Even though I am more of a backend developer, I am also trying to become a
						decent frontend developer.
					</p>

					<div
						class="mt-8"
						on:click={() => (extended = false)}
						on:keydown={() => (extended = false)}
					>
						<Button title="Collapse" color="bg-secondary" />
					</div>
				{/if}
			</div>
		</div>
		{#if !extended}
			<div class="-mt-8" on:click={extend} on:keydown={extend}>
				<Button title="Learn More" color="bg-primary" />
			</div>
		{/if}
	</div>
</div>

<style>
	a {
		color: theme('colors.primary');
	}
</style>

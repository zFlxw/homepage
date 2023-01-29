<script lang="ts">
	import Popup from '$lib/components/Popup.svelte';

	let emojiIndex = 0;
	const emojis = ['😡', '🥹', '😬'];
	let emoji: string = emojis[emojiIndex];

	let showDiscord = false;

	function transformEmoji() {
		emojiIndex = (emojiIndex + 1) % emojis.length;
		emoji = emojis[emojiIndex];
	}
</script>

<footer class="h-fit py-4 bg-neutral-1000 flex flex-col gap-10 md:gap-16">
	<div>
		<h1 class="text-arctic text-center text-4xl md:text-5xl font-semibold pt-4">Flxw</h1>
		<div class="text-arctic hidden 2xs:block text-xl md:text-2xl px-8 text-center font-petrona italic">
			<p class="quote">
				If you can't explain it to a six-year-old, you don't understand it yourself.
			</p>
			<p>~ Albert Einstein</p>
		</div>
	</div>

	<div class="w-full flex justify-center gap-8">
		<a href="https://github.com/zFlxw" target="_blank" rel="noreferrer"
			><img
				src="/assets/socials/github.svg"
				alt="GitHub"
				class="w-8 h-8 md:w-10 md:h-10 hover:invert transition-all ease-linear duration-200"
			/></a
		>
		<div class="relative">
			<img
				src="/assets/socials/discord.svg"
				alt="Discord"
				class="w-10 h-8 md:w-10 md:h-10  cursor-pointer brightness-0 invert hover:invert-0 hover:brightness-100 transition ease-linear duration-50"
				on:click={() => (showDiscord = !showDiscord)}
				on:keydown={() => (showDiscord = !showDiscord)}
			/>
			{#if showDiscord}
				<Popup />
			{/if}
		</div>
		<a href="https://instagram.com/i.am.flxw" target="_blank" rel="noreferrer"
			><img
				src="/assets/socials/instagram.svg"
				alt="Instagram"
				class="w-8 h-8 md:w-10 md:h-10  brightness-0 invert hover:invert-0 hover:brightness-100 transition ease-linear duration-50"
			/></a
		>
	</div>
	<div class="flex flex-col xs:flex-row items-center justify-center xs:justify-between w-full">
		<p class="text-center text-neutral-700 text-md md:text-lg mx-5">
			Designed and Coded by Flxw with <span
				class="text-primary cursor-default"
				on:keydown={transformEmoji}
				on:click={transformEmoji}>{emoji}</span
			>
		</p>
		<a href="/legal" class="mx-5 text-neutral-700 hover:underline">Legal</a>
	</div>
</footer>

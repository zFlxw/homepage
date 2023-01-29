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

<footer class="h-86 bg-neutral-1000 flex flex-col justify-around">
	<div>
		<h1 class="text-arctic text-center text-5xl font-semibold pt-4">Flxw</h1>
		<div class="text-arctic text-2xl text-center font-petrona italic">
			<p class="quote">
				If you can't explain it to a six-year-old, you don't understand it yourself.
			</p>
			<p>~ Albert Einstein</p>
		</div>
	</div>

	<div class="w-full flex justify-center gap-8">
		<a href="https://github.com/zFlxw" target="_blank" rel="noreferrer"
			><img src="/assets/socials/github.svg" alt="GitHub" class="w-10 h-10" /></a
		>
		<a href="https://instagram.com/i.am.flxw" target="_blank" rel="noreferrer"
			><img src="/assets/socials/instagram.svg" alt="GitHub" class="w-10 h-10" /></a
		>
		<div class="relative">
			<img
				src="/assets/socials/discord.png"
				alt="GitHub"
				class="w-12 h-10 cursor-pointer"
				on:click={() => (showDiscord = !showDiscord)}
				on:keydown={() => (showDiscord = !showDiscord)}
			/>
			{#if showDiscord}
				<Popup />
			{/if}
		</div>
	</div>
	<div class="flex justify-between w-full">
		<p class="text-center text-neutral-700 text-lg mx-5">
			Designed and Coded by Flxw with <span
				class="text-primary cursor-default"
				on:keydown={transformEmoji}
				on:click={transformEmoji}>{emoji}</span
			>
		</p>
		<a href="/legal" class="mx-5 text-neutral-700 hover:underline">Legal</a>
	</div>
</footer>

<script lang="ts">
	import { Link } from 'lucide-svelte';
	import ProjectTag from './ProjectTag.svelte';

	export let logoName: string;
	export let name: string;
	export let description: string;
	export let tagNames: string[];

	export let githubLink: string;
	export let websiteLink: string | undefined;
</script>

<div class="scale-75 xs:scale-90 sm:scale-100 pb-6 w-full max-w-md bg-neutral-850 rounded-2xl card-shadow">
	<div class="w-full rounded-t-2xl bg-neutral-900 pb-2">
		<img src="/assets/projects/{logoName}" alt="Project Logo" class="w-36 h-36 mx-auto" />
	</div>
	<div class="flex flex-col gap-12 sm:gap-20">
		<div class="text-left mx-8">
			<h1 class="text-arctic text-2xl mt-8 font-semibold">{name}</h1>
			<p class="text-xl text-arctic mt-4">
				{description}
			</p>
		</div>
		<div class="flex justify-center gap-12">
			<a
				href={githubLink}
				target="_blank"
				rel="noreferrer"
				class="hover:scale-110 transition ease-in-out"
				><img src="/assets/socials/github.svg" alt="GitHub Logo" class="h-10 w-10" /></a
			>
			{#if websiteLink}
				<a
					href={websiteLink}
					target="_blank"
					rel="noreferrer"
					class="hover:scale-110 transition ease-in-out"><Link color="#fff" size={40} /></a
				>
			{/if}
		</div>
		<div class="flex flex-row justify-evenly">
			{#each tagNames as tagName}
				<ProjectTag label={tagName} />
			{/each}
		</div>
	</div>
</div>

<style>
	.card-shadow {
		-webkit-box-shadow: 0px 0px 47px 2px rgba(0, 0, 0, 0.25);
		box-shadow: 0px 0px 47px 2px rgba(0, 0, 0, 0.25);
	}
</style>

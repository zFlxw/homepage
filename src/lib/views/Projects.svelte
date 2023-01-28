<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="bg-neutral-900 h-fit pt-16 pb-32 w-full text-center">
	<div class="relative inline-block">
		<h1 class="text-7xl text-arctic font-semibold mt-12 text-center block cool-hr">My Projects</h1>
	</div>
	<div class="mt-24 flex justify-evenly">
		<ProjectCard
			logoName="hondicard"
			name="Hondicard"
			description="Hondicard is a card-based learning platform with focus on collaborative learning and free-to-use features. It currently is in development."
			tagNames={['TypeScript', 'Learning', 'Collaboration']}
			githubLink="https://github.com/Metahond"
			websiteLink="https://hondicard.metahond.codes"
		/>
	</div>
</div>

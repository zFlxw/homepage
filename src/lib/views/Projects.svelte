<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div id="my-projects" class="bg-neutral-900 h-fit pt-16 pb-32 w-full text-center">
	<div class="relative inline-block">
		<h1 class="text-5xl sm:text-6xl text-arctic font-semibold mt-12 text-center block cool-hr">
			My Projects
		</h1>
	</div>
	<div
		class="w-full mt-24 grid lg:grid-cols-2 2xl:grid-cols-3 place-items-center gap-y-0 xs:gap-y-12"
	>
		<ProjectCard
			logoName="hondicard.png"
			name="Hondicard"
			description="Hondicard is a card-based learning platform with focus on collaborative learning and free-to-use features. It currently is in development."
			tagNames={['TypeScript', 'Learning', 'Collaboration']}
			githubLink="https://github.com/Metahond"
			websiteLink="https://hondicard.metahond.codes"
		/>
		<ProjectCard
			logoName="java.png"
			name="Sorting Algorithms"
			description="A Java repository with implementation of various sorting algorithms. It was made as a part of a school project and is not further developed."
			tagNames={['Algorithms', 'Java', 'OpenSource']}
			githubLink="https://github.com/zFlxw/sorting-algorithms"
			websiteLink={undefined}
		/>
		<ProjectCard
			logoName="typescript.png"
			name="Advent of Code"
			description="A TypeScript solution for the Advent of Code coding puzzles. I have multiple repositories for different years and languages. This is one of them."
			tagNames={['Thinking', 'TypeScript', 'Puzzles']}
			githubLink="https://github.com/zFlxw/advent-of-typescript"
			websiteLink="https://adventofcode.com/"
		/>
	</div>
</div>

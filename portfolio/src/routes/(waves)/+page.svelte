<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import type { Project } from '$lib/utils/types';
	import Experience from '$lib/components/organisms/Experience.svelte';
	import type WorkExperience from '$lib/data/work-experiences/model';

	export let data: {
		yearsOfExperience: number;
		experienceEntries: typeof WorkExperience[];
		projects: Project[];
	};

	let { yearsOfExperience, experienceEntries, projects } = data;
</script>

<div class="container">
	<Hero />
	<About />
	{#if projects && projects.length > 0}
		<Projects {projects} />
	{/if}
	<Experience {yearsOfExperience} entries={experienceEntries} />
</div>

<style lang="scss">
	@import '../../lib/scss/breakpoints.scss';
</style>

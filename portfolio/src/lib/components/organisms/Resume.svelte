<script lang="ts">
	import Contact from '$lib/components/molecules/resume/Contact.svelte';
	import Title from '$lib/components/molecules/resume/Title.svelte';
	import Photo from '$lib/components/molecules/resume/Photo.svelte';
	import SectionTitle from '$lib/components/molecules/resume/SectionTitle.svelte';
	import Experience from '$lib/components/molecules/resume/Experience.svelte';
	import Skills from '$lib/components/molecules/resume/Skills.svelte';
	import type WorkExperience from '$lib/data/work-experiences/model';

	export let yearsOfExperience: number;
	export let experienceEntries: WorkExperience[];
</script>

<article class="resume">
	<div class="blobs">
		<div class="blob one" />
		<div class="blob two" />
	</div>
	<section class="name-and-contact">
		<Title />
		<Contact {yearsOfExperience} />
	</section>
	<section class="photo">
		<Photo />
	</section>
	<section class="about">
		<SectionTitle>About</SectionTitle>
		<p>
			I am a DevSecOps Engineer with expertise in full-stack development and seamlessly integrating
			security throughout the software lifecycle. My diverse technical background spans desktop
			support, sales, and R&D, enabling me to drive projects at the cutting edge of technology and
			innovation. As a dedicated problem-solver and effective communicator, I excel in both
			independent and team environments, consistently delivering high-quality results.
		</p>
	</section>
	<section class="work">
		<SectionTitle>Professional Experience</SectionTitle>
		<Experience entries={experienceEntries} />
	</section>
	<section class="education">
		<SectionTitle>Education</SectionTitle>
		<p>
			B.Sc. in {' '}
			<b>Computer Science and Mathematics</b> at{' '}
			<i>Netanya Academic College</i>, 2023.
		</p>
		<br />
		<SectionTitle>Certifications</SectionTitle>
		<p>
			DevSecOps Course {' '}
			<b>MATAS</b> at{' '}
			<i>Unit Matzov, IDF</i>, 2023.
		</p>
	</section>
	<section class="skills">
		<SectionTitle>Skills</SectionTitle>
		<Skills />
	</section>
</article>

<style lang="scss">
	.resume {
		border-radius: 10px;
		padding: 35px 0 10px 0;
		color: var(--color--text);
		font-family: var(--font--default);
		font-size: 16px;
		background-color: var(--color--card-background);
		position: relative;
		overflow: hidden;

		display: grid;
		gap: 20px 30px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'photo'
			'name'
			'about'
			'work'
			'education'
			'skills';

		@media (min-width: 768px), print {
			padding: 30px 20px;
			grid-template-columns: 2fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;

			grid-template-areas:
				'name photo'
				'work about'
				'work about'
				'education skills';
		}

		@media (min-width: 900px), print {
			margin: 20px auto;
			max-width: 210mm;
			box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.6), 1px 3px 8px rgba(39, 44, 49, 0.3);
		}

		section {
			padding: 5px;
			border-radius: 10px;
			z-index: 1;

			&.name-and-contact {
				grid-area: name;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			&.photo {
				grid-area: photo;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			&.about {
				grid-area: about;

				p {
					text-align: justify;
				}
			}
			&.work {
				grid-area: work;
			}
			&.education {
				grid-area: education;

				p {
					text-align: justify;
				}
			}
			&.skills {
				grid-area: skills;
			}
		}

		.blobs {
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;

			.blob {
				position: absolute;
				background: rgba(var(--color--primary-shade-rgb), 0.2);

				&.one {
					border-radius: var(--radius-blob-4);
					height: 110%;
					width: 110%;
					top: -64%;
					right: -45%;
				}
				&.two {
					border-radius: var(--radius-blob-5);
					height: 45%;
					width: 45%;
					right: 0%;
					bottom: -8%;
					rotate: 45deg;
				}
			}
		}
	}

	// Print-specific styles
	@media print {
		.resume {
			box-shadow: none;
			margin: 0;
			padding: 10px 10px;
			max-height: 287mm;
			overflow: hidden;

			section {
				margin: 0;
			}

			.blob.two {
				display: none;
			}
		}

		:global(header) {
			display: none;
		}
		:global(footer) {
			display: none !important;
		}
	}

	@page {
		padding: 0;
		margin: 0cm;
		size: A4 portrait;
	}
</style>

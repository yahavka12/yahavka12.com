<script>
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import MediumIcon from '$lib/icons/socials/medium.svelte';
</script>

<div class="socials">
	<a
		href="https://github.com/yahavka12"
		target="_blank"
		rel="noopener noreferrer"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://medium.com/@yahavka12"
		target="_blank"
		rel="noopener noreferrer"
		title="See my Medium blog"
	>
		<MediumIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/yahav-kadar/"
		target="_blank"
		rel="noopener noreferrer"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<a
		href="mailto:yahavka12@gmail.com"
		target="_blank"
		rel="noopener noreferrer"
		title="Send an email to yahavka12@gmail.com"
	>
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>

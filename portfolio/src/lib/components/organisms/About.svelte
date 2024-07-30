<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ContentWithImage from '$lib/components/organisms/ContentWithImage.svelte';
	import AvatarWithBlobs from '$lib/components/molecules/AvatarWithBlobs.svelte';
</script>

<section id="about">
	<ContentWithImage>
		<div slot="title">
			<span style="display: none;">My name is Yahav Kadar</span>
			I'm a DevSecOps engineer aiming to build things that
			<SparklingHighlight color="secondary">spark joy</SparklingHighlight>
		</div>
		<div slot="content">
			<p>
				I believe software should be great for everyone — those who write it and those who use it —
				and that bringing joy to problem-solving is the key to that.
			</p>
		</div>
		<div slot="image">
			<AvatarWithBlobs />
		</div>
	</ContentWithImage>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
</style>

<script>
		import Socials from '$lib/components/molecules/Socials.svelte';

</script>

<section class="content-with-image">
	<div class="content">
		<h2>
			<slot name="title" />
		</h2>
		<slot name="content" />
		<div class="socials">
			<span>Socials:</span>
			<Socials />
		</div>
	</div>
	<div class="image">
		<slot name="image" />
	</div>
</section>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.content-with-image {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		// padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: 10px;

			:global([slot='content']) {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}

			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			@include for-phone-only {
				gap: 20px;
				:global([slot='content']) {
					gap: 20px;
				}
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			width: 250px;
			height: 250px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>

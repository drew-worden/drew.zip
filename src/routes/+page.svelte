<script lang="ts">
	// Imports
	import SlidingBanner from "$lib/components/SlidingBanner.svelte"
</script>

<div class="page">
	<img
		class="headshot"
		src="/headshot.jpeg"
		alt="Drew's headshot"
	/>
	<h1>Drew Worden</h1>
	<h2>Data Scientist & Machine Learning Engineer</h2>
	<a
		href="#intro"
		class="icon-wrapper blurred-card border row"
		aria-label="Scroll down to introduction"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#dac5a7"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-arrow-down arrow-icon"
			><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg
		>
	</a>
	<SlidingBanner />
	<section
		id="intro"
		class="about"
	>
		<p class="callout">Just a guy who likes mathematics and the things you can do with it.</p>
		<div class="about-right col">
			<p class="intro">
				Hi, I'm Drew Worden - a data scientist and machine learning engineer specializing in
				natural languages processing, large scale data engineering, transformers, and
				generative AI. My interests are broad, ranging from theoretical number theory to
				compiler optimization techniques. Currently I work for IBM where I architect, build,
				and deploy generative AI solutions at scale in the finacial services sector. I love
				picking up new technologies and working on new stuff, so if you have something
				interesting you might want to collaborate on, please reach out.
			</p>
			<div class="socials row">
				<a
					class="icon-wrapper blurred-card border row"
					href="https://github.com/drew-worden"
					target="_blank"
					aria-label="GitHub Profile"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#dac5a7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-github"
						><path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
					></a
				>
				<a
					class="icon-wrapper blurred-card border row"
					href="https://www.linkedin.com/in/drewpworden/"
					target="_blank"
					aria-label="LinkedIn Profile"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#dac5a7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-linkedin"
						><path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/><rect
							width="4"
							height="12"
							x="2"
							y="9"
						/><circle
							cx="4"
							cy="4"
							r="2"
						/></svg
					></a
				>
				<a
					href="https://medium.com/@drewpworden"
					target="_blank"
					class="icon-wrapper blurred-card border row"
					aria-label="Medium Profile"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#dac5a7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-rss"
						><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle
							cx="5"
							cy="19"
							r="1"
						/></svg
					></a
				>
				<a
					href="https://www.youtube.com/@drew-worden"
					target="_blank"
					class="icon-wrapper blurred-card border row"
					aria-label="YouTube Profile"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#dac5a7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-youtube"
						><path
							d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
						/><path d="m10 15 5-3-5-3z" /></svg
					></a
				>
				<a
					href="https://www.instagram.com/drew.worden/"
					target="_blank"
					class="icon-wrapper blurred-card border row"
					aria-label="Instagram Profile"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#dac5a7"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-instagram"
						><rect
							width="20"
							height="20"
							x="2"
							y="2"
							rx="5"
							ry="5"
						/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line
							x1="17.5"
							x2="17.51"
							y1="6.5"
							y2="6.5"
						/></svg
					></a
				>
			</div>
		</div>
	</section>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.headshot {
		width: 500px;
		margin: 0 auto;
		margin-top: 64px;
	}

	h1 {
		font-family: satoshi-italic;
		color: var(--font-color);
		font-weight: 300;
		font-size: 128px;
		margin-top: 16px;
	}

	h2 {
		font-family: outfit;
		color: var(--font-color);
		font-weight: 300;
		font-size: 24px;
		margin-bottom: 32px;
	}

	.about {
		margin-top: 64px;
	}

	.icon-wrapper {
		justify-content: center;
		border-radius: 50%;
		cursor: pointer;
	}

	.icon-wrapper:hover {
		box-shadow: var(--font-color) 0px 0px 25px -10px;
	}

	.about {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 64px;
	}

	.callout {
		font-family: satoshi;
		font-weight: 300;
		font-size: 48px;
		color: var(--font-color);
	}

	.about-right {
		gap: 32px;
	}

	.intro {
		font-family: outfit;
		font-weight: 100;
		font-size: 18px;
		color: var(--font-color);
		letter-spacing: 0.5px;
	}

	.socials {
		gap: 12px;
	}

	@media (max-width: 1600px) {
		.about {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.callout {
			text-align: center;
			max-width: 800px;
			margin: 0 auto;
		}

		.about-right {
			align-items: center;
		}

		.intro {
			max-width: 1000px;
			margin: 0 auto;
		}
	}

	@media (max-width: 1200px) {
		.headshot {
			width: 400px;
		}

		h1 {
			font-size: 80px;
		}

		h2 {
			font-size: 22px;
		}
	}

	@media (max-width: 810px) {
		.headshot {
			width: 239px;
			margin-top: 84px;
		}

		h1 {
			font-size: 60px;
		}

		h2 {
			font-size: 18px;
			margin-bottom: 24px;
		}

		.icon-wrapper > svg {
			width: 16px;
			height: 16px;
		}

		.about {
			margin-top: 32px;
		}

		.callout {
			font-size: 36px;
		}

		.intro {
			font-size: 16px;
		}
	}

	@media (max-width: 600px) {
		.headshot {
			width: 200px;
			margin-top: 90px;
		}

		h1 {
			font-size: 48px;
		}

		h2 {
			font-size: 15px;
			margin-bottom: 16px;
		}

		.about {
			margin-top: 24px;
		}

		.icon-wrapper > svg {
			width: 14px;
			height: 14px;
		}

		.callout {
			font-size: 24px;
		}

		.intro {
			font-size: 14px;
		}
	}
</style>

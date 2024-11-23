<div class="page">
	<img
		class="headshot"
		src="headshot.jpeg"
		alt="Drew's headshot"
	/>
	<h1>Drew Worden</h1>
	<h2>Data Scientist & Machine Learning Engineer</h2>
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
	}

	@media (max-width: 1280px) {
		.headshot {
			width: 400px;
		}

		h2 {
			font-size: 22px;
		}
	}

	@media (max-width: 1200px) {
		h1 {
			font-size: 80px;
		}
	}

	@media (max-width: 810px) {
		.headshot {
			width: 239px;
		}

		h1 {
			font-size: 64px;
		}

		h2 {
			font-size: 18px;
		}
	}
</style>

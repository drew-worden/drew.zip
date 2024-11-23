<div class="page">
	<img
		class="headshot"
		src="/headshot.jpeg"
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
		margin-top: 48px;
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

	@media (max-width: 1200px) {
		.headshot {
			width: 400px;
			margin-top: 40px;
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
			margin-top: 32px;
		}

		h1 {
			font-size: 60px;
		}

		h2 {
			font-size: 18px;
		}
	}

	@media (max-width: 600px) {
		.headshot {
			width: 200px;
			margin-top: 24px;
		}

		h1 {
			font-size: 48px;
		}

		h2 {
			font-size: 15px;
		}
	}
</style>

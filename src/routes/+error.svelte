<script lang="ts">
	// Imports
	import { page } from "$app/stores"
</script>

<div class="page col-center">
	<span class="small-text">404</span>
	<p class="message">{$page.error?.message}</p>
    <a href="/" class="button">Back to Home</a>
</div>

<style>
	.page {
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		justify-content: center;
        z-index: -1;
        gap: 8px;
	}

    .message {
        font-family: satoshi;
		font-weight: 400;
        color: var(--font-color);
        font-size: 64px;
    }

    @media (max-width: 600px) {
        .message {
            font-size: 48px;
        }
    }
</style>

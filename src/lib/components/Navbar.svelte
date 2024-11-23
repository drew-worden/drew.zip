<script lang="ts">
	// Imports
	import { fly } from "svelte/transition"

	// State
	let open = false
</script>

<nav class="blurred-card border row-center">
	<a href="/"><span class="tag">drew.</span></a>
	<div class="links row-center">
		<a
			href="/about"
			class="link">About</a
		>
		<a
			href="/experience"
			class="link">Experience</a
		>
		<a
			href="/projects"
			class="link">Projects</a
		>
		<a
			href="/resume"
			class="link">Resume</a
		>
		<a
			href="/blog"
			class="link">Blog</a
		>
		<a
			href="/contact"
			class="contact link">Contact</a
		>
	</div>
	<a
		href="/contact"
		class="contact responsive link">Contact</a
	>
	<svg
		role="none"
		on:click={() => (open = !open)}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="#dac5a7"
		stroke-width="2"
		class="lucide lucide-menu menu-icon"
		><line
			x2={open ? "13" : "20"}
			y1="12"
			y2="12"
		/><line
			x2={open ? "7" : "20"}
			y1="6"
			y2="6"
		/><line
			x2={open ? "20" : "20"}
			y1="18"
			y2="18"
		/></svg
	>
	{#if open}
		<div
			class="col-center links-menu blurred-card border"
			transition:fly
		>
			<a
				href="/about"
				class="link">About</a
			>
			<a
				href="/experience"
				class="link">Experience</a
			>
			<a
				href="/projects"
				class="link">Projects</a
			>
			<a
				href="/resume"
				class="link">Resume</a
			>
			<a
				href="/blog"
				class="link">Blog</a
			>
		</div>
	{/if}
</nav>

<style>
	nav {
		width: fit-content;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		padding: 12px 12px 12px 20px;
		position: relative;
	}

	.tag {
		font-family: outfit;
		color: var(--font-color);
		font-size: 24px;
		margin-right: 24px;
	}

	.links {
		gap: 16px;
	}

	.link {
		font-family: satoshi;
		font-weight: 500;
		text-transform: uppercase;
		color: var(--font-color);
		font-size: 13px;
		position: relative;
		letter-spacing: 1px;
	}

	.link::after {
		content: "";
		position: absolute;
		height: 1px;
		left: 0;
		bottom: 0;
		width: 0;
		background: var(--font-color);
		transition: width 0.2s ease-in-out;
	}

	.link:hover::after {
		width: 100%;
	}

	.contact {
		background-color: var(--font-color);
		color: var(--font-color-dark) !important;
		padding: 8px 16px;
		border-radius: 2px;
	}

	.contact:hover {
		box-shadow: var(--font-color) 0px 0px 25px -10px;
	}

	.menu-icon {
		display: none;
		cursor: pointer;
		transform: rotate(180deg);
	}

	.links-menu {
		position: absolute;
		top: calc(100% + 16px);
		width: 100%;
		left: 0;
		display: none;
		gap: 12px;
		padding: 24px;
	}

	.responsive {
		display: none;
		margin-left: auto;
		margin-right: 8px;
	}

	@media (max-width: 810px) {
		nav {
			width: 100%;
		}

		.links {
			display: none;
		}

		.menu-icon {
			display: block;
		}

		.links-menu {
			display: flex;
		}

		.responsive {
			display: block;
		}
	}
</style>

<script lang="ts">
	//Import components
	import ProfilePhoto from "./ProfilePhoto.svelte"
	import Icon from "./Icon.svelte"
</script>

<header>
	<div class="content">
		<nav>
			<a
				href="/"
				style="{'align-items: center;'}"
			>
				<ProfilePhoto
					size="{24}"
					rounded
				/>
				<span class="icon-text">drew.zip</span>
			</a>
			<a
				href="/credentials"
				class="links">Credentials</a
			>
			<a
				href="/blog"
				class="links">Blog</a
			>
			<a
				href="/resume"
				class="links special-link">Resume</a
			>
			<a
				href="/contact"
				class="links">Contact</a
			>
		</nav>
		<div class="shortcut-container">
			<Icon
				target="_blank"
				href="https://github.com/drew-worden"
				size="{20}"
				tooltipPosition="bottom"
				tooltipText="GitHub"
				iconPath="src/assets/icons/github.svg"
			/>
			<Icon
				target="_blank"
				href="https://www.linkedin.com/in/drewpworden/"
				size="{20}"
				tooltipPosition="bottom"
				tooltipText="LinkedIn"
				iconPath="src/assets/icons/linkedin.svg"
			/>
			<Icon
				size="{20}"
				tooltipPosition="bottom"
				tooltipText="Dashboard"
				iconPath="src/assets/icons/dashboard.svg"
			/>
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid hsl(var(--border-color));
	}

	.content {
		max-width: 1536px;
		width: 1536px;
		padding: 0px 32px;
		height: 56px;
		display: flex;
		align-items: center;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.icon-text {
		font-family: geist;
		font-weight: 700;
		color: var(--l1-text-color);
		font-size: 16px;
		margin-left: 8px;
	}

	.links {
		font-family: geist;
		font-weight: 500;
		color: #fafafa99;
		font-size: 14px;
		line-height: 1.25rem;
		transition: all 0.1s linear;
	}

	.special-link {
		color: #fafafaef;
	}

	.links:hover {
		color: #c6c6c6;
	}

	.shortcut-container {
		display: flex;
		align-items: center;
		margin-left: auto;
	}
</style>

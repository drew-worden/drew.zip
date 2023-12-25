<script lang="ts">
	//Import components
	import ProfilePhoto from "./ProfilePhoto.svelte"
	import Icon from "./Icon.svelte"
	import StatusBadge from "./StatusBadge.svelte"
	import Popover from "./Popover.svelte"
	import HorizontalDivider from "./HorizontalDivider.svelte";
	import Button from "./Button.svelte";
	import LockIcon from "./icons/LockIcon.svelte";

	//State
	let dashboardPopover = false

	$: if (dashboardPopover) {
		console.log("dashboardPopover", dashboardPopover)
	}
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
				class="links">Resume</a
			>
			<a
				href="/contact"
				class="links">Contact</a
			>
		</nav>
		<div class="shortcut-container">
			<div style="margin-right: 8px;">
				<StatusBadge
					variant="busy"
					text="Enjoying Christmas 🎄"
					tooltipPosition="bottom"
				/>
			</div>
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
			<div style="position: relative;">
				<Icon
					size="{20}"
					tooltipPosition="bottom"
					tooltipText="Apps"
					iconPath="src/assets/icons/dashboard.svg"
					on:click="{() => {
						dashboardPopover = !dashboardPopover
					}}"
					tooltipBlocker="{dashboardPopover}"
				/>
				<Popover
					position="bottom-right"
					bind:open="{dashboardPopover}"
				>
					<h3 class="app-popover-title">Drew's Applications</h3>
					<p class="app-popover-subtitle">A personal suite of custom applications on private servers.</p>
					<HorizontalDivider margin={16}/>
					<div class="app-popover-card-container">
						<div class="app-popover-card border-thick">
							<img src="/src/assets/icons/doc.svg" alt="doc icon">
							<span class="app-popover-card-title">Blog Publisher</span>
						</div>
						<div class="app-popover-card border-thick">
							<img src="/src/assets/icons/archive.svg" alt="archive icon">
							<span class="app-popover-card-title">Archive</span>
						</div>
						<div class="app-popover-card border-thick">
							<img src="/src/assets/icons/calendar.svg" alt="calendar icon">
							<span class="app-popover-card-title">Calendar</span>
						</div>
						<div class="app-popover-card border-thick">
							<img src="/src/assets/icons/clipboard.svg" alt="clipboard icon">
							<span class="app-popover-card-title">Project Manager</span>
						</div>
						<div class="app-popover-card border-thick">
							<img src="/src/assets/icons/chat.svg" alt="chat icon">
							<span class="app-popover-card-title">Messaging</span>
						</div>
						<div class="app-popover-card border-thick">
							<img src="/src/assets/icons/camera.svg" alt="camera icon">
							<span class="app-popover-card-title">Video Chat</span>
						</div>
					</div>
					<HorizontalDivider margin={16}/>
					<Button variant="primary" size="fill" text="Access">
						<LockIcon size={16} fillColor="#18181b"/>
					</Button>
				</Popover>
			</div>
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
		padding: 0px 12px 0px 16px;
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

	.links:hover {
		color: #c6c6c6;
	}

	.shortcut-container {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	.app-popover-title {
		font-family: geist;
		font-weight: 400;
		color: var(--l1-text-color);
		font-size: 14px;
		margin-bottom: 6px;
	}

	.app-popover-subtitle {
		font-family: geist;
		font-weight: 400;
		color: var(--l2-text-color);
		font-size: 14px;
		line-height: unset;
	}

	.app-popover-card-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		
	}

	.app-popover-card {
		border-radius: 6px;
		padding: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: all 0.1s linear;
	}

	.app-popover-card:hover {
		background-color: #292524;
		cursor: pointer;
	}

	.app-popover-card > img {
		width: 24px;
		margin-bottom: 0.75rem;
	}

	.app-popover-card-title {
		font-family: geist;
		font-weight: 500;
		color: var(--l1-text-color);
		font-size: .875rem;
	}
</style>

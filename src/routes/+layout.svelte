<!-- Scripts -->
<script lang="ts">
	// Imports
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SkipToContent,
		Content,
		Button
	} from "carbon-components-svelte"
	import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte"
	import "carbon-components-svelte/css/g100.css"
	import "../app.css"
</script>

<!-- Markup -->
<Header
	platformName="Drew Worden"
	href="/"
>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem
			href="/projects"
			text="Projects"
		/>
	</HeaderNav>
	<div class="right-buttons">
		<Button
			href="https://github.com/drew-worden/drew.zip"
			target="_blank"
			iconDescription="Source Code"
			icon={LogoGithub}
			kind="ghost"
			tooltipAlignment="end"
			tooltipPosition="bottom"
		/>
	</div>
</Header>
<Content>
	<slot />
</Content>

<!-- Styles -->
<style>
	.right-buttons {
		margin-left: auto;
	}
</style>

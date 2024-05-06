<!-- Scripts -->
<script lang="ts">
	// Imports
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SkipToContent,
		Content
	} from "carbon-components-svelte"
	import "carbon-components-svelte/css/g100.css"
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
		<!--<HeaderNavMenu text="Menu">
			<HeaderNavItem
				href="/"
				text="Link 1"
			/>
			<HeaderNavItem
				href="/"
				text="Link 2"
			/>
			<HeaderNavItem
				href="/"
				text="Link 3"
			/>
		</HeaderNavMenu>-->
	</HeaderNav>
</Header>

<Content>
	<slot />
</Content>

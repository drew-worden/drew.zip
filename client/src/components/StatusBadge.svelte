<script lang="ts">
	//Import types
	import type { StatusIndicatorVariant, ToolTipPosition } from "../types/components"

	//Import components
	import Badge from "./Badge.svelte"
	import StatusIndicator from "./StatusIndicator.svelte"
	import ToolTip from "./ToolTip.svelte"

	//Props
	export let text: string
	export let variant: StatusIndicatorVariant
	export let tooltipPosition: ToolTipPosition = "left"

	//State
	let tooltip = false
</script>

<div
	role="contentinfo"
	class="wrapper"
	on:mouseenter="{() => (tooltip = true)}"
	on:mouseleave="{() => (tooltip = false)}"
>
	<Badge variant="primary">
		<StatusIndicator
			size="{8}"
			{variant}
		/>
		{text}
	</Badge>
	{#if tooltip}
		<ToolTip
			position="{tooltipPosition}"
			text="{`Status: ${variant.charAt(0).toUpperCase() + variant.slice(1)}`}"
		/>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		cursor: default;
	}
</style>

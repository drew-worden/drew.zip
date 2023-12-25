<script lang="ts">
	//Import components
	import ToolTip from "./ToolTip.svelte"

	//Import types
	import type { ToolTipPosition, AnchorTarget } from "../types/components"

	//Props
	export let href: string = ""
	export let iconPath: string = ""
	export let tooltipText: string = ""
	export let tooltipPosition: ToolTipPosition = "bottom"
	export let tooltipBlocker = false
	export let size = 24
	export let target: AnchorTarget = "_self"

	//State
	let tooltipState = false
</script>

{#if href}
	<a
		{href}
		{target}
		class="link-button"
		on:click
		on:click="{() => {
			tooltipState = false
		}}"
		on:mouseenter="{() => (tooltipState = true)}"
		on:mouseleave="{() => (tooltipState = false)}"
	>
		<img
			class="icon"
			src="{iconPath}"
			alt="icon"
			style="{`width: ${size}px; height: ${size}px;`}"
		/>
		{#if tooltipState}
			<ToolTip
				text="{tooltipText}"
				position="{tooltipPosition}"
				blocker="{tooltipBlocker}"
			/>
		{/if}
	</a>
{:else}
	<button
		class="link-button"
		on:click
		on:click="{() => (tooltipState = false)}"
		on:mouseenter="{() => (tooltipState = true)}"
		on:mouseleave="{() => (tooltipState = false)}"
	>
		<img
			style="{`width: ${size}px; height: ${size}px;`}"
			src="{iconPath}"
			alt="icon"
		/>
		{#if tooltipState}
			<ToolTip
				text="{tooltipText}"
				position="{tooltipPosition}"
				blocker="{tooltipBlocker}"
			/>
		{/if}
	</button>
{/if}

<style>
	.link-button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		border-radius: 8px;
		transition: all 0.1s linear;
		position: relative;
		background-color: none;
		cursor: pointer;
	}

	.link-button:hover {
		background-color: #292524;
	}
</style>

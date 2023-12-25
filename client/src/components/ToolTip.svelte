<script lang="ts">
	//Import packages
	import { slide } from "svelte/transition"

	//Import types
	import type { ToolTipPosition } from "../types/components"

	//Props
	export let text: string = ""
	export let position: ToolTipPosition = "bottom"
	export let blocker = false

	function positionMapper(position: ToolTipPosition) {
		switch (position) {
			case "top":
				return "top: calc(0% - 6px); left: 50%; transform: translate(-50%, -100%);"
			case "bottom":
				return "bottom: calc(0% - 6px); left: 50%; transform: translate(-50%, 100%);"
			case "left":
				return "left: calc(0% - 6px); top: 50%; transform: translate(-100%, -50%);"
			case "right":
				return "right: calc(0% - 6px); top: 50%; transform: translate(100%, -50%);"
		}
	}

	function transitionMapper(position: ToolTipPosition) {
		if (position === "top" || position === "bottom") {
			return "y"
		} else if (position === "left" || position === "right") {
			return "x"
		} else {
			return undefined
		}
	}
</script>

{#if !blocker}
	<div
		transition:slide="{{duration: 100, axis: transitionMapper(position) }}"
		class="container border"
		style="{positionMapper(position)}"
	>
		<p>{text}</p>
	</div>
{/if}

<style>
	.container {
		background-color: var(--d1-bg-color);
		border-radius: 6px;
		padding: 6px 12px;
		position: absolute;
		z-index: 3;
		white-space: nowrap;
	}

	p {
		font-size: 14px;
		line-height: 1rem;
	}
</style>

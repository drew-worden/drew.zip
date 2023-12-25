<script lang="ts">
	//Import packages
	import { slide } from "svelte/transition"

	//Import types
	import type { PopoverPosition } from "../types/components"

	//Import libs
	import { clickOutside } from "../lib/directives"

	//Props
	export let position: PopoverPosition = "bottom"
	export let open: boolean

	$: if (open) {
		console.log("open", open)
	}

	function positionMapper(position: PopoverPosition) {
		switch (position) {
			case "top":
				return "top: calc(0% - 6px); left: 50%; transform: translate(-50%, -100%);"
			case "bottom":
				return "bottom: calc(0% - 6px); left: 50%; transform: translate(-50%, 100%);"
			case "left":
				return "left: calc(0% - 6px); top: 50%; transform: translate(-100%, -50%);"
			case "right":
				return "right: calc(0% - 6px); top: 50%; transform: translate(100%, -50%);"
			case "bottom-left":
				return "bottom: calc(0% - 6px); left: 0%; transform: translate(0%, 100%);"
			case "bottom-right":
				return "bottom: calc(0% - 6px); right: 0%; transform: translate(0%, 100%);"
			case "top-left":
				return "top: calc(0% - 6px); left: 0%; transform: translate(0%, -100%);"
			case "top-right":
				return "top: calc(0% - 6px); right: 0%; transform: translate(0%, -100%);"
		}
	}

	function transitionMapper(position: PopoverPosition) {
		if (position === "top" || position === "bottom") {
			return "y"
		} else if (position === "left" || position === "right") {
			return "x"
		} else {
			return undefined
		}
	}
</script>

{#if open}
	<div
		transition:slide="{{ duration: 100, axis: transitionMapper(position) }}"
		class="container border"
		style="{positionMapper(position)}"
		use:clickOutside
		on:outclick="{() => (open = false)}"
	>
		<slot />
	</div>
{/if}

<style>
	.container {
		background-color: var(--d1-bg-color);
		border-radius: 12px;
		padding: 20px;
		position: absolute;
		text-wrap: nowrap;
		z-index: 2;
		width: 350px;
	}
</style>

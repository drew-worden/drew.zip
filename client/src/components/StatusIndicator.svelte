<script lang="ts">
	//Import types
	import type { StatusIndicatorVariant } from "../types/components"

	//Props
	export let size: number = 8
	export let variant: StatusIndicatorVariant

	function variantMapper(variant: StatusIndicatorVariant): string {
		switch (variant) {
			case "active":
				return "#22C55E"
			case "busy":
				return "#F5A623"
			case "emergency":
				return "#E14D48"
			case "offline":
				return "#a8a29e"
		}
	}
</script>

<div
	class="container"
	style="{`width: ${size}px; height: ${size}px;`}; background-color: {variantMapper(variant)};"
></div>

<style>
	.container {
		border-radius: 1000px;
	}
</style>

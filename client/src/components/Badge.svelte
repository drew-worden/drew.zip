<script lang="ts">
	//Import types
	import type { BadgeVariant } from "../types/components"

	//Props
	export let variant: BadgeVariant = "primary"
	export let color: string = ""
</script>

{#if variant === "outline"}
	<div
		class="outline badge border"
		style="{color ? `background-color: ${color};` : null}"
	>
		<slot />
	</div>
{:else if variant === "secondary"}
	<div
		class="secondary badge"
		style="{color ? `background-color: ${color};` : null}"
	>
		<slot />
	</div>
{:else}
	<div
		class="primary badge"
		style="{color ? `background-color: ${color};` : null}"
	>
		<slot />
	</div>
{/if}

<style>
	.badge {
		padding: 4px 12px;
		border-radius: 1000px;
		font-size: 13px;
		font-weight: 500;
		font-family: geist;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.outline {
		background-color: #0c0a09;
		color: #fafaf9;
	}

	.secondary {
		background-color: #fafafa;
		color: #18181b;
	}

	.primary {
		background-color: #27272a;
		color: #fafaf9;
	}
</style>

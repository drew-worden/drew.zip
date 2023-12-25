<script lang="ts">
	//Import types
	import type {ButtonVariant, ButtonSize} from "../types/components"
	
	//Props
	export let variant: ButtonVariant = "primary"
	export let size: ButtonSize = "default"
	export let text: string = ""

	function compileStyles(variant: ButtonVariant, size: ButtonSize) {
		let classes = ""

		if (variant === "primary") {
			classes += "primary-variant "
		} else if (variant === "secondary") {
			classes += "secondary-variant "
		} else if (variant === "outline") {
			classes += "outline-variant "
		}

		if (size === "default") {
			classes += "default-size"
		} else if (size === "small") {
			classes += "small-size"
		} else if (size === "fill") {
			classes += "fill-size"
		}

		return classes
	}
</script>

<button class={compileStyles(variant, size)}>
	<slot/>
	<span>{text}</span>
</button>

<style>
	button {
		padding: 8px 16px;
		border-radius: 6px;
		font-family: geist;
		font-size: 14px;
		font-weight: 500;
		transition: all 0.1s linear;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.primary-variant {
		background-color: var(--l1-bg-color);
		color: var(--d1-text-color);
	}

	.primary-variant:hover {
		background-color: #E2E2E2;
	}

	.secondary-variant {
		background-color: var(--d1-bg-color);
		color: var(--d1-text-color);
	}

	.outline-variant {
		background-color: var(--d1-bg-color);
		color: var(--d1-text-color);
	}

	.default-size {
	}

	.small-size {
	}

	.fill-size {
		width: 100%;
	}
</style>
<script lang="ts">
	//Props
	export let margin: number
</script>

<div class="divider" style={`margin: ${margin}px 0px;`}></div>

<style>
	.divider {
		width: 100%;
		height: 0px;
		border-top: 1px solid hsl(var(--border-color));
	}
</style>

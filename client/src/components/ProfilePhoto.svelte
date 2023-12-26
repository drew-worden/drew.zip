<script lang="ts">
	//Props
	export let size = 24
	export let rounded = false
</script>

{#if rounded}
	<img
		src="/images/rounded-profile-photo.png"
		alt="Drew Worden profile icon"
		style="{`width: ${size}px; height: ${size}px;`}"
	/>
{:else}
	<img
		src="/images/profile-photo.png"
		alt="Drew Worden profile icon"
		style="{`width: ${size}px; height: ${size}px;`}"
	/>
{/if}

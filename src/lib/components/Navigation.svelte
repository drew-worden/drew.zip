<script lang="ts">
	// Imports
	import Label from "./Label.svelte"
	import Button from "./Button.svelte"
</script>

<nav class="border-outline-right col gap-xlg">
	<div class="col gap-sm">
		<Label>drew.zip</Label>
		<Button
			href="/"
			width="full"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-house"
				><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
					d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				/></svg
			>Home</Button
		>
		<Button
			href="/"
			width="full"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-file-user"
				><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path
					d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
				/><circle
					cx="12"
					cy="13"
					r="2"
				/></svg
			>Resume</Button
		>
		<Button
			href="/"
			width="full"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-timer"
				><line
					x1="10"
					x2="14"
					y1="2"
					y2="2"
				/><line
					x1="12"
					x2="15"
					y1="14"
					y2="11"
				/><circle
					cx="12"
					cy="14"
					r="8"
				/></svg
			>Experience</Button
		>
		<Button
			href="/"
			width="full"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-wrench"
				><path
					d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
				/></svg
			>Skills</Button
		>
	</div>
	<div class="projects col gap-sm">
		<Label>Projects</Label>
		<div class="col gap-sm">
			<Button
				href="/projects/self-driving-simulation"
				width="full"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-car-front"
					><path
						d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
					/><path d="M7 14h.01" /><path d="M17 14h.01" /><rect
						width="18"
						height="8"
						x="3"
						y="10"
						rx="2"
					/><path d="M5 18v2" /><path d="M19 18v2" /></svg
				>Self-Driving Simulation</Button
			>
			<Button
				href="/projects/alogrithmn-visualizer"
				width="full"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-chart-area"
					><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path
						d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
					/></svg
				>Algorithmn Visualizer</Button
			>
		</div>
	</div>
</nav>

<style>
	nav {
		background-color: var(--bg-dark);
		min-width: 300px;
		height: 100%;
		padding: var(--pad-xlg);
		color: #f8f8f8;
	}
</style>

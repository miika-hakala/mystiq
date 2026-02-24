<script lang="ts">
	import '$lib/styles/tokens.css';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#0a0a0f" />
</svelte:head>

{@render children()}

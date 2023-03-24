<script>
	import '/src/styles/index.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

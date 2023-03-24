<script>
	import ChevronLeftIcon from '/src/components/icons/chevron-left-icon.svelte';
	import MinusIcon from '/src/components/icons/minus-icon.svelte';
	import PlusIcon from '/src/components/icons/plus-icon.svelte';
	import {
		lapLength,
		longBreakLength,
		sessionsUntilLongBreak,
		shortBreakLength
	} from '/src/stores/app-store';
</script>

<div class="main">
	<a href="/" class="back-btn"><ChevronLeftIcon /></a>
	<div class="container">
		<div class="section">
			<div class="section-title">Lap Length</div>
			<div class="form">
				<input bind:value={$lapLength} type="number" />
				<button on:click={lapLength.decrement} class="operator-btn"><MinusIcon /></button>
				<button on:click={lapLength.increment} class="operator-btn"><PlusIcon /></button>
			</div>
		</div>
		<div class="section">
			<div class="section-title">Short Break Length</div>
			<div class="form">
				<input bind:value={$shortBreakLength} type="number" />
				<button on:click={shortBreakLength.decrement} class="operator-btn"><MinusIcon /></button>
				<button on:click={shortBreakLength.increment} class="operator-btn"><PlusIcon /></button>
			</div>
		</div>
		<div class="section">
			<div class="section-title">Long Break Length</div>
			<div class="form">
				<input bind:value={$longBreakLength} type="number" />
				<button on:click={longBreakLength.decrement} class="operator-btn"><MinusIcon /></button>
				<button on:click={longBreakLength.increment} class="operator-btn"><PlusIcon /></button>
			</div>
		</div>
		<div class="section">
			<div class="section-title">Sessions Until Long Break</div>
			<div class="form">
				<input bind:value={$sessionsUntilLongBreak} type="number" />
				<button on:click={sessionsUntilLongBreak.decrement} class="operator-btn"
					><MinusIcon /></button
				>
				<button on:click={sessionsUntilLongBreak.increment} class="operator-btn"
					><PlusIcon /></button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		padding: 0 1rem;

		border-radius: var(--normal-radius);

		background-color: var(--clr-neutral-600);

		overflow: hidden;
	}

	.section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding: 0.8rem 0;
	}
	.section + .section {
		border-top: 1px solid var(--clr-neutral-500);
	}
	.section-title {
		font-size: 0.95rem;
	}
	.form {
		display: flex;
		align-items: stretch;
	}

	.operator-btn,
	.back-btn {
		width: var(--size);
		display: flex;
		justify-content: center;
		align-items: center;

		transition-property: background-color;
		transition-duration: var(--short-duration);
		transition-timing-function: ease-in-out;
	}
	.back-btn {
		--size: 3rem;
		height: var(--size);

		margin-bottom: 1rem;

		border-radius: var(--full-radius);

		background-color: var(--clr-neutral-600);
	}
	.back-btn:hover {
		background-color: var(--clr-neutral-500);
	}
	.operator-btn {
		--size: 2.5rem;

		border: none;

		background-color: var(--clr-neutral-500);

		color: var(--clr-neutral-100);
		font-size: 1.2rem;

		cursor: pointer;
	}
	.operator-btn:last-of-type {
		border-radius: 0 var(--normal-radius) var(--normal-radius) 0;
	}
	.operator-btn:hover {
		background-color: var(--clr-neutral-600);
	}

	input {
		height: 2.5rem;
		width: 3rem;
		padding-left: 0.5rem;

		border-radius: var(--normal-radius) 0 0 var(--normal-radius);
		border: none;

		background-color: var(--clr-neutral-500);

		color: var(--clr-neutral-100);
		font-size: 0.95rem;
	}
</style>

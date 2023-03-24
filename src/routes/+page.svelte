<script lang="ts">
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import { onDestroy } from 'svelte';
	import CogIcon from '/src/components/icons/cog-icon.svelte';
	import ForwardIcon from '/src/components/icons/forward-icon.svelte';
	import PauseIcon from '/src/components/icons/pause-icon.svelte';
	import PlayIcon from '/src/components/icons/play-icon.svelte';
	import {
		currentLapNum,
		isBreak,
		lapLength,
		longBreakLength,
		sessionsUntilLongBreak,
		shortBreakLength
	} from '/src/stores/app-store';
	import '/src/styles/reset.css';
	dayjs.extend(duration);

	let clockInterval: any;
	let oneSecond = dayjs.duration(1, 'second');
	let currentLength = $lapLength;
	$: originalClock = dayjs.duration({
		minutes: currentLength,
		seconds: 0
	});
	$: clock = originalClock;
	$: formattedClock = clock.format('mm:ss');
	let isClockRunning = false;

	const startTimer = () => {
		isClockRunning = true;
		clockInterval = setInterval(() => {
			const isEnd = !clock.asSeconds();
			if (isEnd) {
				timerOut();
			} else {
				clock = clock.subtract(oneSecond);
			}
		}, 1000);
	};
	const stopTimer = () => {
		isClockRunning = false;
		clearInterval(clockInterval);
	};
	const timerOut = () => {
		stopTimer();
		if ($isBreak) {
			currentLapNum.update((val) => val + 1);
		}
		isBreak.set(!$isBreak);
		setNewLap();
	};
	const handleSkip = () => {
		timerOut();
	};
	const setNewLap = () => {
		if ($isBreak) {
			if ($currentLapNum % $sessionsUntilLongBreak === 0) {
				currentLength = $longBreakLength;
			} else {
				currentLength = $shortBreakLength;
			}
		} else {
			currentLength = $lapLength;
		}
	};

	onDestroy(() => {
		stopTimer();
	});
</script>

<main>
	<div class="lap">Lap {$currentLapNum}</div>
	<div class="clock">
		{formattedClock}
	</div>
	<div class="buttons">
		<button
			on:click={isClockRunning ? stopTimer : startTimer}
			class:is-secondary={isClockRunning}
			class:is-primary={!isClockRunning}
		>
			{#if isClockRunning}
				<PauseIcon />
			{:else}
				<PlayIcon />
			{/if}
		</button>
		<button on:click={handleSkip} class="is-secondary"><ForwardIcon /></button>
		<a href="/settings" class="button is-secondary"><CogIcon /></a>
	</div>
</main>

<style>
	main {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.clock {
		margin-bottom: 2rem;

		font-family: var(--ff-mono);
		font-size: 3.5rem;
		color: var(--clr-primary-400);
	}
	.lap {
		margin-bottom: 0.5rem;
	}

	.buttons {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	button,
	.button {
		--size: 3rem;

		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--size);
		height: var(--size);
		padding: 0;

		border-radius: var(--full-radius);
		border: none;

		color: var(--clr-neutral-100);
		font-size: 1rem;

		cursor: pointer;
		user-select: none;

		transition-property: background-color;
		transition-duration: var(--short-duration);
		transition-timing-function: ease-in-out;
	}
	button.is-primary,
	.button.is-primary {
		background-color: var(--clr-primary-500);
	}
	button.is-secondary,
	.button.is-secondary {
		background-color: var(--clr-neutral-500);
	}
	.is-primary:hover {
		background-color: var(--clr-primary-600);
	}
	.is-secondary:hover {
		background-color: var(--clr-neutral-400);
	}
</style>

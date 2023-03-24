import { writable } from 'svelte/store';

const Default = {
	LAP_LENGTH: 25,
	SHORT_BREAK_LENGTH: 5,
	LONG_BREAK_LENGTH: 15,
	SESSIONS_UNTIL_LONG_BREAK: 4
};

function createLapLength() {
	const { subscribe, set, update } = writable(Default.LAP_LENGTH);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		set
	};
}

function createShortBreakLength() {
	const { subscribe, set, update } = writable(Default.SHORT_BREAK_LENGTH);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		set
	};
}
function createLongBreakLength() {
	const { subscribe, set, update } = writable(Default.LONG_BREAK_LENGTH);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		set
	};
}

function createSessionsUntilLongBreak() {
	const { subscribe, set, update } = writable(Default.SESSIONS_UNTIL_LONG_BREAK);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		set
	};
}

export const lapLength = createLapLength();
export const shortBreakLength = createShortBreakLength();
export const longBreakLength = createLongBreakLength();
export const sessionsUntilLongBreak = createSessionsUntilLongBreak();
export const currentLapNum = writable(1);
export const isBreak = writable(false);

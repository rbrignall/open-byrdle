<script lang="ts">
	import { createEventDispatcher, onDestroy } from "svelte";

	import { blur } from "svelte/transition";
	import type { GameMode } from "../../enums";
	import { mode } from "../../stores";
	import { modeData } from "../../utils";

	const dispatch = createEventDispatcher();

	const HOUR = 3600000;
	const MINUTE = 60000;
	const SECOND = 1000;
	let ms = 1000;

	let countDown: number;

	export function reset(m: GameMode) {
		clearInterval(countDown);
		ms = modeData.modes[m].unit - (new Date().valueOf() - modeData.modes[m].seed);
		if (ms < 0) dispatch("timeup");
		countDown = setInterval(() => {
			ms = modeData.modes[m].unit - (new Date().valueOf() - modeData.modes[m].seed);
			if (ms < 0) {
				clearInterval(countDown);
				dispatch("timeup");
			}
		}, SECOND);
	}
	$: reset($mode);
</script>

<h3>Next Byrdle</h3>
<div class="container">
	{#if ms > 0}
		<div transition:blur class="timer">
			{`${Math.floor(ms / HOUR)}`.padStart(2, "0")}:{`${Math.floor(
				(ms % HOUR) / MINUTE
			)}`.padStart(2, "0")}:{`${Math.floor((ms % MINUTE) / SECOND)}`.padStart(2, "0")}
		</div>
	{:else}
		<div transition:blur class="button" role="button" tabindex={0} on:click={() => dispatch("reload")} on:keydown={() => dispatch("reload")}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					d="M4.609 12c0-4.082 3.309-7.391 7.391-7.391a7.39 7.39 0 0 1 6.523 3.912l-1.653 1.567H22v-5.13l-1.572 1.659C18.652 3.841 15.542 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10c4.589 0 8.453-3.09 9.631-7.301l-2.512-.703c-.871 3.113-3.73 5.395-7.119 5.395-4.082 0-7.391-3.309-7.391-7.391z"
				/>
			</svg>
		</div>
	{/if}
</div>

<style>
	h3 {
		margin-bottom: 10px;
	}
	.container {
		height: 45px;
		min-width: 70%;
		position: relative;
	}
	.timer {
		position: absolute;
		inset: 0;
		font-size: var(--fs-large);
		text-align: center;
	}
    @media (max-width: 500px) {
        .timer {
            font-size: var(--fs-medium);
        }
    }
	.button {
		height: 36px;
        width: 36px;
		padding: 4px;
		background: var(--color-correct);
		border-radius: 4px;
		cursor: pointer;
		margin: auto;
	}
	svg {
		fill: white;
		height: 100%;
	}
	.button:hover {
		opacity: 0.9;
	}
</style>

<script lang="ts">
	import { words, ROWS, COLS } from "../../utils";

	import Row from "./Row.svelte";
//	import ContextMenu from "../widgets/ContextMenu.svelte";

	export let value: string[];
//	export let board: GameBoard;
//  export let boardState: string[];
    export let evaluations: LetterState[][];
	export let guesses: number;
	export function shake(row: number) {
		rows[row].shake();
	}
	export function bounce(row: number) {
		rows[row].bounce();
	}
	export function hideCtx(e?: MouseEvent) {
		if (!e || !e.defaultPrevented) showCtx = false;
	}
	let rows: Row[] = [];
	let showCtx = false;
	let pAns = 0;
	let pSols = 0;
	let x = 0;
	let y = 0;
	let word = "";
    let innerHeight;
    let innerWidth;

    function getMaxWidth(w,h) {
        return Math.floor(Math.min(w,h * COLS / ROWS,460 * COLS / ROWS));
    }
    function getMaxHeight(w,h) {
        return Math.floor(Math.min(w * ROWS / COLS,h,460));
    }

</script>
<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />
<div class="board" id="boardid" style="max-width: {getMaxWidth(innerWidth,innerHeight)}px; width: calc(({innerHeight}px - var(--header-height) - var(--keyboard-height) - var(--header-ad-height) - var(--subtitle-ad-height) - var(--keyboard-ad-height)) * {COLS /ROWS}); max-height: {getMaxHeight(innerWidth,innerHeight)}px; height: calc({innerHeight}px - var(--header-height) - var(--keyboard-height) - var(--header-ad-height) - var(--subtitle-ad-height) - var(--keyboard-ad-height));">
	{#each value as _, i}
		<Row
			num={i}
			{guesses}
			bind:this={rows[i]}
			bind:value={value[i]}
			evaluation={evaluations[i]}
		/>
	{/each}
</div>

<style>
	.board {
		display: grid;
		grid-template-rows: repeat(var(--rows), 1fr);
		grid-gap: 5.5px;
		flex-grow: 1;
		padding: 5px;
		position: relative;
	}
</style>

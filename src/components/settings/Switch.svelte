<script lang="ts">
	export let value: boolean;
	export let disabled = false;
</script>

<div 
    class:checked={value} {disabled}
    aria-checked={value}
    role="switch"
    tabindex={0}
    on:click={(e) => !disabled && (value = !value)} 
    on:keydown={(e) => !disabled && (value = !value)} 
    >
</div>

<style lang="scss">
	div[disabled="true"] {
		opacity: 0.5;
		cursor: unset;
	}
	div {
		width: 32px;
		height: 20px;
		border-radius: 10px;
		background: var(--icon-color);
		position: relative;
		cursor: pointer;
		transition: background-color 0.3s ease;
		&::before {
			content: "";
			position: absolute;
			width: 16px;
			height: 16px;
			background: white;
			border-radius: 50%;
			margin: 2px;
			left: 0;
			transition: left 0.3s ease;
		}
	}
	.checked {
		background: var(--color-correct);
		&::before {
			left: 12px;
		}
	}
</style>

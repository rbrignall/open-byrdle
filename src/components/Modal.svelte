<script lang="ts">
	import { createEventDispatcher } from "svelte";

	import GameIcon from "./GameIcon.svelte";

	export let visible = false;

	const dispatch = createEventDispatcher();

	function close() {
		visible = false;
		dispatch("close");
	}
    function keyclose(event) {
        if(event.key===" " || event.key==="Spacebar")
            close();
    }
</script>


	<div class:visible class="overlay" 
        role="button" tabindex={0} 
        on:click|self={close}
        on:keydown|self={keyclose}>
		<div class="modal">
			<div class="exit" 
                role="button" tabindex={1} 
                on:click={close}
                on:keydown={keyclose}>
				<GameIcon>
					<path
						d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
					/>
				</GameIcon>
			</div>
			<slot />
		</div>
	</div>


<style lang="scss">
	.overlay.visible,
	.visible .modal {
		opacity: 1;
		visibility: visible;
	}
	.exit {
		position: absolute;
		top: var(--modal-padding);
		right: var(--modal-padding);
	}
	/* regular modal */
	.overlay {
		transition: all 0.2s ease;
		font-size: var(--fs-small);
		visibility: hidden;
		position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
		z-index: 10;
		opacity: 0;
        background: #0008;
        overflow-y: hidden;        
        justify-content: center;
        align-items: center;
	}
	.modal {
		position: relative;
		background: var(--bg-primary);
		max-width: var(--game-width);
/*		height: min-content;*/
		max-height: calc(90% - var(--header-ad-height));
		width: 100%;
		overflow-y: auto;
		border-radius: 0px;
		border: 1px solid var(--bg-secondary);
		--modal-padding: 16px;
		padding: var(--modal-padding);
		padding-top: calc(2 * var(--modal-padding));
		margin: calc(5% + var(--header-ad-height)) auto 5% auto;
		transition: all 0.3s ease;
		> :global(*:not(h3)) {
			margin-bottom: 15px;
		}
	}
</style>

<script lang="ts">
	import { COLS, ROWS } from "../../utils";

	import { Tile } from "../board";
	export let visible: boolean;
    
</script>

<h3>how to play</h3>

<div>Guess the <strong>BYRDLE</strong> in {ROWS} tries. The word is related to choral music, and answers include proper nouns, plurals and musical terms in other languages. You might like to look at an <a href="/history/" target="_blank">X thread of the first ever BYRDLEs</a>.</div>
<div>Each guess must be a valid {COLS} letter word. Press enter to submit a guess. The colour of the tiles will then change as follows.
</div>
<div class:complete={visible} class="examples" style="--tutorial-row-width: 260px; --cols: 6">
	<div><strong>Examples</strong></div>
	<div class="row">
		<Tile value="h" state="correct" />
		<Tile value="a" state="nil" />
		<Tile value="n" state="nil" />
		<Tile value="d" state="nil" />
		<Tile value="e" state="nil" />
		<Tile value="l" state="nil" />
	</div>
	<div>The letter <strong>H</strong> is in the word and in the correct spot.</div>
	<div class="row">
		<Tile value="m" state="nil" />
		<Tile value="e" state="nil" />
		<Tile value="l" state="present" />
		<Tile value="o" state="nil" />
		<Tile value="d" state="nil" />
		<Tile value="y" state="nil" />
	</div>
	<div>The letter <strong>L</strong> is in the word but in the wrong spot.</div>
	<div class="row">
		<Tile value="s" state="nil" />
		<Tile value="i" state="nil" />
		<Tile value="n" state="nil" />
		<Tile value="g" state="absent" />
		<Tile value="e" state="nil" />
		<Tile value="r" state="nil" />
	</div>
	<div>The letter <strong>G</strong> is not in the word in any spot.</div>
</div>
<div>A new BYRDLE will be available at midnight each day!</div>

        <div>
            You may wish to read our <a href="https://www.byrdle.net/privacy.html">Privacy Policy</a>.
        </div>


<h3>The history of Byrdle</h3>
<div>On January 11 2022, QuireMemes posted <a href="https://x.com/QuireMemes/status/1480896862978727937" target="_blank">this tweet</a>, and asked if it could be made for real, just for a bit of fun. The next day, <a href="https://x.com/QuireMemes/status/1481205826601771010" target="_blank">Byrdle went live</a>.</div>

<div>Far from just being a quick laugh, it turns out that Byrdle was actually quite fun to play: sometimes hard, sometimes easy, often educational.</div> 
<div>Within a week, 20,000 people were playing Byrdle every day. Within 3 weeks that increased to 50,000, assisted by media coverage, including <a href="https://www.classicfm.com/discover-music/humour/byrdle-choral-music-meme/" target="_blank">Classic FM</a>, <a href="https://eu.usatoday.com/story/money/reviewed/2022/01/24/games-like-wordle-alternative-word-games-play-online/6632088001/" target="_blank">USA Today</a>, <a href="https://www.churchtimes.co.uk/articles/2022/28-january/news/uk/byrd-in-five-parts-wordle-inspires-sacred-mimicry" target="_blank">The Church Times</a>, <a href="https://nypost.com/2022/02/18/8-wordle-spinoffs-to-play-from-subwaydle-to-nerdle/" target="_blank">The New York Post</a>, <a href="https://www.ladepeche.fr/2022/02/01/vous-aimez-wordle-et-la-musique-classique-essayez-byrdle-10082250.php" target="_blank">La Depeche</a> and the <a href="https://www.malaymail.com/news/tech-gadgets/2022/02/02/if-you-like-wordle-and-classical-music-have-a-go-at-byrdle/2039102" target="_blank">Malay Mail</a>.</div>


<style lang="scss">
	div {
		margin: 10px 0;
	}
	.examples {
		border-top: 1px solid var(--border-primary);
		border-bottom: 1px solid var(--border-primary);
		:global(.row > *) {
			height: 100%;
		}
		&:not(.complete) :global(.row .back) {
			transition-delay: 0.3s;
		}
	}
	.row {
		display: grid;
		grid-template-columns: repeat(var(--cols), 1fr);
		height: 40px;
        width: var(--tutorial-row-width);
		grid-gap: 5px;
        font-size: 1.8em;
        line-height: 1.4em;
        vertical-align: middle;
	}
</style>

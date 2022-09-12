<script lang="ts">
	let className: string;
	export let pokemonName: string = '';
	// export let className: string = '';
	export { className as class};
</script>

<div class={"pokemon-card" + className }>
	<h2 class="pokemon-card__name">
		{ pokemonName }
	</h2>
</div>

<style lang="scss">
	.pokemon-card {
		
	}
</style>

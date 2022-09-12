<script lang="ts"> 
import type { Page } from "@sveltejs/kit";
	type PokemonData = {
		name: string;
		id: number
	}

	type LoadData = Page & {
		firstGenPokemon: PokemonData[]
	}

	export let data: Page

	const { data: { firstGenPokemon: pokemon }} = data;

	console.log('pokemont')

	import PokemonCard from '$lib/components/pokemonCard.svelte';

	// console.log('data', data);
	// console.log('pokemon', pokemon);
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each pokemon as pokeman (pokeman.id)}
	<PokemonCard class="test" pokemonName={pokeman.name}></PokemonCard>
{/each}


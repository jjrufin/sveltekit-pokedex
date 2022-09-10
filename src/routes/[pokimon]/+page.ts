import type { LoadEvent } from "@sveltejs/kit";
import axios from "axios";
// import { queryAllPokemon } from "$lib/graphQL";
export async function load (event: LoadEvent) {
	console.log('event: wildcard', event);
	// const pokimon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
	const test = 'test';
	
	return {
		test
	}
}

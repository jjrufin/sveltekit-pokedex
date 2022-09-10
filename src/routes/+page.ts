import type {  LoadEvent } from "@sveltejs/kit";
import { queryAllPokemon } from "$lib/graphQL";

export const load = async (event: LoadEvent) => {
	const { firstGenPokemon } = await queryAllPokemon();
	const { params } = event;

	console.log('params', params)
	
	return {
		firstGenPokemon
	}
}

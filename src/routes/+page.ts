import type { Page, LoadEvent } from "@sveltejs/kit";
import { queryAllPokemon } from "$lib/graphQL";

export const load = async (event: LoadEvent) => {
	const { firstGenPokemon } = await queryAllPokemon();
	const { params, routeId } = event;

	console.log('params', params)
	// return {
	// 	data: {
	// 		firstGenPokemon
	// 	}
	// }
	return {
		data: {
			firstGenPokemon
		}
	}
}

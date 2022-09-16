import type { Page, LoadEvent } from "@sveltejs/kit";
import { queryAllPokemon } from "$lib/graphQL";

type OutputProps = Pick<Page, 'data'>

import { env } from "$env/dynamic/private";

export const load = async (event: LoadEvent): Promise<OutputProps> => {
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

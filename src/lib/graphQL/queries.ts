// import axios from 'axios'

export const queryAllPokemon = async () => {
	const queryPokemon = `
	{
		firstGenPokemon: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
			name
			id
		}
	}
	`
	try {
		// const {
		// 	data: {
		// 		data
		// 	},
		// 	status
		// } = await axios.post(
		// 	'https://beta.pokeapi.co/graphql/v1beta',
		// 	{ query: queryPokemon },
		// 	{
		// 		headers: {
		// 			accept: '*/*'
		// 		}
		// 	}
		// )

		const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
			method: 'POST',
			headers: {
				accept: '*/*'
			},
			body: JSON.stringify({ query: queryPokemon})
		});

		const { data: { firstGenPokemon } } = await response.json()
		console.log(firstGenPokemon);
		return {
			firstGenPokemon
		}
	} catch (error) {
		return {
			error
		}
	}
}

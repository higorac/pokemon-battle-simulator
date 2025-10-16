import axios from 'axios';

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

interface PokemonSprite {
    name: string
    id: number
    sprite: string
}

export const getPokemonSprites = async (): Promise<PokemonSprite[]> => {
    try{
        const response = await api.get("pokemon?limit=151")
        const pokemons = response.data.results

        const sprites = await Promise.all(
            pokemons.map(async(pokemon: {name: string; url: string}) => {
                const res = await axios.get(pokemon.url)
                return{
                    id: res.data.id,
                    name: res.data.name,
                    sprite: res.data.sprites.front_default || '',
                }
            })
        )

        return sprites;
    } catch (error){
        console.log("Erro ao buscar sprites: ", error)
        return []
    }
}

export default api
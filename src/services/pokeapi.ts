import axios from 'axios';

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

interface Pokemons {
    name: string
    id: number
    sprite: string
}

export const getRandomPokemons = async (): Promise<{
    player: Pokemons[];
    enemy: Pokemons[];
}> => {
    try {
        const randomIds: number[] = [];
        while (randomIds.length < 12) {
            const randomId = Math.floor(Math.random() * 151) + 1
            if(!randomIds.includes(randomId)){
                randomIds.push(randomId)
            }
        }

        const randomPokemons = await Promise.all(randomIds.map(async (id) => {
            const res = await api.get(`pokemon/${id}`)
            return {
                id: res.data.id,
                name: res.data.name,
                sprite: res.data.sprites.front_default || '',
            }
        })
    )

    const player = randomPokemons.slice(0, 6);
    const enemy = randomPokemons.slice(6,12)

    return {player, enemy}

    } catch (error) {
        console.log("Algo deu errado: ", error)
        return {player: [], enemy: []}
    }
}

export default api
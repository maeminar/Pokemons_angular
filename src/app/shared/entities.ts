export interface IPokemons {
    pokedex_id: number;
    name: {
        fr: string;
    };
    sprites: {
        regular: URL;
        shiny: URL | null;
        gmax: URL | null;
    };
    types: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    evolution: {
        "pre-evolution": string | null;
        "evolution": string | null;
    };
}

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
    evolution: {
        "pre-evolution": string | null;
        "evolution": string | null;
    };
}
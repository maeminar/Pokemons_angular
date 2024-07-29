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
  types: {
    name: string;
    image: string;
  }[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  evolution: {
    pre?: {
      pokedex_id?: number;
      name?: string;
      condition?: string;
    }[];
    next?: {
      pokedex_id?: number;
      name?: string;
      condition?: string;
    } [];
    mega?: {
      orbe?: string;
      sprites?: {
        regular?: string;
        shiny?: string;
      };
    }[];
  }; 
  count?: number; // Ajoutez une propriété pour le compteur
}
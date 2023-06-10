interface Resource {
  name: string;
  url: string;
}

interface AbilitySlot {
  ability: Resource;
  is_hidden: boolean;
  slot: number;
}

interface Sprites {
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
  };
}

interface Stat {
    stat: Resource;
}

interface Type {
    type: Resource;
}

interface Pokemon {
  abilities: AbilitySlot[];
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  id: number;
  name: string;
}

interface BagPokemon {
  id: number;
  name: string;
  nickname: string;
  isFavorite: boolean;
  sprite: string;
  caughtDate: string;
  caughtAmount: number;
  types: Type[];
}

export type { Pokemon, BagPokemon, Type, AbilitySlot };

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {BagPokemon, Pokemon} from '../../types/pokemon/Index';

interface BagState {
  data: BagPokemon[];
  isLoading: boolean;
  isError: string | undefined;
}

const initialState: BagState = {
  data: [],
  isLoading: false,
  isError: undefined,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;
      const bagPokemonIndex = state.data.findIndex(
        bagPokemon => bagPokemon.id === pokemon.id,
      );

      if (bagPokemonIndex === -1) {
          state.data.push(mapToBagPokemon(pokemon));
      } else {
        state.data[bagPokemonIndex].caughtAmount++;
        state.data[bagPokemonIndex].caughtDate = new Date().toLocaleDateString();
      }
    },
    add: (state, action: PayloadAction<BagPokemon>) => {
      const bagPokemon = action.payload;
        console.log(bagPokemon)

      
    },
  },
});

const mapToBagPokemon = (pokemon: Pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    nickname: pokemon.name,
    isFavorite: false,
    sprite: pokemon.sprites.other.dream_world.front_default,
    caughtDate: new Date().toLocaleDateString(),
    caughtAmount: 1,
    types: pokemon.types
  } as BagPokemon;
};

export const selectBag = (state: RootState) => state.bag.data;
export const getBagLoading = (state: RootState) => state.bag.isLoading;
export const getBagError = (state: RootState) => state.bag.isError;

export const {catchPokemon} = bagSlice.actions;
export default bagSlice.reducer;

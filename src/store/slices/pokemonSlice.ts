import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { RootState } from '../store';
import { Pokemon } from '../../types/pokemon/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HOUSES_URL = '/pokemon';

interface PokemonState {
    data: Pokemon | null;
    isLoading: boolean;
    isError: string | undefined;
};

const initialState: PokemonState = {
    data: null,
    isLoading: false,
    isError: undefined
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemon.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(fetchPokemon.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = {...action.payload};
        })
        .addCase(fetchPokemon.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
        });
    }
});

export const fetchPokemon = createAsyncThunk('pokemon/fetch', async (name: string) => {
    try {
        const response: AxiosResponse<Pokemon, string> = await api.get(`${HOUSES_URL}/${name.toLowerCase()}`);

        return {...response.data};
    } catch (error: Error | any) {
        return error?.message;
    }
})

export const selectPokemon = (state: RootState) => state.pokemon.data;
export const getPokemonLoading = (state: RootState) => state.pokemon.isLoading;
export const getPokemonError = (state: RootState) => state.pokemon.isError;

export default pokemonSlice.reducer;

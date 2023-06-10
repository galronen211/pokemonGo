import {IconButton} from '@react-native-material/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputBase, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import bagSlice, { catchPokemon, selectBag } from '../../store/slices/bagSlice';
import {
  fetchPokemon,
  getPokemonError,
  getPokemonLoading,
  selectPokemon,
} from '../../store/slices/pokemonSlice';
import {AppDispatch} from '../../store/store';
import { Pokemon } from '../../types/pokemon/Index';
import {PokemonCard} from './components/PokemonCard/Index';

function ExploreScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState('');

  const pokemon = useSelector(selectPokemon);
  const pokemonIsLoading = useSelector(getPokemonLoading);

  const handleSearchInput = (text: string) => {
    setSearchValue(text);
  };

  const handleSearch = () => {
    dispatch(fetchPokemon(searchValue));
  };

  const handleCatch = (pokemon: Pokemon) => {
    dispatch(catchPokemon(pokemon));
  }

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchContainer}
        placeholder="שם הפוקימון..."
        value={searchValue}
        onChangeText={handleSearchInput}
        onSubmitEditing={handleSearch}
        showLoading={pokemonIsLoading}
        lightTheme
      />

      {pokemon && <PokemonCard pokemon={pokemon} onCatch={handleCatch} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignContent: 'center',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
});

export {ExploreScreen};

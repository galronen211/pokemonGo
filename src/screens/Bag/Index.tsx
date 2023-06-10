import {Flex, Text} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import bagSlice, {selectBag} from '../../store/slices/bagSlice';
import {BagPokemon, Pokemon} from '../../types/pokemon/Index';
import { StackNavigationProps } from '../../types/navigation/Index';
import { ROUTES } from '../Constants';
import { PokemonScreen } from '../Pokemon/Index';
import {BagPokemonCard} from './components/BagPokemonCard/Index';

function BagScreen() {
  const bag = useSelector(selectBag);
  const navigation = useNavigation<StackNavigationProps>();

  const handlePokemonClick = (pokemon: BagPokemon) => {
    navigation.navigate(ROUTES.POKEMON, {pokemon: pokemon})
  }

  return (
    bag && (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={bag}
          contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10}}
          renderItem={({item}) => <BagPokemonCard pokemon={item} onClick={handlePokemonClick} />}
          keyExtractor={(item: BagPokemon) => String(item.id)}
          numColumns={2}
        />
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export {BagScreen};

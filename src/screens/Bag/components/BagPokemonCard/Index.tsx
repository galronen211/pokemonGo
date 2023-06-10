import {Box, Flex, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {SvgUri} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Chip } from '../../../../components/Chip/Index';
import { PokemonCard } from '../../../../components/PokemonCard/Index';
import {BagPokemon} from '../../../../types/pokemon/Index';

interface BagPokemonCardProps {
  pokemon: BagPokemon;
  onClick: (pokemon: BagPokemon) => void
}

function BagPokemonCard({pokemon, onClick}: BagPokemonCardProps) {
  return (
    <PokemonCard pokemon={pokemon} style={{padding: 5}} onClick={onClick}>
      <Flex
        direction="row"
        justify="center"
        items='center'
        fill>
        <Flex direction="column">
          <Text style={{textTransform: 'capitalize', color: 'white', fontWeight: 'bold'}}>{pokemon.name}</Text>
          {pokemon.types.map(type => <Chip label={type.type.name} variant='small' />)}
        </Flex>

        <SvgUri width="60" height="60" uri={pokemon.sprite} />
      </Flex>
    </PokemonCard>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export {BagPokemonCard};

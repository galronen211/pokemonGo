import {Flex} from '@react-native-material/core';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {BagPokemon, Pokemon} from '../../types/pokemon/Index';
import {styles} from './Styles';

interface PokemonCardProps {
  pokemon: Pokemon | BagPokemon;
  onClick?: (pokemon: BagPokemon) => void;
  children?: string | JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>
}

function PokemonCard({pokemon, onClick, children, style}: PokemonCardProps) {
  const pokemonStyles = styles(pokemon.types[0]);

  const handleTap = () => {
    if (onClick !== undefined) {
      onClick(pokemon as BagPokemon);
    }
  }

  return (
    <Flex fill style={style} onTouchEnd={handleTap}>
      <Flex fill style={pokemonStyles.container}>
        {children}
      </Flex>
    </Flex>
  );
}

export {PokemonCard};

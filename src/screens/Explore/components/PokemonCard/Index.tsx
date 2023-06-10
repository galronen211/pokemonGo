import {Box, Button, Chip, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {SvgUri} from 'react-native-svg';
import {AbilitySlot, Pokemon, Type} from '../../../../types/pokemon/Index';

interface PokemonCardProps {
  pokemon: Pokemon;
  onCatch: (pokemon: Pokemon) => void;
}

function PokemonCard({pokemon, onCatch}: PokemonCardProps) {
  return (
    <View style={styles.container}>
      <Box style={styles.card}>
        <Box style={styles.spacedBox}>
          <Box mt={-30} p={10} style={styles.nameCard}>
            <Text style={styles.nameText}>{pokemon.name}</Text>
          </Box>

          <Box style={styles.descriptors}>
            {pokemon.types.map((type: Type) => (
              <Chip label={type.type.name} disabled />
            ))}
          </Box>
        </Box>

        <Box style={styles.image}>
          <SvgUri
            width="70%"
            height="70%"
            uri={pokemon.sprites.other.dream_world.front_default}
          />
        </Box>

        <Box style={styles.flexColumn} p={10}>
          <Text>יכולות</Text>
          <Box style={styles.flexRow}>
            {pokemon.abilities.map((ability: AbilitySlot) => (
              <Chip label={ability.ability.name} disabled />
            ))}
          </Box>
        </Box>

        <Box style={styles.cardBottom}>
          <Box style={styles.action}>
            <Button title="תפוס!" onTouchEnd={() => onCatch(pokemon)}></Button>
          </Box>
        </Box>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '80%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#dfe5eb',
    display: 'flex',
  },
  nameCard: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    backgroundColor: '#aeb9c2',
  },
  nameText: {
    textTransform: 'capitalize',
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  descriptors: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
      display: 'flex',
      flexDirection: 'row'
  },
  action: {},
  spacedBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {PokemonCard};

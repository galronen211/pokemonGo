import {Box, Flex, IconButton, Stack, Text} from '@react-native-material/core';
import {
  RouteProp,
  TabNavigationState,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {BagPokemon, Pokemon} from '../../types/pokemon/Index';
import {
  StackNavigationProps,
  StackParamList,
  TabNavigationProps,
} from '../../types/navigation/Index';
import {useStyles} from './Styles';
import {ROUTES} from '../Constants';
import {SvgUri} from 'react-native-svg';
import {Chip} from '../../components/Chip/Index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditDialogForm from './components/EditDialogForm/Index';

interface PokemonScreenProps {
  pokemon: BagPokemon;
}

function PokemonScreen() {
  const stackNavigation = useNavigation<StackNavigationProps>();
  const tabNavigation = useNavigation<TabNavigationProps>();

  const route = useRoute<RouteProp<StackParamList, ROUTES.POKEMON>>();
  const pokemon: BagPokemon = route.params.pokemon;

  const [dialogVisible, setDialogVisible] = useState(false);

  const styles = useStyles(pokemon.types[0]);

  useEffect(() => {
    stackNavigation.setOptions({
      headerStyle: styles.header,
      headerTintColor: 'white',
      headerRight: () => (
        <>
          <IconButton color="white" icon={<Icon size={22} name="pencil-outline" color="white" />} onPress={handleEditPress} />
          <IconButton color="white" icon={<Icon size={22} name="heart-outline" color="white" />} />
        </>
      )
    });
    tabNavigation.setOptions({tabBarStyle: {display: 'none'}});
  }, []);

  const handleEditPress = () => {
    setDialogVisible(true);
  }

  return (
    <>
    <Flex fill style={styles.container}>
      <Flex fill>
        <Box p={10}>
          <Text
            variant="h4"
            color="white"
            style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
            {pokemon.nickname}
          </Text>
          <Text
            variant="h6"
            color="rgba(255, 255, 255, 0.8)"
            style={{fontWeight: 'bold', textTransform: 'capitalize'}}>
            {pokemon.name}
          </Text>
          <Stack direction="row">
            {pokemon.types.map(type => (
              <Chip label={type.type.name} variant="medium" />
            ))}
          </Stack>
        </Box>
      </Flex>
      <Flex fill style={styles.information}>
        <SvgUri
          uri={pokemon.sprite}
          width={200}
          height={200}
          style={styles.sprite}
        />

        <Text variant='h6' style={{fontWeight: 'bold', padding: 5}} color="rgba(0, 0, 0, 0.7)">מידע</Text>

        <Flex direction="row-reverse" style={{padding: 5}}>
          <Flex direction="column" fill>
            <Text
              variant="subtitle1"
              color="rgba(0, 0, 0, 0.7)"
              style={{fontWeight: 'bold'}}>
              תאריך תפיסה
            </Text>
            <Text
              variant="subtitle1"
              color="rgba(0, 0, 0, 0.7)"
              style={{fontWeight: 'bold'}}>
              כמות שברשותך
            </Text>
          </Flex>
          <Flex direction="column" items='end'>
            <Text variant="subtitle1">{pokemon.caughtDate}</Text>
            <Text variant="subtitle1">{pokemon.caughtAmount}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>

    <EditDialogForm visible={dialogVisible} setVisible={setDialogVisible} pokemon={pokemon} />
    </>
  );
}

export {PokemonScreen};
export type {PokemonScreenProps};

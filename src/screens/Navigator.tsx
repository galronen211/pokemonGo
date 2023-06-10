import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackParamList, TabParamList} from '../types/navigation/Index';
import {BagScreen} from './Bag/Index';
import {ROUTES} from './Constants';
import {ExploreScreen} from './Explore/Index';
import {PokemonScreen} from './Pokemon/Index';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const screenOptions = ({route}: BottomTabNavigationOptions) => {
  return {
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarIcon: ({focused, color, size}: BottomTabBarProps) => {
      let iconName: string = '';

      switch (route.name) {
        case ROUTES.EXPLORE:
          iconName = 'magnify';
          break;
        case ROUTES.BAG_NAVIGATOR:
          iconName = 'bag-personal-outline';
          break;
      }

      return <Icon name={iconName} color={color} size={size}></Icon>;
    },
  };
};

function BagNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.BAG} component={BagScreen} />
      <Stack.Screen
        name={ROUTES.POKEMON}
        component={PokemonScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerLargeTitleShadowVisible: false,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: 'transparent'},
        }}
      />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName={ROUTES.EXPLORE}>
      <Tab.Screen name={ROUTES.EXPLORE} component={ExploreScreen} />
      <Tab.Screen name={ROUTES.BAG_NAVIGATOR} component={BagNavigator} />
    </Tab.Navigator>
  );
}

export {Navigator};

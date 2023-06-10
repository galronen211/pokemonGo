import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PokemonScreenProps } from "../../screens/Pokemon/Index";

type StackParamList = {
    Bag: {} | undefined;
    Pokemon: PokemonScreenProps;
}

type TabParamList = {
    Explore: {} | undefined;
    BagNavigator: {} | undefined;
}

type StackNavigationProps = NativeStackNavigationProp<StackParamList>;

type TabNavigationProps = BottomTabNavigationProp<TabParamList>;

export type {StackParamList, StackNavigationProps, TabParamList, TabNavigationProps};
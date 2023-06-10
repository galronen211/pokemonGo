import {StyleSheet} from 'react-native';
import { TYPE_COLOR } from '../../types/enums/Style';
import {Type} from '../../types/pokemon/Index';

const styles = (type: Type) =>
  StyleSheet.create({
    container: {
      borderRadius: 15,
      backgroundColor: Object.values(TYPE_COLOR)[Object.keys(TYPE_COLOR).indexOf(type.type.name)],
      padding: 25
    },
  });

export {styles};

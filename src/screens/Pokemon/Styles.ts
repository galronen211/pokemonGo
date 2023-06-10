import {StyleSheet} from 'react-native';
import {TYPE_COLOR} from '../../types/enums/Style';
import {Type} from '../../types/pokemon/Index';

const useStyles = (type: Type) => {
  const typeColor =
    Object.values(TYPE_COLOR)[Object.keys(TYPE_COLOR).indexOf(type.type.name)];

  return StyleSheet.create({
    container: {
      backgroundColor: typeColor,
    },
    information: {
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      backgroundColor: 'white',
      padding: 25,
    },
    header: {
      backgroundColor: typeColor,
    },
    sprite: {
        marginTop: -180,
        alignSelf: 'center'
    }
  });
};

export {useStyles};

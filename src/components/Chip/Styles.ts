import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 30,
    margin: 2,
    alignSelf: 'flex-start',
  },
  textSmall: {
    color: 'white',
    fontSize: 10,
    textTransform: 'capitalize',
    paddingHorizontal: 14,
    paddingVertical: 3,
    textAlign: 'center',
  },
  textMedium: {
    color: 'white',
    fontSize: 13,
    textTransform: 'capitalize',
    paddingHorizontal: 14,
    paddingVertical: 3,
    textAlign: 'center',
  },
  textLarge: {
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
    paddingHorizontal: 14,
    paddingVertical: 3,
    textAlign: 'center',
  }
});

export {styles};

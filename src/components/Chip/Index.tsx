import { Text } from '@react-native-material/core';
import React from 'react'
import { View } from 'react-native';
import { styles } from './Styles';

type TextVariant = 'small' | 'medium' | 'large';

interface ChipProp {
    label: string;
    variant: TextVariant
}

const calculateTextStyle = (variant: TextVariant) => {
  switch(variant) {
    case 'small': return styles.textSmall;
    case 'medium': return styles.textMedium;
    case 'large': return styles.textLarge;
  }
}

function Chip({label, variant}: ChipProp) {
  const textStyle = calculateTextStyle(variant);

  return (
    <View style={styles.chip}>
      <Text variant="caption" style={textStyle}>{label}</Text>
      </View>
  )
}

export {Chip};
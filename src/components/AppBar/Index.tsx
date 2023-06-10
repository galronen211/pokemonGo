import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AppBar, Flex, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { styles } from './Styles';

function TopBar() {
  return (
    <AppBar
      title="שלום גל"
    />
  );
}

export {TopBar};

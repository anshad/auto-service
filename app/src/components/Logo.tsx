import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12
  }
});

const Logo = () => (
  <Image source={require('../assets/logo.png')} style={styles.image} />
);

export default memo(Logo);

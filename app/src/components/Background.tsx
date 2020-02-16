import React, { memo } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Background = ({ children }: Props) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    {children}
  </KeyboardAvoidingView>
);

export default memo(Background);

// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {StyleSheet, View, Text, Image} from 'react-native';

// import logoImg from '../images/logo.png';

// export default class Logo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image source={logoImg} style={styles.image} />
//         <Text style={styles.text}>Auto Service</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingBottom: 20,
//   },
//   image: {
//     width: 80,
//     height: 80,
//   },
//   text: {
//     color: '#333',
//     fontWeight: 'bold',
//     backgroundColor: 'transparent',
//     marginTop: 20,
//     fontSize: 18,
//   },
// });
import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12
  }
});

export default memo(Logo);

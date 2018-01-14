import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput
        placeholder='Email'
        style={{ fontSize: 18, height: 40 }}
        onChange={() => false}
        />
      </View>

      <View style={styles.btnSeed}>
        <Button title="Seed" onPress={() => false} />
      </View>
  </View>
);


const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
   },
   formGroup: {
     flex: 1,
     justifyContent: 'center'
   },
   btnSeed: {
     flex: 1,
   }
});

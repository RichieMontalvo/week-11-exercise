import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {

  const goToFirst = () => {
    navigation.navigate('First');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Second Screen
      </Text>
      <Button title="Go to First Screen" 
              onPress={goToFirst}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
});

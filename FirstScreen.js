import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FirstScreen = ({ navigation }) => {

  const goToSecond = () => {
    navigation.navigate('Second');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        First Screen
      </Text>
      <Button title="Go to Second Screen" 
              onPress={goToSecond}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default FirstScreen;

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

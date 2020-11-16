import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ItemDetails = ({ navigation }) => {

  const goToList = () => {
    navigation.navigate('Item List');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Item Details
      </Text>
      <Button title="Go to Item List" 
              onPress={goToList}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default ItemDetails;

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

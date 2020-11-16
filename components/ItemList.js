import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ItemList = ({ navigation }) => {

  const goToDetails = () => {
    navigation.navigate('Item Details');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Item List
      </Text>
      <Button title="Go to Item Details" 
              onPress={goToDetails}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default ItemList;

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

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button } from 'react-native';

const ItemList = ({ route, navigation }) => {

  const { items } = route.params

  useEffect( () => {
    console.log(items)
  })

  const goToDetails = () => {
    navigation.navigate('Item Details');
  }

  const itemRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={items}
        renderItem={itemRow}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  row: {
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  }
});

import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const PRODUCTS = [
  { id: '1', title: 'Xbox', rating: '5/5', description: 'lorem ipsum' },
  { id: '2', title: 'PS5', rating: '5/5', description: 'lorem ipsum' },
  { id: '3', title: 'Nintendo Switch', rating: '4/5', description: 'lorem ipsum' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text>Title: {product.title}</Text>
      <Text>Description: {product.description}</Text>
      <Text>Rating: {product.rating}</Text>
      <Text>Key: {product.id}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F2',
  },
  item: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
});
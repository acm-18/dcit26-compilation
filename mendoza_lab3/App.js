import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === '') return;
    setItems([...items, text.trim()]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={text}
          onChangeText={setText}
        />
        <Button title="ADD" onPress={addItem} />
      </View>

      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginRight: 10,
  },
  item: {
    backgroundColor: '#808080',
    borderWidth: 1,
    borderColor: '#555',
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
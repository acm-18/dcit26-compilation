import React from 'react';
import { Modal, View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {'\n\n'}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
            {'\n\n'}
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </Text>
        </ScrollView>

        <View style={styles.buttonWrapper}>
          <Button title="CLOSE" color="#E53935" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
  },
  buttonWrapper: {
    marginTop: 16,
  },
});
import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="PROFILE" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK HOME" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK" onPress={() => navigation.navigate('HomeStack')} />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const menuButton = (navigation) => () => (
  <Button title="Menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
);

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ drawerLabel: 'About' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
});
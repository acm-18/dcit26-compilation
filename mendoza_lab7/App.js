import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, Button, ScrollView, TouchableOpacity,
  ActivityIndicator, StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.screen}>
      {loading || !user ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile', { user })}
          >
            <Image source={{ uri: user.picture.large }} style={styles.homeImage} />
          </TouchableOpacity>
          <Text style={styles.homeName}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}
      <View style={styles.buttonWrap}>
        <Button title="RANDOM USER" onPress={fetchUser} />
      </View>
    </View>
  );
}

function ProfileScreen({ route }) {
  const { user } = route.params;
  const loc = user.location;

  return (
    <ScrollView contentContainerStyle={styles.profile}>
      <Image source={{ uri: user.picture.large }} style={styles.profileImage} />
      <Text style={styles.profileName}>
        {user.name.title} {user.name.first} {user.name.last}
      </Text>

      <Text style={styles.heading}>About</Text>
      <Text style={styles.detail}>Age: {user.dob.age}</Text>
      <Text style={styles.detail}>Birthday: {user.dob.date}</Text>
      <Text style={styles.detail}>Gender: {user.gender}</Text>
      <Text style={styles.detail}>
        Address: {loc.street.number} {loc.street.name}, {loc.city}, {loc.state}, {loc.country}
      </Text>

      <Text style={styles.heading}>Contact</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>Phone: {user.phone}</Text>
      <Text style={styles.detail}>Cell: {user.cell}</Text>

      <Text style={styles.heading}>Other</Text>
      <Text style={styles.detail}>Username: {user.login.username}</Text>
      <Text style={styles.detail}>Nationality: {user.nat}</Text>
      <Text style={styles.detail}>Date registered: {user.registered.date}</Text>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
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
  homeImage: { width: 160, height: 160, borderRadius: 8 },
  homeName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  buttonWrap: { marginTop: 16 },
  profile: { padding: 24, alignItems: 'center', backgroundColor: '#F2F2F2' },
  profileImage: { width: 120, height: 120, borderRadius: 60 },
  profileName: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
  heading: {
    alignSelf: 'stretch',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginTop: 18,
    marginBottom: 6,
  },
  detail: { alignSelf: 'stretch', fontSize: 14, marginBottom: 4 },
});
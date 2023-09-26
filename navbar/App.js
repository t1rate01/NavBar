import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScren';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        title: 'Home',
        headerTitle: 'Home'
      }} 
      />
      <Stack.Screen
      name="Second"
      component={SecondScreen}
      options={{
        title: 'Second',
        headerTitle: 'Second'
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

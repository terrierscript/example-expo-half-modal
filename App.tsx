import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator()

const Navi = () => {
  return <Stack.Navigate>
  
  </Stack.Navigate>
}
export default function App() {
  return (
    <View style={styles.container}>
      <Navi/>
    </View>
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

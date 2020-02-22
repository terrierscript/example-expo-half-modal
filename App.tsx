import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { NavigationContainer } from "@react-navigation/native"
import { Modal } from "./Modal"

const Stack = createStackNavigator()

const Base = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Base</Text>
      <Button title="Show Modal" onPress={() => navigation.navigate("modal")} />
    </View>
  )
}

const Navi = () => {
  return (
    <Stack.Navigator
      mode={"modal"}
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent"
        },
        gestureEnabled: true,
        cardOverlayEnabled: true
      }}
      headerMode="none"
    >
      <Stack.Screen name="base" component={Base}></Stack.Screen>
      <Stack.Screen
        name="modal"
        component={Modal}
        options={{
          gestureResponseDistance: {
            vertical: 1000
          }
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Navi />
    </NavigationContainer>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    color: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

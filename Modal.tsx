import React from "react"
import { StyleSheet, View, SafeAreaView, Text } from "react-native"

export const Modal = () => {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <View style={styles.container}>
          <Text>This is modal</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalInnerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white"
  }
})

import React from "react"
import { StyleSheet, View, SafeAreaView, Text } from "react-native"
import { Col, Row, Grid } from "react-native-easy-grid"
export const Modal = () => {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <Grid style={[styles.modalInnerContainer, StyleSheet.absoluteFill]}>
        <Row style={styles.padding}></Row>
        <Row style={styles.container}>
          <Text>This is modal</Text>
        </Row>
      </Grid>
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
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "red"
  },
  padding: {
    flex: 1
  },
  modalInnerContainer: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // top: 300,
  }
})

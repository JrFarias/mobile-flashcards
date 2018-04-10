import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Question = ({ color, question, onPress, title }) => (
  <View style={styles.container}>
    <Text style={styles.question}>{ question }</Text>
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={[styles.btnText, { color }]}>{title}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  question: {
    fontSize: 30
  },
  btnText: {
    fontSize: 18,
    color: '#000'
  }
})

export default Question

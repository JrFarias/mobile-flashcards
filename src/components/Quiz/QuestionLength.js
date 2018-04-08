import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const QuestionLength = ({ lastQuestion, numberOfQuestions }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {lastQuestion} / {numberOfQuestions}
    </Text>
  </View>
)

const styles  = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20
  }
})

export default QuestionLength

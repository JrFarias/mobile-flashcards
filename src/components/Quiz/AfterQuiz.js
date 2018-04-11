import React, { Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { green, black, red } from '../../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'

export default class AfterQuiz extends Component {
  componentDidMount() {
    clearLocalNotification()
    .then(setLocalNotification)
  }

  render() {
  const { startQuiz, backToDeck, score } = this.props

  return(
  <View style={styles.container}>
    <Text style={styles.score}>Score: { score }</Text>
      <View style={styles.body}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={startQuiz}
            style={styles.btnStart}
          >
            <Text style={styles.btnText} >Start Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={backToDeck}
            style={styles.btnBack}
          >
            <Text style={styles.btnText}> Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
  </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  score: {
    fontSize: 30,
  },
  body: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'space-around',
  },
  btnStart: {
    backgroundColor: green,
    padding: 10,
    height: 50,
    borderRadius: 20,
    borderColor: black,
    borderWidth: 2,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
  },
  btnBack: {
    backgroundColor: red,
    padding: 10,
    marginTop: 30,
    height: 50,
    borderRadius: 20,
    borderColor: black,
    borderWidth: 2,
  },
})

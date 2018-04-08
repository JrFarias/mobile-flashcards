import { AsyncStorage } from 'react-native';

export const STORAGE_KEY = 'mobile:flashcards';

const defaultData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function initialState() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData))

  return defaultData
}

export function getAllDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(result => result === null
      ? initialState()
      : JSON.parse(result)
    )
}

export function getDeckByTitle(title) {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then((result) => {
    const decks = JSON.parse(result)

    return decks[title]
  })
}

export function addNewDeck(deck) {
  const newDeck = {
    [deck]: {
      title: deck,
      questions: [],
    }
  }

  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck));
}

export function addQuestion({ newQuestion, title }) {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then((result) => {
    let decks = JSON.parse(result);

    let questions = JSON.parse(JSON.stringify(decks[title].questions));
    questions.push(newQuestion)

    const value = JSON.stringify({
        [title]: {
          title,
          questions
        },
    });

    return AsyncStorage.mergeItem(STORAGE_KEY, value);
  });
}



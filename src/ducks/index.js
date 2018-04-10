export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export const getDecks = decks => ({
  type: GET_DECKS,
  decks,
})

export const addNewDeck = deck => ({
  type: ADD_DECK,
  deck,
})

export const addQuestion = params => ({
  type: ADD_QUESTION,
  params,
})

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: [],
        }
      }
    case ADD_QUESTION:
      const { title, newQuestion, questions } = action.params
      const allQuestions = JSON.parse(JSON.stringify(questions)).concat([ newQuestion ]);

      return {
        ...state,
        [title]: {
          ...state[title],
          questions: allQuestions
        },
      }
    default:
      return state
  }
}

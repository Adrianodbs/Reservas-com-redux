const initialState = []

const reserveReducer = (state = initialState, { type, payload }) => {
  console.log(state)
  switch (type) {
    case 'ADD_RESERVE':
      return [...state, payload]
    default:
      return state
  }
}

export default reserveReducer

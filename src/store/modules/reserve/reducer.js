const initialState = []

const reserveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_RESERVE':
      return [...state, payload]
    default:
      return state
  }
}

export default reserveReducer

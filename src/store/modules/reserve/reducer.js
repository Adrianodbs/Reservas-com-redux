import { produce } from 'immer'

const initialState = []

const reserveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === payload.id)

        if (tripIndex >= 0) {
          draft[tripIndex].amount += 1
        } else {
          draft.push({
            ...payload,
            amount: 1
          })
        }
      })
    default:
      return state
  }
}

export default reserveReducer

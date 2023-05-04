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
    case 'REMOVE_RESERVE':
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === payload)

        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1)
        }
      })
    case 'UPDATE_RESERVE': {
      if (payload.amount <= 0) {
        return state
      }
      return produce(state, draft => {
        const tripIndex = draft.findIndex(trip => trip.id === payload.id)

        if (tripIndex >= 0) {
          draft[tripIndex].amount = Number(payload.amount)
        }
      })
    }
    default:
      return state
  }
}

export default reserveReducer

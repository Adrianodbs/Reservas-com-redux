export function addReserve(trip) {
  return {
    type: 'ADD_RESERVE',
    payload: trip
  }
}

export function removeReserve(id) {
  return {
    type: 'REMOVE_RESERVE',
    payload: id
  }
}

export function updateAmountReserve(id, amount) {
  return {
    type: 'UPDATE_RESERVE',
    payload: { id, amount }
  }
}

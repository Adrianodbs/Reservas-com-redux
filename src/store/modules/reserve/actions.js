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

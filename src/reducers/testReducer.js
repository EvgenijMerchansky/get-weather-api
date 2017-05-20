const initialState = {
  info: []
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'TEST':

      return Object.assign({}, state, {info: action.payload})
    default:
      return state
  }
}

const initialState = {
  infoTitle: [],
  generalTitle: ''
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'TEST':

      return Object.assign({}, state, {infoTitle: action.payloadTitle, generalTitle: action.title})
    default:
      return state
  }
}
